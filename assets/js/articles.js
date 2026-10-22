// Contenu éditorial du média. Pour publier un nouvel article, ajoutez un objet
// en tête de liste : il apparaîtra automatiquement sur l'accueil et aura sa page.
// Photos générées pour le média (Higgsfield) : version pleine taille + miniature légère
const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3Kwk91zPCT78hRtN6MFnG2be45S/hf_20261022_";
const PHOTO = (id) => ({ image: `${HF}${id}.png`, thumb: `${HF}${id}_min.webp` });

// Photo des autrices, affichée dans les pastilles « par … »
window.AUTHORS = {
  "Léa": { photo: `${HF}095813_0819bc9c-79ca-4d71-84ad-1954d6472a4c_min.webp` },
};

window.CATEGORIES = [
  { id: "mode", label: "Mode" },
  { id: "deco", label: "Déco" },
  { id: "bijoux", label: "Bijoux" },
];

window.ARTICLES = [
  {
    slug: "allure-parfaite-et-pratique",
    category: "mode",
    tag: "Tendances",
    title: "Comment avoir l'allure parfaite tout en restant pratique",
    excerpt:
      "Être élégante ne veut pas dire sacrifier son confort : nos règles simples pour un style soigné, du matin au soir.",
    ...PHOTO("093822_03079144-028b-4a0f-a65b-48dcf5efd2e2"),
    author: "Léa",
    date: "2026-10-20",
    readTime: 6,
    featured: true,
    body: [
      "On croit souvent qu'il faut choisir entre l'allure et le confort. C'est faux : les silhouettes les plus réussies sont celles dans lesquelles on se sent bien, parce que l'aisance se voit.",
      "## Miser sur les matières",
      "Une maille épaisse, un lin lavé, une laine douce : la matière fait la moitié du travail. Elle tombe bien, se froisse peu et donne immédiatement un air soigné à une tenue simple.",
      "## Un camaïeu plutôt qu'un contraste",
      "Les tons sable, crème et camel s'accordent entre eux sans effort. Un ensemble ton sur ton allonge la silhouette et paraît pensé, même enfilé en cinq minutes.",
      "## Les bonnes chaussures",
      "Une paire de mocassins souples ou de baskets en cuir blanc suffit à passer de la journée au dîner. Gardez les talons pour les occasions où vous serez assise.",
      "Le secret, au fond, c'est d'avoir moins de pièces mais de les aimer toutes. Le reste suit.",
    ],
  },
  {
    slug: "nouvelles-collections-automne",
    category: "mode",
    tag: "Collections",
    title: "Les nouvelles collections d'automne sont arrivées",
    excerpt:
      "Trench, cuir patiné et maille torsadée : ce qu'on retient des vitrines de la saison.",
    ...PHOTO("093730_2fc93269-ed5c-4c32-b6ff-e05c26e1f3d1"),
    author: "Léa",
    date: "2026-10-18",
    readTime: 5,
    featured: true,
    body: [
      "L'automne a toujours été la saison préférée des amoureuses de mode : on superpose, on joue avec les textures, on ressort les manteaux.",
      "## Le trench, toujours",
      "Il revient cette année plus ample, ceinturé bas, dans des teintes mastic ou chocolat. À porter ouvert sur un pull col roulé.",
      "## Le cuir qui a vécu",
      "Les vestes au cuir légèrement patiné remplacent le noir brillant. Elles se marient aussi bien avec un jean qu'avec une jupe longue en maille.",
      "Nos vitrines préférées de la saison sont celles qui misent sur peu de pièces, bien coupées, plutôt que sur l'accumulation.",
    ],
  },
  {
    slug: "bijoux-or-superposes",
    category: "bijoux",
    tag: "Style",
    title: "L'art de superposer ses bijoux en or",
    excerpt:
      "Chaînes fines, joncs et bagues empilées : la méthode pour un rendu précieux sans en faire trop.",
    ...PHOTO("093823_ec5f4fea-0f3b-4ad8-8184-17c37bbcadd3"),
    author: "Léa",
    date: "2026-10-16",
    readTime: 4,
    featured: true,
    body: [
      "Superposer ses bijoux, c'est raconter une histoire : celle d'un cadeau, d'un voyage, d'une trouvaille. Encore faut-il que l'ensemble reste harmonieux.",
      "## Varier les longueurs",
      "Pour les colliers, comptez trois à cinq centimètres d'écart entre chaque chaîne. Elles ne s'emmêlent pas et chacune a sa place.",
      "## Un fil conducteur",
      "Gardez une seule couleur de métal, ou un seul motif récurrent. C'est ce qui donne de la cohérence à un mélange de pièces anciennes et récentes.",
      "## Laisser respirer",
      "Si vos oreilles sont chargées, allégez le cou. Si vos mains sont couvertes de bagues, choisissez un seul bracelet.",
    ],
  },
  {
    slug: "salon-tons-naturels",
    category: "deco",
    tag: "Intérieur",
    title: "Un salon apaisant en tons naturels",
    excerpt:
      "Lin, bois clair et terre cuite : composer une pièce à vivre douce et lumineuse.",
    ...PHOTO("093822_0f50d973-797d-4cf2-a7b4-6600a19cc446"),
    author: "Léa",
    date: "2026-10-14",
    readTime: 5,
    body: [
      "Le salon est la pièce où l'on se retrouve. Il mérite une ambiance qui invite à ralentir.",
      "## Une base neutre",
      "Murs blanc cassé ou beige rosé, sol en bois clair : la base doit rester discrète pour laisser parler les textures.",
      "## Des matières qui se touchent",
      "Un canapé en lin, un plaid en laine bouclée, une table basse en bois brut. On veut avoir envie de poser la main partout.",
      "## La lumière en plusieurs points",
      "Oubliez le plafonnier seul. Une lampe à poser, un lampadaire et quelques bougies créent une lumière douce le soir.",
    ],
  },
  {
    slug: "boucles-oreilles-statement",
    category: "bijoux",
    tag: "Tendances",
    title: "Boucles d'oreilles statement : oser le volume",
    excerpt:
      "Une seule pièce forte suffit à transformer une tenue simple. Nos conseils pour bien les choisir.",
    ...PHOTO("093823_e0074063-badd-40f8-a711-3c61074f5ca0"),
    author: "Léa",
    date: "2026-10-12",
    readTime: 3,
    body: [
      "Les boucles d'oreilles imposantes sont la façon la plus simple de donner du caractère à un t-shirt blanc.",
      "## Selon la forme du visage",
      "Les formes longues affinent un visage rond, les créoles adoucissent un visage anguleux. Mais la règle d'or reste de choisir ce qui vous plaît.",
      "## Dégager la nuque",
      "Un chignon bas ou des cheveux attachés mettent la pièce en valeur. Gardez le reste de la tenue sobre.",
    ],
  },
  {
    slug: "chambre-cocon",
    category: "deco",
    tag: "Chambre",
    title: "Créer une chambre cocon pour l'hiver",
    excerpt:
      "Linge de lit lavé, lumières tamisées et quelques objets choisis : la recette d'une chambre où l'on dort bien.",
    ...PHOTO("093731_65099e77-b427-4c1e-8269-75ea6baf36ee"),
    author: "Léa",
    date: "2026-10-10",
    readTime: 4,
    body: [
      "Une chambre réussie, c'est une chambre où l'on n'a rien à faire d'autre que se reposer.",
      "## Le lit au centre",
      "Investissez dans un beau linge de lit en lin lavé ou en percale. Superposez un plaid et deux tailles de coussins.",
      "## Moins d'objets",
      "Une table de chevet, une lampe, un livre. Le reste se range ailleurs.",
    ],
  },
  {
    slug: "garde-robe-capsule",
    category: "mode",
    tag: "Essentiels",
    title: "Construire une garde-robe capsule en 15 pièces",
    excerpt:
      "Moins de vêtements, plus de tenues : la liste des basiques qui se combinent entre eux.",
    ...PHOTO("093731_3773062b-69d3-4ae6-be1a-e8ef3f72d3fa"),
    author: "Léa",
    date: "2026-10-08",
    readTime: 7,
    body: [
      "La garde-robe capsule n'est pas une contrainte : c'est la fin du « je n'ai rien à me mettre ».",
      "## Les bases",
      "Un manteau, un blazer, deux pantalons, un jean, une jupe, trois hauts, deux pulls, une robe, deux paires de chaussures et un sac.",
      "## Une palette restreinte",
      "Choisissez deux couleurs neutres et une couleur d'accent. Tout se combine, chaque matin devient simple.",
    ],
  },
  {
    slug: "colliers-perles-modernes",
    category: "bijoux",
    tag: "Classiques",
    title: "La perle se réinvente : nos colliers préférés",
    excerpt:
      "Loin du rang sage, la perle se porte irrégulière, mêlée à l'or ou en pendentif solitaire.",
    ...PHOTO("093731_783aa4da-fd6c-4fbe-beb6-868b74676c2a"),
    author: "Léa",
    date: "2026-10-06",
    readTime: 4,
    body: [
      "La perle a longtemps eu une image un peu sage. Les créatrices d'aujourd'hui l'ont libérée.",
      "## Les perles baroques",
      "Leur forme irrégulière les rend uniques et beaucoup plus modernes. Elles se portent aussi bien avec un pull qu'avec une robe du soir.",
      "## Le mélange des matières",
      "Une perle sur une chaîne en or, c'est l'alliance parfaite entre classique et contemporain.",
    ],
  },
  {
    slug: "plantes-interieur",
    category: "deco",
    tag: "Végétal",
    title: "Faire entrer le végétal dans chaque pièce",
    excerpt:
      "Quelles plantes choisir selon la lumière, et comment les mettre en scène.",
    ...PHOTO("093856_ca710fa0-daed-464e-ab64-629b0531c9ce"),
    author: "Léa",
    date: "2026-10-04",
    readTime: 5,
    body: [
      "Une plante change une pièce plus sûrement qu'un meuble. Encore faut-il qu'elle s'y plaise.",
      "## Selon la lumière",
      "Plein soleil : oiseau de paradis, olivier. Lumière douce : monstera, pothos. Peu de lumière : zamioculcas, sansevieria.",
      "## La mise en scène",
      "Regroupez les plantes par trois, à des hauteurs différentes, dans des pots de la même famille de matières.",
    ],
  },
  {
    slug: "shopping-responsable",
    category: "mode",
    tag: "Conseils",
    title: "Faire son shopping de façon plus responsable",
    excerpt:
      "Seconde main, matières durables, achats réfléchis : les bons réflexes, sans culpabiliser.",
    ...PHOTO("093856_c336cf06-3304-45a4-86ed-16c479d34fa3"),
    author: "Léa",
    date: "2026-10-02",
    readTime: 6,
    body: [
      "Acheter mieux, ce n'est pas forcément acheter plus cher. C'est surtout acheter ce qu'on portera vraiment.",
      "## La règle des 30 tenues",
      "Avant un achat, demandez-vous si vous porterez la pièce au moins trente fois. Si la réponse est non, passez votre chemin.",
      "## La seconde main",
      "Friperies, dépôts-ventes, plateformes en ligne : on y trouve des pièces de qualité à prix doux.",
    ],
  },
  {
    slug: "bagues-empilees",
    category: "bijoux",
    tag: "Style",
    title: "Bagues empilées : la composition idéale",
    excerpt:
      "Joncs fins, chevalières et anneaux sculptés : comment composer ses mains.",
    ...PHOTO("093856_5dc663dd-65a7-4eda-9c88-94a71671d466"),
    author: "Léa",
    date: "2026-09-30",
    readTime: 3,
    body: [
      "Les bagues empilées ont ce charme décontracté qui va avec tout.",
      "## L'équilibre",
      "Chargez une main plus que l'autre. Alternez pièces fines et pièces plus marquées.",
      "## Les doigts oubliés",
      "L'index et le petit doigt sont parfaits pour une chevalière. Le majeur accueille une bague plus imposante.",
    ],
  },
  {
    slug: "salle-a-manger-conviviale",
    category: "deco",
    tag: "Art de vivre",
    title: "Une salle à manger conviviale et chaleureuse",
    excerpt:
      "Grande table, chaises dépareillées et vaisselle artisanale : l'esprit maison de famille.",
    ...PHOTO("093920_7119d1d0-7897-4085-8232-066eb0a1c606"),
    author: "Léa",
    date: "2026-09-28",
    readTime: 5,
    body: [
      "La table est le cœur de la maison. C'est là qu'on reçoit, qu'on discute, qu'on reste longtemps.",
      "## Une grande table",
      "Privilégiez le bois massif, qui vieillit bien et supporte les années.",
      "## Le charme du dépareillé",
      "Des chaises de styles différents mais de la même teinte donnent du caractère sans désordre.",
    ],
  },
];
