![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Proyecto para crear TODO's con React 18 🔗 ↗️ [https://macknilan.github.io/todo-app-react/](https://macknilan.github.io/todo-app-react/) 💪

Para poder publicar en Github Pages se ocupa la librería [gh-pages](https://github.com/tschaub/gh-pages)

```bash
npm i -D gh-pages
```

En el archivo `package.json` en `scripts` agregar al final las siguientes lineas

```bash
...
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}
```

En el archivo `vite.config.js` añadir la siguiente linea antes de `plugins: [react()],`

```bash
base: '/your-repository-name',
```

Después ejecutar

```bash
npm run deploy
```

[ 😁 ](https://github.com/macknilan/todo-app-react/assets/4066042/1ed83c82-6a43-4b4d-850f-3dd4a97b24f0)
