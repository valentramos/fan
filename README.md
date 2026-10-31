# +FAN — Sitio web

Sitio institucional de **+FAN**, el ecosistema digital de Solunes para clubes, eventos y comunidades: venta de tickets, control de accesos, membresías y fidelización de hinchas.

🌐 **Sitio publicado:** https://valentramos.github.io/fan/

## Páginas

| Ruta            | Contenido                                                        |
| :-------------- | :--------------------------------------------------------------- |
| `/`             | Inicio: propuesta de valor y resumen de productos                |
| `/ticketing`    | Venta de entradas, control de accesos y panel de administración  |
| `/loyalty`      | Programa de fidelización: puntos, contenido exclusivo y trivias  |
| `/maintenance`  | Página de mantenimiento                                          |
| `/404`          | Página no encontrada                                             |

El menú "Más productos" enlaza a otros productos de Solunes (CRM, WhatsApp bot y Real Estate) en `solunes.cl`.

## Stack

- [Astro 5](https://astro.build) con salida estática (`output: "static"`)
- [React 18](https://react.dev) para los componentes interactivos (menús, modales, carruseles, tabs)
- [Tailwind CSS 3](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI) en `src/components/ui`
- [lucide-react](https://lucide.dev) para íconos y [Embla Carousel](https://www.embla-carousel.com) para carruseles
- TypeScript en modo estricto

## Estructura

```text
/
├── .github/workflows/deploy.yml   # Despliegue automático a GitHub Pages
├── public/                        # Imágenes y archivos estáticos (se sirven tal cual)
│   ├── community/                 # Imágenes de la página Loyalty
│   └── ticketing/                 # Capturas de la app y del panel de administración
├── src/
│   ├── components/                # Componentes Astro y React (Header, Navigation, modales…)
│   │   └── ui/                    # Componentes base de shadcn/ui
│   ├── layouts/                   # Layout (principal) y Clean (páginas simples)
│   ├── lib/                       # Utilidades: cn(), withBase(), isSamePath(), usePathname()
│   ├── pages/                     # Cada archivo es una ruta del sitio
│   └── styles/globals.css         # Variables de tema y estilos globales
├── astro.config.mjs               # site + base para GitHub Pages
└── tailwind.config.mjs
```

## Desarrollo local

Requiere Node.js 20 o superior.

| Comando           | Acción                                                           |
| :---------------- | :--------------------------------------------------------------- |
| `npm install`     | Instala las dependencias                                         |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321/fan/`           |
| `npm run build`   | Verifica tipos (`astro check`) y genera el sitio en `./dist/`    |
| `npm run preview` | Sirve localmente el build de `./dist/`                           |

## Rutas y `base` (importante)

El sitio se publica como *project site* de GitHub Pages, es decir, bajo el subdirectorio `/fan/`. Por eso `astro.config.mjs` define:

```js
site: 'https://valentramos.github.io',
base: '/fan',
```

Cualquier enlace interno o recurso de `public/` **debe** pasar por el helper `withBase()` para incluir ese prefijo. Una ruta absoluta escrita a mano (`/logo.png`) apuntaría a `valentramos.github.io/logo.png` y quedaría rota.

```astro
---
import { withBase } from "@/lib/utils";
---
<img src={withBase("/favicon.svg")} alt="+FAN" />
<a href={withBase("/ticketing")}>Ticketing</a>
```

Si en el futuro el sitio vuelve a usar un dominio propio, basta con cambiar `site` y poner `base: '/'`. El helper se adapta solo.

## Despliegue

El workflow `.github/workflows/deploy.yml` construye y publica el sitio en GitHub Pages con [`withastro/action`](https://github.com/withastro/action) en cada push a `main`. También se puede lanzar manualmente desde la pestaña **Actions → Deploy to GitHub Pages → Run workflow**.

Configuración necesaria en el repositorio (**Settings → Pages**):

- **Source:** GitHub Actions
- **Custom domain:** vacío (sin dominio personalizado)

## Pendientes conocidos

- Migrar a Astro 7, Tailwind CSS 4 y React 19. Resuelve las alertas de `npm audit` que solo se corrigen con versiones mayores.
- Reemplazar las imágenes alojadas en sitios externos (`pexels.com`, `totalisimo.com`, `hotelregency.com.co`, `blog.cofike.com`) por copias en `public/`.
- Limpiar imports sin uso y APIs deprecadas que reporta `astro check` (`ViewTransitions` → `ClientRouter`, íconos de marcas de lucide).

## Licencia

Distribuido bajo la licencia Apache 2.0. Ver [`LICENSE`](./LICENSE).
