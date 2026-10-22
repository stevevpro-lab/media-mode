// Fonctions partagées par toutes les pages.
const ICONS = {
  arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
};

const categoryLabel = (id) =>
  (window.CATEGORIES.find((c) => c.id === id) || {}).label || id;

const formatDate = (iso) =>
  new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const initials = (name) =>
  name.split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const articleUrl = (a) => `article.html?slug=${encodeURIComponent(a.slug)}`;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function mediaHtml(src, alt, extra = "") {
  return `<div class="media">${extra}<img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.classList.add('is-broken')"></div>`;
}

function cardHtml(a) {
  return `
    <a class="card" href="${articleUrl(a)}">
      ${mediaHtml(a.image.replace("w=1200", "w=700"), a.title, `<span class="tag">${escapeHtml(categoryLabel(a.category))} · ${escapeHtml(a.tag)}</span>`)}
      <div class="card-title"><h3>${escapeHtml(a.title)}</h3><span class="arrow">${ICONS.arrow}</span></div>
      <p>${escapeHtml(a.excerpt)}</p>
      <div class="meta">
        <span class="avatar">${initials(a.author)}</span>${escapeHtml(a.author)}
        <span class="dot"></span><time datetime="${a.date}">${formatDate(a.date)}</time>
      </div>
    </a>`;
}

function initLayout() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.querySelector(".newsletter");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input");
      const msg = document.querySelector(".newsletter-msg");
      if (!email.checkValidity()) {
        msg.textContent = "Merci d'entrer une adresse e-mail valide.";
        return;
      }
      msg.textContent = "Merci ! Vous recevrez bientôt nos prochaines inspirations.";
      form.reset();
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initLayout);
