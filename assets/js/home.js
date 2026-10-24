// Page d'accueil : hero, filtres par catégorie, recherche et « Voir plus ».
// Deux rangées complètes à la fois, quel que soit le nombre de colonnes
const pageSize = () =>
  getComputedStyle(document.querySelector(".grid")).gridTemplateColumns.split(" ").length * 2;

function renderHero() {
  const featured = window.ARTICLES.filter((a) => a.featured);
  const [main, ...side] = featured.length ? featured : window.ARTICLES;
  const hero = document.querySelector(".hero");

  hero.innerHTML = `
    <a class="card-overlay hero-main" href="${articleUrl(main)}">
      ${mediaHtml(main.image, main.title)}
      <div class="eyebrow">${escapeHtml(categoryLabel(main.category))}</div>
      <h1>${escapeHtml(main.title)}</h1>
      <div class="hero-foot">
        <div class="hero-actions">
          <span class="pill pill-light">Lire l'article ${ICONS.arrow}</span>
          <span class="author-chip">${avatarHtml(main.author)}par ${escapeHtml(main.author)}</span>
        </div>
        <p class="hero-note">${escapeHtml(main.excerpt)}</p>
      </div>
    </a>
    <div class="hero-side">
      ${side.slice(0, 2).map((a) => `
        <a class="card-overlay" href="${articleUrl(a)}">
          ${mediaHtml(a.image, a.title)}
          <div class="eyebrow">${escapeHtml(categoryLabel(a.category))}</div>
          <h2>${escapeHtml(a.title)}</h2>
        </a>`).join("")}
    </div>`;
}

function initBlog() {
  const grid = document.querySelector(".grid");
  const filters = document.querySelector(".filters");
  const search = document.querySelector("#search");
  const more = document.querySelector(".load-more");
  const params = new URLSearchParams(location.search);

  let category = params.get("cat") || "all";
  let query = "";
  let visible = pageSize();

  filters.insertAdjacentHTML(
    "beforeend",
    [{ id: "all", label: "Tous les articles" }, ...window.CATEGORIES]
      .map((c) => `<button class="filter" data-cat="${c.id}" aria-pressed="false">${c.label}</button>`)
      .join("")
  );

  const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function render() {
    filters.querySelectorAll(".filter").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.cat === category))
    );
    document.querySelectorAll(".nav a[data-cat]").forEach((a) =>
      a.toggleAttribute("aria-current", a.dataset.cat === category)
    );

    const q = normalize(query.trim());
    const list = window.ARTICLES.filter(
      (a) =>
        (category === "all" || a.category === category) &&
        (!q || normalize(`${a.title} ${a.excerpt} ${a.tag}`).includes(q))
    ).sort((a, b) => b.date.localeCompare(a.date));

    grid.innerHTML = list.length
      ? list.slice(0, visible).map(cardHtml).join("")
      : `<p class="empty">Aucun article ne correspond à votre recherche.</p>`;
    more.hidden = list.length <= visible;
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    category = btn.dataset.cat;
    visible = pageSize();
    const url = new URL(location.href);
    if (category === "all") url.searchParams.delete("cat");
    else url.searchParams.set("cat", category);
    history.replaceState(null, "", url);
    render();
  });

  search.addEventListener("input", () => {
    query = search.value;
    visible = pageSize();
    render();
  });

  more.addEventListener("click", () => {
    visible += pageSize();
    render();
  });

  // Les liens de catégorie du menu filtrent sans recharger la page
  document.querySelectorAll(".nav a[data-cat]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      filters.querySelector(`[data-cat="${a.dataset.cat}"]`).click();
      document.querySelector(".nav").classList.remove("is-open");
      document.querySelector("#blog").scrollIntoView();
    })
  );

  document.querySelector(".search-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#blog").scrollIntoView();
    search.focus({ preventScroll: true });
  });

  render();
}

renderHero();
initBlog();
