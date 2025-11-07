# Commandes pour Exécuter Cloudflare

## 🚀 Installation Rapide

### 1. Installer Wrangler (CLI Cloudflare)

```bash
npm install -D wrangler
```

Ou globalement:
```bash
npm install -g wrangler
```

### 2. Se connecter à Cloudflare

```bash
npx wrangler login
```

Cela ouvrira votre navigateur pour vous authentifier avec votre compte Cloudflare.

## 📦 Commandes de Déploiement

### Option 1: Utiliser les scripts npm (Recommandé)

```bash
# Déployer en production
npm run deploy:cloudflare

# Déployer en preview
npm run deploy:cloudflare:preview
```

### Option 2: Commandes manuelles

```bash
# 1. Construire le projet
npm run build

# 2. Déployer sur Cloudflare Pages
npx wrangler pages deploy .next --project-name=jtvm
```

### Option 3: En une seule commande

```bash
npm run build && npx wrangler pages deploy .next --project-name=jtvm
```

## 🔧 Commandes Utiles

### Voir tous les projets
```bash
npx wrangler pages project list
```

### Voir les déploiements d'un projet
```bash
npx wrangler pages deployment list --project-name=jtvm
```

### Créer un nouveau projet
```bash
npx wrangler pages project create jtvm
```

### Voir les logs en temps réel
```bash
npx wrangler pages deployment tail --project-name=jtvm
```

### Ajouter une variable d'environnement (secret)
```bash
npx wrangler pages secret put NEXT_PUBLIC_CF_BEACON_TOKEN
```

## 📝 Workflow Complet

```bash
# 1. Installer les dépendances (si pas déjà fait)
npm install

# 2. Installer Wrangler
npm install -D wrangler

# 3. Se connecter à Cloudflare
npx wrangler login

# 4. Créer le projet (première fois seulement)
npx wrangler pages project create jtvm

# 5. Ajouter les variables d'environnement (première fois seulement)
npx wrangler pages secret put NEXT_PUBLIC_CF_BEACON_TOKEN
# Entrez votre token quand demandé

# 6. Construire et déployer
npm run deploy:cloudflare
```

## 🌐 Déploiement via Dashboard (Alternative)

Si vous préférez utiliser l'interface web:

1. Allez sur https://dash.cloudflare.com/
2. **Pages** → **Create a project**
3. Connectez votre repository GitHub
4. Configuration:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
   - Node version: 18

## ✅ Vérification

Après le déploiement, vous obtiendrez une URL comme:
```
https://jtvm.pages.dev
```

Vérifiez que votre site fonctionne et que les analytics Cloudflare sont actifs!

