# Guide de Déploiement Cloudflare

## Installation et Configuration

### 1. Installer Wrangler CLI (optionnel, pour déploiement via CLI)

```bash
npm install -g wrangler
```

Ou avec npm local:
```bash
npm install -D wrangler
```

### 2. Se connecter à Cloudflare

```bash
wrangler login
```

Cela ouvrira votre navigateur pour vous authentifier.

## Déploiement sur Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommandé)

1. Allez sur https://dash.cloudflare.com/
2. Naviguez vers **Pages** → **Create a project**
3. Connectez votre repository GitHub/GitLab
4. Configurez les paramètres de build :
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/`
   - **Node version**: 18 ou supérieur

### Option 2: Via Wrangler CLI

```bash
# Construire le projet
npm run build

# Déployer sur Cloudflare Pages
npx wrangler pages deploy .next --project-name=jtvm
```

Ou si vous avez installé Wrangler globalement:
```bash
npm run build
wrangler pages deploy .next --project-name=jtvm
```

### Option 3: Scripts npm (ajoutés au package.json)

Ajoutez ces scripts à votre `package.json`:

```json
{
  "scripts": {
    "deploy:cloudflare": "npm run build && wrangler pages deploy .next --project-name=jtvm",
    "deploy:cloudflare:preview": "npm run build && wrangler pages deploy .next --project-name=jtvm-preview"
  }
}
```

Puis exécutez:
```bash
npm run deploy:cloudflare
```

## Configuration des Variables d'Environnement

### Via Dashboard Cloudflare

1. Allez dans votre projet Pages
2. **Settings** → **Environment variables**
3. Ajoutez:
   - **Variable name**: `NEXT_PUBLIC_CF_BEACON_TOKEN`
   - **Value**: Votre token Cloudflare Analytics

### Via Wrangler CLI

```bash
wrangler pages secret put NEXT_PUBLIC_CF_BEACON_TOKEN
```

## Commandes Utiles

### Voir les projets
```bash
wrangler pages project list
```

### Voir les déploiements
```bash
wrangler pages deployment list --project-name=jtvm
```

### Créer un projet
```bash
wrangler pages project create jtvm
```

### Voir les logs
```bash
wrangler pages deployment tail --project-name=jtvm
```

## Commandes Rapides

```bash
# 1. Installer les dépendances
npm install

# 2. Construire le projet
npm run build

# 3. Déployer sur Cloudflare Pages
npx wrangler pages deploy .next --project-name=jtvm

# Ou en une seule commande:
npm run build && npx wrangler pages deploy .next --project-name=jtvm
```

