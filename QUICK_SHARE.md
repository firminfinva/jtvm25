# 🚀 Partager votre Site Localement - Guide Rapide

## Méthode la Plus Simple : Cloudflare Tunnel

### Étape 1: Installer Cloudflare Tunnel (une seule fois)

**Windows:**
```powershell
winget install --id Cloudflare.cloudflared
```

**Ou télécharger manuellement:**
- Allez sur: https://github.com/cloudflare/cloudflared/releases
- Téléchargez `cloudflared-windows-amd64.exe`
- Renommez-le en `cloudflared.exe` et placez-le dans un dossier dans votre PATH

### Étape 2: Lancer votre site

```bash
npm run dev
```

Attendez que vous voyiez: `Ready - started server on 0.0.0.0:3000`

### Étape 3: Créer le tunnel (dans un NOUVEAU terminal)

Ouvrez un **nouveau terminal** (gardez le premier ouvert) et exécutez:

```bash
cloudflared tunnel --url http://localhost:3000
```

Vous verrez quelque chose comme:
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://xxxxx-xxxxx-xxxxx.trycloudflare.com                                               |
+--------------------------------------------------------------------------------------------+
```

**C'est votre lien partageable!** Copiez-le et partagez-le avec qui vous voulez.

## Alternative : ngrok (si Cloudflare ne fonctionne pas)

### Installer ngrok:
```bash
npm install -g ngrok
```

### Utiliser:
```bash
# Terminal 1
npm run dev

# Terminal 2 (nouveau)
ngrok http 3000
```

Vous obtiendrez un lien comme: `https://xxxxx.ngrok.io`

## ⚡ Commandes Rapides

```bash
# 1. Lancer le site
npm run dev

# 2. Dans un nouveau terminal, créer le tunnel
cloudflared tunnel --url http://localhost:3000
```

**C'est tout!** Partagez le lien que vous obtenez.

