// Page article : affiche l'article dont le slug est passé dans l'URL.
(function () {
  const slug = new URLSearchParams(location.search).get("slug");
  const article = window.ARTICLES.find((a) => a.slug === slug) || window.ARTICLES[0];

  document.title = `${article.title} · luniversdelea.art`;
  document.querySelector('meta[name="description"]').setAttribute("content", article.excerpt);

  document.querySelector(".article-hero").innerHTML = `
    ${mediaHtml(article.image, article.title)}
    <div class="eyebrow">${escapeHtml(categoryLabel(article.category))} · ${escapeHtml(article.tag)}</div>
    <h1>${escapeHtml(article.title)}</h1>
    <div class="hero-actions">
      <span class="author-chip">${avatarHtml(article.author)}par ${escapeHtml(article.author)}</span>
      <span class="author-chip" style="padding-left:16px">${formatDate(article.date)} · ${article.readTime} min de lecture</span>
    </div>`;

  const body = article.body
    .map((block) =>
      block.startsWith("## ")
        ? `<h2>${escapeHtml(block.slice(3))}</h2>`
        : `<p>${escapeHtml(block)}</p>`
    )
    .join("");
  document.querySelector(".article-body").innerHTML = `
    <a class="back" href="index.html#blog">← Tous les articles</a>
    <p class="lede">${escapeHtml(article.excerpt)}</p>
    ${body}`;

  const related = window.ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug)
    .concat(window.ARTICLES.filter((a) => a.category !== article.category))
    .slice(0, 3);
  document.querySelector(".related .grid").innerHTML = related.map(cardHtml).join("");

  document.querySelectorAll(".nav a[data-cat]").forEach((a) =>
    a.toggleAttribute("aria-current", a.dataset.cat === article.category)
  );
})();
