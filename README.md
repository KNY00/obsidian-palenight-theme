# Obsidian Material Palenight Theme

Un thème soigné et moderne pour [Obsidian](https://obsidian.md/), fidèlement inspiré par la palette de couleurs du célèbre thème VS Code **Material Palenight** créé par Olaolu Olawuyi.

---

## 🎨 Palette de couleurs (Palenight)

| Rôle | Couleur | Hex |
| :--- | :--- | :--- |
| **Fond principal** | Bleu nuit profond | `#292D3E` |
| **Fonds secondaires / Barres latérales** | Nuance sombre | `#282C3D` / `#232635` |
| **Texte principal** | Gris perle doux | `#BFC7D5` |
| **Texte contrasté / Titres** | Blanc bleuté | `#EEFFFF` |
| **Accent signature / Boutons / Curseur** | Violet Palenight | `#7E57C2` |
| **H1 & Nombres** | Pêche / Orange | `#F78C6C` |
| **H2 & Mots-clés** | Lilas / Pourpre | `#C792EA` |
| **H3 & Tags / Propriétés** | Turquoise / Teal | `#80CBC4` |
| **H4 & Variables / Classes** | Jaune ambre | `#FFCB6B` |
| **H5 & Fonctions** | Bleu ciel | `#82AAFF` |
| **H6 & Chaînes de caractères** | Vert tendre | `#C3E88D` |
| **Erreurs & Avertissements critiques** | Rouge corail | `#FF5370` |

---

## 🏗️ Architecture du projet (Modèle 7-1 SCSS)

Le projet adopte le standard architectural **7-1**, garantissant une modularité et une maintenabilité optimales :

```text
obsidian-theme/
├── manifest.json              # Métadonnées du thème Obsidian
├── package.json               # Scripts de build & dépendances
├── theme.css                  # Fichier compilé final chargé par Obsidian
└── src/
    └── scss/
        ├── abstracts/         # Variables, tokens, mixins, fonctions, utilitaires
        │   ├── _variables.scss
        │   ├── _functions.scss
        │   ├── _mixins.scss
        │   ├── _utilities.scss
        │   └── _index.scss
        ├── base/              # Styles globaux, typographie Markdown, :root
        │   ├── _reset.scss
        │   ├── _root.scss
        │   ├── _typography.scss
        │   └── _index.scss
        ├── components/        # Un fichier par composant (Méthodologie BEM)
        │   ├── _buttons.scss
        │   ├── _inputs.scss
        │   ├── _modals.scss
        │   ├── _callouts.scss
        │   ├── _tags.scss
        │   ├── _status-bar.scss
        │   ├── _tabs.scss
        │   ├── _tables.scss
        │   ├── _checkboxes.scss
        │   ├── _code-blocks.scss
        │   ├── _graph.scss
        │   ├── _tree-view.scss
        │   └── _index.scss
        ├── layout/            # Disposition de l'interface Obsidian
        │   ├── _workspace.scss
        │   ├── _sidebar.scss
        │   ├── _header.scss
        │   └── _index.scss
        ├── pages/             # Écrans et vues spécifiques
        │   ├── _settings.scss
        │   ├── _canvas.scss
        │   └── _index.scss
        ├── themes/            # Mappings de variables d'environnement
        │   ├── _dark.scss     # Thème Palenight sombre
        │   ├── _light.scss    # Variante Palenight claire
        │   └── _index.scss
        ├── vendors/           # Intégrations tierces
        │   ├── _codemirror.scss # Coloration syntaxique CodeMirror 6
        │   └── _index.scss
        └── main.scss          # Point d'entrée unique
```

---

## 🚀 Commandes de développement (`package.json`)

Toutes les commandes sont accessibles via `npm` :

| Commande | Action |
| :--- | :--- |
| `npm run build` | Compile `src/scss/main.scss` vers `theme.css` en mode étendu lisible |
| `npm run build:min` | Compile et minifie le CSS (`theme.css`) pour la production |
| `npm run watch` (ou `npm run dev`) | Surveille les modifications des fichiers `.scss` et recompile instantanément |

---

## 📐 Méthodologies appliquées

1. **BEM (Block Element Modifier) :** Les composants sont modélisés sous forme de blocs indépendants (ex. `.ob-btn`, `.ob-btn__icon`, `.ob-btn--cta`, `.ob-modal`, `.ob-callout`) et couplés de manière transparente avec les classes internes d'Obsidian.
2. **Modèle 7-1 :** Organisation en 7 dossiers thématiques pour une séparation claire des responsabilités.
3. **Composants isolés :** Chaque élément de l'interface (boutons, formulaires, modales, encadrés, tableaux...) dispose de son propre fichier SCSS.
4. **Design Tokens centralisés :** Toutes les couleurs, échelles typographiques, ombres et transitions sont définies dans `abstracts/_variables.scss` et partagées via `@use`.
5. **Mixins SCSS réutilisables :** Gestion des ombres complexes (`@include elevation(n)`), anneaux de focus, défilements personnalisés, et états interactifs dans `abstracts/_mixins.scss`.
6. **Utilitaires & Approche `@apply` :** Un module dédié `abstracts/_utilities.scss` implémente un mixin `@include apply(...)` permettant de composer facilement des utilitaires atomiques (ex: flex-center, rounded-md, shadow-sm).
