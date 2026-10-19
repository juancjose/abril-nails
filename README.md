# 💅 Abril Nails — Landing page

Página web de **Abril Nails**, emprendimiento de manicura y nail art en Buenos Aires.
Diseño minimalista y editorial: fondo crema, texto oscuro y **un solo acento salmón**.

- **Tipografía** (la misma del sitio Blunt): **Archivo** expandida (`font-stretch: 125%`, peso 450–600) para títulos y logo, e **Inter** (300/400/500) para textos, botones y etiquetas en mayúsculas espaciadas. Se cargan desde Google Fonts con `@import` al principio de `styles.css`.
- **Colores**: crema `#FBF7F4`, crema rosado `#F6EDE8` (secciones alternas), texto `#1F1A19`, texto secundario `#6E625F`, líneas `#E6D9D3`, acento salmón profundo `#B04A3B` (hover `#943C2F`) y tintes salmón `#F4D9D1` / `#EFCBC0` / `#F8E4DE` para los espacios de fotos. Todos los textos cumplen contraste WCAG AA.

Sitio 100 % estático (HTML + CSS + JS, sin build): se puede subir directo a GitHub Pages, Vercel o Netlify.

## Estructura

```
index.html    → contenido de la página (textos, links, secciones)
styles.css    → colores, tipografías y diseño
script.js     → menú móvil, animaciones y año del footer
assets/       → imágenes (logo/favicon y, más adelante, fotos)
```

## Cómo editar

### Contacto
- **WhatsApp**: buscá `5491156972933` en `index.html` (aparece en los botones del inicio y de contacto, la lista de datos, el footer y el botón flotante). El formato es `549` + código de área sin 0 + número sin 15. El texto que se ve está en `+54 9 11 5697-2933`.
- **Instagram**: buscá `nails.abryll` en `index.html`.
- **Ubicación, horarios y medios de pago**: en la lista `<dl class="details">` de la sección Contacto (hoy: Beccar, San Isidro · `[DÍAS Y HORARIOS]` · transferencia o efectivo).

### Precios
Cada servicio muestra "Consultá precio". Para mostrar precios, cambiá el texto dentro de `<span class="price">…</span>`.

### Fotos
Los espacios de fotos son bloques color salmón claro (`<div class="ph …">`). Guardá las fotos en `assets/` (formato vertical 4:5, menos de 300 KB) y reemplazá cada bloque:

- **Galería** (6 bloques en `#galeria`): `<img src="assets/trabajo1.jpg" alt="Descripción del diseño" loading="lazy">`
- **Portada** (`.ph-hero`): `<img class="ph-hero" src="assets/portada.jpg" alt="…" style="width:100%;object-fit:cover">`
- **Sobre mí** (`.ph-about`): `<img class="ph-about" src="assets/abril.jpg" alt="Abril, manicurista" style="width:100%;object-fit:cover">`

### Colores
Están todos al principio de `styles.css`, en `:root` (`--bg`, `--fg`, `--accent`, `--ph-1`, etc.). Si cambiás `--accent`, revisá que el texto blanco de los botones siga siendo legible (contraste mínimo 4.5:1).

## Cómo publicar

**GitHub Pages**: Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`. Queda en `https://<usuario>.github.io/abril-nails/`.

**Vercel**: [vercel.com/new](https://vercel.com/new) → importar este repo → Framework: *Other* → Deploy. No hace falta configurar nada más.

**Probar localmente**: abrí `index.html` en el navegador, o corré `python3 -m http.server` y entrá a `http://localhost:8000`.

## ✅ Pendientes para completar

- [x] Barrio: Beccar, San Isidro
- [x] Medios de pago: transferencia o efectivo
- [ ] `[DÍAS Y HORARIOS]` — días y horario de atención
- [ ] Fotos reales de la galería (6 bloques de muestra)
- [ ] Foto de portada (bloque grande del inicio)
- [ ] Foto para "Sobre mí"
- [ ] Revisar/ajustar el texto de "Sobre mí" y la frase del hero
- [ ] Precios (opcional; hoy dice "Consultá precio")
- [ ] Dominio propio (opcional)
