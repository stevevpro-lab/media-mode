# Les inspirations de Léa

Site : luniversdelea.art

Le média de Léa : **Mode, Déco et Bijoux**.

Site statique (HTML, CSS, JavaScript), sans étape de compilation : il s'héberge tel quel sur GitHub Pages, Netlify, Vercel ou n'importe quel hébergeur.

## Aperçu en local

Ouvrez `index.html` dans un navigateur, ou lancez un petit serveur :

```sh
python3 -m http.server 8000
```

puis allez sur http://localhost:8000.

## Structure

- `index.html` : accueil (articles à la une, journal filtrable par rubrique, recherche, « Voir plus », pied de page avec newsletter)
- `article.html` : page article, qui affiche l'article indiqué par `?slug=…`
- `assets/js/articles.js` : **tout le contenu éditorial**
- `assets/css/style.css` : styles (couleurs en variables en haut du fichier)

## Publier un article

Ajoutez un objet en tête de `window.ARTICLES` dans `assets/js/articles.js` :

```js
{
  slug: "mon-nouvel-article",       // utilisé dans l'adresse de la page
  category: "mode",                 // mode, accessoires, bijoux, maroquinerie ou maison-deco
  tag: "Tendances",
  title: "Titre de l'article",
  excerpt: "Une ou deux phrases de résumé.",
  image: "https://…/photo.jpg",     // URL complète de la photo
  author: "Léa",
  date: "2026-10-22",
  readTime: 4,
  featured: true,                   // facultatif : apparaît en haut de l'accueil
  body: ["Paragraphe…", "## Intertitre", "Paragraphe…"],
}
```

Les trois premiers articles marqués `featured` composent le bloc « À la une ».

Les photos actuelles viennent d'Unsplash et servent d'exemples ; si une image ne charge pas, un fond dégradé couleur sable la remplace.
