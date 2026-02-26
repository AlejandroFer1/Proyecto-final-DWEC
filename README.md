# Jujutsu Kaisen Cursed Index

Una aplicación SPA (Single Page Application) desarrollada con **React, TypeScript y Vite** que permite a los usuarios explorar el universo de Jujutsu Kaisen, visualizando personajes y buscando a través de la vasta base de datos proveída por [Jikan API](https://jikan.moe/).

## Características ✨

- **Explorador de Personajes**: Un menú visual rico para ver a todos los hechiceros y maldiciones relevantes.
- **Detalle Profundo**: Haz clic en cualquier personaje para leer su descripción, favoritos y roles en la serie.
- **Búsqueda Avanzada**: Busca caracteres específicos introduciendo su nombre.
- **Diseño Premium UI/UX**: Desarrollado utilizando `Tailwind CSS v4`, con colores a medida y una clara inspiración en la estética lúgubre, púrpura oscura y misteriosa de Jujutsu Kaisen.
- **Rendimiento React Router v7**: Transiciones de ruta eficientes haciendo uso extensivo de Data Loaders (`homeLoader`, `characterDetailLoader`).

## Tecnologías Utilizadas 🛠️

- [Vite](https://vitejs.dev/) - Entorno de desarrollo ultrarrápido.
- [React 19](https://react.dev/) - Biblioteca de UI.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estricto para seguridad de código.
- [React Router v7](https://reactrouter.com/) - Enrutamiento avanzado con Loaders.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework de estilos de utilidad.
- [Axios](https://axios-http.com/) - Cliente de solicitudes HTTP.

## Arquitectura de Diseño (Atomic Design) ⚛️

Se aplicó un enfoque modular basado en **Atomic Design**:

- **Atoms**: Elementos base como botones o `StatusBadges`.
- **Molecules**: Componentes con una función concreta, como el `CharacterCard`.
- **Organisms**: Grupos de datos completos, como la `CharacterGrid`.
- **Pages / Layouts**: Las vistas de enrutamiento como `Home.tsx`, `Search.tsx` y `CharacterDetail.tsx`, servidas bajo el cascarón de `MainLayout.tsx`.

## Configuración Local y Ejecución 🚀

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18+ recomendada).
2. Abre la terminal en esta carpeta (`c:/dawdiurno2/DWEC/Proyecto final`).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre `http://localhost:5173/` en tu navegador.

## Scripts Adicionales

- `npm run build`: Compila la aplicación de TypeScript y la optimiza para producción en la carpeta `dist`.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run preview`: Previsualiza la aplicación lista para producción que fue construida previamente.
