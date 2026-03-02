# Proyecto Api Jujutsu Kaisen

# Alejandro Fernández Martín, Izan Heras Carrasco y Enrique Manrique Ruiz

## Objetivos

El objetivo principal de este proyecto es desarrollar una _Single Page Application_ (SPA) interactiva, robusta y con un diseño visual atractivo ("premium") basada en el mundo de Jujutsu Kaisen. La aplicación permite a los usuarios explorar personajes, buscar hechiceros y maldiciones específicas, y visualizar detalles en profundidad sobre cada elemento, consumiendo datos en tiempo real de una API externa.

## Características

- **Explorador de Personajes**: Interfaz en cuadrícula que carga dinámicamente personajes de la serie.
- **Detalle Dinámico de Personaje**: Vista detallada con rutas dinámicas que muestran estadísticas, rol, kanji e información expandida.
- **Búsqueda Integrada**: Buscador que consulta la API para encontrar personajes concretos por coincidencia de nombre.
- **Filtrado Avanzado**: (En desarrollo) Filtrado de personajes mostrados por atributos específicos.
- **Diseño Premium UI/UX**: Interfaces estilizadas usando TailwindCSS v4, paletas de color con temática oscura/maldita (tonos púrpura, negros, dorados) y micro-interacciones.

## Prototipo UI

La estructura visual de la interfaz se compone de:

- **MainLayout**: Una cabecera (Header) fija superior con el logo estilizado y navegación principal (Inicio, Buscar) y un Pie de página (Footer) con los créditos.
- **Inicio (Home)**: Un Hero section grande («Descubre Hechiceros y Maldiciones») seguido de un `CharacterGrid` (cuadrícula responsiva de tarjetas) que muestra los personajes más populares.
- **Buscador (Search)**: Un gran campo de texto (Input) que, al enviar, carga los resultados en otra instancia del `CharacterGrid`.
- **Detalle (CharacterDetail)**: Un layout dividido; a la izquierda un retrato en alta calidad enmarcado, y a la derecha los datos esenciales (nombre, apodos, kanji y descripción larga).

## Tecnologías Utilizadas

- **React 19** - Biblioteca de UI y manejo del estado.
- **React Router v7** - Enrutamiento para la _Single Page Application_ manejando URLs limpias y abstracción de Data Loaders.
- **TypeScript** - Tipado estático fuerte, garantizando contratos de datos (Interfaces) exactos con la API.
- **Vite** - Bundler y servidor de desarrollo ágil.
- **Tailwind CSS v4** - Para todo el trabajo de utilidades CSS, variables `@theme`, y responsividad.
- **Axios** - Para el consumo HTTP basado en Promesas.

## Instrucciones de Instalación

1. Clona el repositorio desde GitHub.
2. Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18+ recomendada).
3. Abre una terminal en la raíz del proyecto.
4. Instala todas las dependencias del `package.json`:
   ```bash
   npm install
   ```
5. Inicia el servidor de desarrollo de Vite:
   ```bash
   npm run dev
   ```
6. Ingresa a `http://localhost:5173/` en tu navegador.

## Guía de Uso

- Al abrir la aplicación, accederás al **Inicio**. Aquí se precargan los personajes principales de la obra automáticamente. Puedes hacer clic en cualquiera de las tarjetas (Cards) para ir a sus detalles.
- Usa el enlace superior de **Buscar** para ir a la pantalla de búsqueda. Introduce un nombre (ej. "Gojo" o "Sukuna") y presiona "Buscar".
- Dentro de cualquier detalle de personaje, pulsa el botón **Volver** para regresar rápidamente a la cuadrícula anterior de donde venías.

## Documentación de la API

Este proyecto consume los endpoints de [Jikan API v4](https://jikan.moe/), una REST API gratuita enfocada en datos de MyAnimeList.

- **Personajes base**: `GET https://api.jikan.moe/v4/anime/40748/characters` (Obtiene hechiceros y maldiciones pertenecientes al anime de JJK, ID 40748).
- **Búsqueda Global**: `GET https://api.jikan.moe/v4/characters?q={query}&order_by=favorites&sort=desc` (Busca personajes cruzando la base de datos completa).
- **Detalle de Personaje**: `GET https://api.jikan.moe/v4/characters/{id}/full` (Retorna información biográfica completa de un ID de personaje concreto).

## Notas de Implementación

Para cumplir con los estándares de **calidad de código y escalabilidad**, el proyecto usa **Atomic Design**:

- **Atoms**: Elementos base como botones o insignias.
- **Molecules**: `CharacterCard` (imagen, textos superpuestos, enlace) encapsula información unitaria.
- **Organisms**: `CharacterGrid` orquesta el mapeo de los resultados y el renderizado vacío condicional.
- **Rutas y Loaders**: Se aprovecharon los _data loaders_ nativos de React Router (`homeLoader` y `characterDetailLoader`). Las peticiones se resuelven **antes** de renderizar el componente de UI, previniendo cascadas de carga y estados de `useEffect` innecesarios en la jerarquía.

## Aplicación Desplegada

Actualmente la aplicación se ejecuta en **entorno de desarrollo local**.
Para llevar este proyecto a producción en plataformas como GitHub Pages, Netlify o Vercel:

```bash
npm run build
```

Y despliega la subcarpeta de distribución generada: `./dist`.
_(Nota: Sustituir tras hacer el despliegue con el enlace final)._
