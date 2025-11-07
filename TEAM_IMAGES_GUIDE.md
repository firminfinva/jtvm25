# Guide pour les Images de l'Équipe

## 📁 Structure des Fichiers

Placez toutes les images de l'équipe dans le dossier :
```
public/team/
```

## 📝 Noms de Fichiers Recommandés

Utilisez ces noms exacts pour que les images s'affichent automatiquement :

1. **Jonas Alvin (CEO)**
   - Nom de fichier : `jonas-alvin.jpg` (ou `.png`, `.webp`)
   - Alternative : `jonas-alvin.png`, `jonas-alvin.webp`

2. **Firmin NGANDULI (Web Master)**
   - Nom de fichier : `firmin-nganduli.jpg`
   - Alternative : `firmin-nganduli.png`, `firmin-nganduli.webp`

3. **JACQUES KITOKO (Vidéaste mobile & reporter)**
   - Nom de fichier : `jacques-kitoko.jpg`
   - Alternative : `jacques-kitoko.png`, `jacques-kitoko.webp`

4. **Aminata bwiruka (Communicante environnementaliste)**
   - Nom de fichier : `aminata-bwiruka.jpg`
   - Alternative : `aminata-bwiruka.png`, `aminata-bwiruka.webp`

## 🎨 Spécifications Techniques

### Dimensions Recommandées
- **Aspect ratio** : 3:4 (portrait, vertical)
- **Taille optimale** : 600x800px ou 900x1200px
- **Résolution** : 72-150 DPI (pour le web)

### Format de Fichier
- **Formats acceptés** : JPG, PNG, WebP
- **Recommandé** : WebP (meilleure compression) ou JPG (compatibilité)
- **Taille maximale** : 500KB par image (optimisé pour le web)

### Style et Composition
- **Fond** : Bleu uni (couleur primaire du site) derrière chaque personne
- **Position** : Personne centrée dans l'image
- **Éclairage** : Lumière uniforme et professionnelle
- **Style** : Cohérent pour toutes les photos (même style, même éclairage)

## 🖼️ Exemple de Structure

```
public/
  └── team/
      ├── jonas-alvin.jpg
      ├── firmin-nganduli.jpg
      ├── jacques-kitoko.jpg
      └── aminata-bwiruka.jpg
```

## ✅ Checklist Avant d'Uploader

- [ ] Images nommées correctement (minuscules, tirets)
- [ ] Format 3:4 (portrait)
- [ ] Fond bleu uni derrière chaque personne
- [ ] Visages clairement visibles et centrés
- [ ] Images optimisées pour le web (< 500KB)
- [ ] Style cohérent entre toutes les photos
- [ ] Bonne résolution (pas floues)

## 🛠️ Outils Recommandés

### Pour Optimiser les Images
- **TinyPNG** : https://tinypng.com/ (compression)
- **ImageOptim** : https://imageoptim.com/ (Mac)
- **Squoosh** : https://squoosh.app/ (éditeur en ligne)

### Pour Redimensionner
- **Canva** : https://www.canva.com/
- **Photoshop** / **GIMP**
- **Online Image Resizer** : https://imageresizer.com/

## 📱 Instructions pour Activer les Images

Une fois les images placées dans `public/team/` avec les bons noms :

1. Ouvrez `app/components/sections/About.tsx`
2. Trouvez la section commentée avec `{/* Uncomment and use this... */}`
3. Décommentez le code `Image` (supprimez les `/*` et `*/`)
4. Les images s'afficheront automatiquement !

## 🎯 Exemple de Code à Décommenter

```tsx
<Image 
  src={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
  alt={member.name}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
/>
```

## 💡 Conseils Supplémentaires

1. **Cohérence** : Utilisez le même photographe/style pour toutes les photos
2. **Fond bleu** : Assurez-vous que le bleu correspond à la couleur primaire du site
3. **Éclairage** : Évitez les ombres dures sur les visages
4. **Expression** : Sourires professionnels et chaleureux
5. **Vêtements** : Style professionnel et cohérent

## 🚀 Après l'Upload

Une fois les images en place, testez sur :
- Desktop (grand écran)
- Tablette
- Mobile

Les images s'adapteront automatiquement à la taille de l'écran grâce au système responsive.

