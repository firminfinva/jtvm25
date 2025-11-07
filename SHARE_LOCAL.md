# Partager votre Site Localement

## 🚀 Méthode Rapide : Cloudflare Tunnel (Recommandé)

### 1. Installer Cloudflare Tunnel

```bash
# Windows (PowerShell)
winget install --id Cloudflare.cloudflared

# Ou télécharger depuis: https://github.com/cloudflare/cloudflared/releases
```

### 2. Lancer le site avec tunnel

```bash
# Terminal 1: Lancer Next.js
npm run dev

# Terminal 2: Créer le tunnel (dans un nouveau terminal)
cloudflared tunnel --url http://localhost:3000
```

Vous obtiendrez un lien comme: `https://xxxxx.trycloudflare.com` que vous pouvez partager!

## 📱 Alternative : Utiliser ngrok

### 1. Installer ngrok

```bash
# Télécharger depuis: https://ngrok.com/download
# Ou avec npm
npm install -g ngrok
```

### 2. Lancer

```bash
# Terminal 1: Lancer Next.js
npm run dev

# Terminal 2: Créer le tunnel ngrok
ngrok http 3000
```

Vous obtiendrez un lien comme: `https://xxxxx.ngrok.io`

## 🎯 Méthode Simple : Script Automatique

J'ai ajouté des scripts dans package.json. Utilisez:

```bash
# Installer cloudflared d'abord (voir ci-dessus)
# Puis:
npm run dev:tunnel
```

## 📋 Commandes Complètes

### Option 1: Cloudflare Tunnel (Gratuit, Simple)

```bash
# 1. Installer cloudflared (une seule fois)
# Windows: winget install --id Cloudflare.cloudflared
# Ou télécharger: https://github.com/cloudflare/cloudflared/releases

# 2. Lancer le site
npm run dev

# 3. Dans un NOUVEAU terminal, créer le tunnel
cloudflared tunnel --url http://localhost:3000
```

### Option 2: ngrok (Gratuit avec compte)

```bash
# 1. Installer ngrok
npm install -g ngrok
# Ou télécharger: https://ngrok.com/download

# 2. Lancer le site
npm run dev

# 3. Dans un NOUVEAU terminal
ngrok http 3000
```

## ✅ Vérification

1. Le site tourne sur `http://localhost:3000`
2. Le tunnel vous donne un lien public (ex: `https://xxxxx.trycloudflare.com`)
3. Partagez ce lien - il fonctionne depuis n'importe où!

## 🔧 Dépannage

Si le port 3000 est occupé:
```bash
# Utiliser un autre port
npm run dev -- -p 3001
# Puis: cloudflared tunnel --url http://localhost:3001
```

