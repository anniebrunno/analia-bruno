# Analia Bruno — sitio web

Sitio de la artista visual Analia Bruno: statement, catálogo de obras, obras en espacios, servicios y contacto.

## Archivos

- `index.html` — la página.
- `estilos.css` — diseño (colores, tipografías, tamaños).
- `obras.js` — **lista de obras y fotos del carrusel**. Para agregar o cambiar una obra, editá este archivo.
- `sitio.js` — interacciones (catálogo, ficha ampliada, carrusel, textos animados, formulario).
- `img/` — fotos.

## Publicar con GitHub Pages

1. En el repositorio, entrá a **Settings → Pages**.
2. En *Build and deployment*, elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guardá.
3. En uno o dos minutos la web queda publicada en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Agregar una obra

1. Subí la foto a la carpeta `img/` (por ejemplo `img/nueva-obra.jpg`).
2. En `obras.js`, agregá una línea a la lista `OBRAS`:

```js
{ titulo: 'Nombre de la obra', medida: '100 × 100 cm', foto: 'nueva-obra.jpg' },
```

Podés sumar `serie: 'Nombre de la serie'` si no es de «Entre lo visible y lo invisible».
