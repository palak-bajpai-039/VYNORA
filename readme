## Requirements

- Node.js 18 or newer (Node 24 recommended)
- npm (included with Node.js)
- Internet connection for thumbnails and sample videos

Check your versions:

```bat
node -v
npm -v
```


# Install dependencies (first time only)

```bat
npm install
```

## Start the development server

```bat
npm run dev
```

- The app opens automatically at **http://localhost:5173**
- If the browser does not open, visit that URL manually
- Stop the server with `Ctrl + C`

```

Then open the URL shown in the terminal (usually http://localhost:4173).

## Quick start (all in one)

```bat
cd /d D:\you_tupe
npm install
npm run dev
```

## Troubleshooting

**`npm` is not recognized**

Install Node.js from https://nodejs.org and reopen the terminal.

**Port 5173 is already in use**

Stop the other process, or start on another port:

```bat
npm run dev -- --port 3000
```

**Blank page or missing images/videos**

- Make sure the dev server is still running in the terminal
- Check the browser console for errors
- Confirm you have an internet connection (media is loaded from public URLs)

**Styles look wrong after pulling changes**

Stop the server, delete the `node_modules` folder, then run:

```bat
npm install
npm run dev
```

## commands reference

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Serve the production build locally |
