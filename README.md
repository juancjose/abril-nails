# 💅 Abril Nails — Landing page

Página web de **Abril Nails**, emprendimiento de manicura y nail art en Buenos Aires.
Paleta **monocromática salmón**: salmón `#FA8072`, salmón oscuro `#E9967A`, salmón profundo `#B04A3B` / `#8F3A2E` (botones y acentos, contraste accesible con texto blanco), tintes claros `#FDD5CE` / `#FEEBE7` y fondo crema `#FFF8F3`.

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
- **WhatsApp**: buscá `5491156972933` en `index.html` (aparece en el botón del hero, la tarjeta de contacto y el botón flotante). El formato es `549` + código de área sin 0 + número sin 15. El texto que se ve está en `+54 9 11 5697-2933`.
- **Instagram**: buscá `nails.abryll` en `index.html`.
- **Ubicación, horarios y medios de pago**: en la tarjeta "Dónde estoy" de la sección Contacto (hoy: Beccar, San Isidro · `[DÍAS Y HORARIOS]` · transferencia o efectivo).

### Precios
Cada servicio muestra "Consultá precio". Si querés mostrar precios, cambiá el texto dentro de `<span class="price">…</span>`.

### Fotos de la galería
1. Guardá las fotos en `assets/` (por ejemplo `assets/trabajo1.jpg`), idealmente cuadradas y de menos de 300 KB.
2. En `index.html`, reemplazá cada `<figure class="tile t1 …">` por:
   ```html
   <figure class="tile reveal">
     <img src="assets/trabajo1.jpg" alt="Descripción del diseño" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
     <figcaption>Nombre del diseño</figcaption>
   </figure>
   ```

### Foto de "Sobre mí"
Reemplazá el bloque `<div class="about-photo" …><span>Tu foto acá</span></div>` por
`<img class="about-photo" src="assets/abril.jpg" alt="Abril, manicurista" style="object-fit:cover">`.

### Colores
Están todos al principio de `styles.css`, en `:root` (`--salmon`, `--salmon-dark`, `--coral`, `--coral-dark`, `--coral-deep`, etc.). Si cambiás `--coral-dark`, revisá que el texto blanco de los botones siga siendo legible (contraste mínimo 4.5:1).

## Cómo publicar

**GitHub Pages**: Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`. Queda en `https://<usuario>.github.io/abril-nails/`.

**Vercel**: [vercel.com/new](https://vercel.com/new) → importar este repo → Framework: *Other* → Deploy. No hace falta configurar nada más.

**Probar localmente**: abrí `index.html` en el navegador, o corré `python3 -m http.server` y entrá a `http://localhost:8000`.

## ✅ Pendientes para completar

- [x] Barrio: Beccar, San Isidro
- [x] Medios de pago: transferencia o efectivo
- [ ] `[DÍAS Y HORARIOS]` — días y horario de atención
- [ ] Fotos reales de la galería (6 tiles de muestra con degradés)
- [ ] Foto para "Sobre mí" ("Tu foto acá")
- [ ] Revisar/ajustar el texto de "Sobre mí" y la frase del hero
- [ ] Precios (opcional; hoy dice "Consultá precio")
- [ ] Dominio propio (opcional)
