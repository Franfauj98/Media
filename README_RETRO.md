# Rétro-documentation du projet

## Présentation générale
Ce projet est une application Angular permettant de visualiser différentes fonctionnalités, dont un viewer de marées, un module de recettes, et une page "À propos". L'application est structurée autour de plusieurs modules et composants réutilisables, avec une organisation claire en dossiers pour chaque fonctionnalité.

## Structure du projet
- **src/app/features/tide-viewer/** : Module principal pour la visualisation des marées, avec composants pour l'affichage des jours, des cartes, la pagination, et le sélecteur de mois.
- **src/app/features/recipe/** : Module de gestion des recettes, avec filtres, listes, et modèles de données.
- **src/app/features/about/** : Module pour la page "À propos".
- **src/app/shared/** : Composants et modèles partagés (header, chips, loader, etc.).
- **src/assets/data/** : Fichiers JSON contenant les données des marées (octobre, novembre, etc.).
- **src/assets/image/** : Images utilisées dans l'application.
- **src/assets/style/** : Fichiers de styles globaux.

## Fonctionnalités principales
- **Viewer de marées** :
  - Affichage des horaires de marées par jour et par mois.
  - Sélecteur de mois pour naviguer entre les données d'octobre et novembre.
  - Pagination pour naviguer entre les jours.
  - Utilisation de composants dédiés pour chaque partie de l'affichage (carte, jour, pagination, sélecteur).
- **Recettes** :
  - Filtrage et affichage des recettes par type de plat.
  - Modèles de données pour la gestion des recettes.
- **Page À propos** :
  - Informations sur le projet ou l'auteur.
- **Composants partagés** :
  - Header, chips, loader, etc. pour une meilleure réutilisabilité et cohérence visuelle.

## Organisation des composants
Les composants sont rangés dans des sous-dossiers selon leur fonctionnalité et leur usage (container, component, service, model). Les anciens fichiers non utilisés ont été supprimés pour alléger le projet.

## Style et ergonomie
- Les styles sont harmonisés entre les différents composants.
- Les tailles de police et de boutons sont adaptées pour le mobile (0,8rem pour éviter les retours à la ligne).
- Le sélecteur de mois reprend le style général de la page pour une meilleure intégration visuelle.

## Données
Les données des marées sont récupérées depuis le site maree.info et stockées dans des fichiers JSON par mois dans `src/assets/data/`.

## Bonnes pratiques
- Utilisation de variables pour les chaînes de caractères en dur.
- Suppression du code non utilisé.
- Organisation modulaire et évolutive.

## Pour aller plus loin
- Ajouter d'autres mois ou années dans le viewer de marées.
- Intégrer d'autres fonctionnalités ou modules selon les besoins.

---

*Document généré automatiquement le 08/09/2025.*

