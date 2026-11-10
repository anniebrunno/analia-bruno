(function () {
  var sinMov = false;
  try { sinMov = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }

  // ---------- Catálogo ----------
  var obras = OBRAS.map(function (o, k) {
    var nn = String(k + 1).padStart(2, '0');
    var tecnica = o.tecnica || 'Técnica mixta';
    var serie = o.serie || 'Entre lo visible y lo invisible';
    return {
      i: k,
      numero: 'N.º ' + nn,
      titulo: o.titulo,
      src: 'img/' + o.foto,
      alt: o.titulo + ', obra de Analia Bruno, ' + o.medida,
      ficha: (o.serie ? 'Serie ' + o.serie + ' · ' : '') + tecnica + ' · ' + o.medida,
      linea: tecnica + ' · ' + o.medida,
      grupo: 'Serie «' + serie + '»',
      whatsapp: 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Hola Analia, quiero consultar el precio de la obra «' + o.titulo + '» (N.º ' + nn + ').'),
      mailto: 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Consulta por la obra ' + o.titulo)
    };
  });

  var grilla = $('catalogo');
  obras.forEach(function (o) {
    var item = el('div', 'obra');
    item.dataset.titulo = o.titulo.toLowerCase();
    var btn = el('button', 'carta');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Conocer la obra ' + o.titulo);
    var marco = el('span', 'marco');
    var img = el('img');
    img.src = o.src; img.alt = o.alt; img.loading = 'lazy';
    marco.appendChild(img);
    var tit = el('span', 'carta-titulo');
    tit.appendChild(el('span', '', o.titulo));
    tit.appendChild(el('span', 'carta-num', o.numero));
    btn.appendChild(marco); btn.appendChild(tit); btn.appendChild(el('span', 'carta-ficha', o.ficha));
    btn.addEventListener('click', function () { abrir(o.i); });
    var precio = el('a', 'btn-precio', 'Consultar precio');
    precio.href = o.whatsapp; precio.target = '_blank'; precio.rel = 'noopener';
    precio.setAttribute('aria-label', 'Consultar precio de ' + o.titulo + ' por WhatsApp');
    item.appendChild(btn); item.appendChild(precio);
    grilla.appendChild(item);
  });

  // Buscador
  $('buscar').addEventListener('input', function (e) {
    var q = e.target.value.trim().toLowerCase();
    var visibles = 0;
    Array.prototype.forEach.call(grilla.children, function (n) {
      var ok = !q || n.dataset.titulo.indexOf(q) !== -1;
      n.hidden = !ok; if (ok) visibles++;
    });
    $('sin-resultados').hidden = visibles > 0;
    if (q) $('serie').scrollIntoView({ behavior: sinMov ? 'auto' : 'smooth' });
  });

  // ---------- Ficha ampliada ----------
  var actual = -1, ultimoFoco = null;
  function pintar() {
    var o = obras[actual];
    $('modal-img').src = o.src; $('modal-img').alt = o.alt;
    $('modal-num').textContent = o.grupo + ' · ' + (actual + 1) + ' de ' + obras.length;
    $('modal-titulo').textContent = o.titulo;
    $('modal-linea').textContent = o.linea;
    $('modal-whatsapp').href = o.whatsapp;
    $('modal-mail').href = o.mailto;
  }
  function abrir(i) { ultimoFoco = document.activeElement; actual = i; pintar(); $('modal').hidden = false; document.body.style.overflow = 'hidden'; $('cerrar').focus(); }
  function cerrar() { $('modal').hidden = true; document.body.style.overflow = ''; actual = -1; if (ultimoFoco) ultimoFoco.focus(); }
  $('cerrar').addEventListener('click', cerrar);
  $('obra-prev').addEventListener('click', function () { actual = (actual - 1 + obras.length) % obras.length; pintar(); });
  $('obra-next').addEventListener('click', function () { actual = (actual + 1) % obras.length; pintar(); });
  $('modal').addEventListener('click', function (e) { if (e.target === this) cerrar(); });
  document.addEventListener('keydown', function (e) {
    if ($('modal').hidden) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowLeft') $('obra-prev').click();
    if (e.key === 'ArrowRight') $('obra-next').click();
  });

  // ---------- Carrusel "Obras en espacios" ----------
  var caja = $('espacio-foto'), puntos = $('puntos'), diapo = 0, reloj = null;
  var slides = ESPACIOS.map(function (d, k) {
    var s = el('div', 'diapo' + (k === 0 ? ' activa' : ''));
    var im = el('img'); im.src = 'img/' + d.foto; im.alt = d.alt; im.style.objectPosition = d.pos;
    if (k > 1) im.loading = 'lazy';
    s.appendChild(im); caja.insertBefore(s, $('diapo-prev'));
    var b = el('button', k === 0 ? 'activo' : ''); b.type = 'button';
    b.setAttribute('aria-label', 'Ver foto ' + (k + 1)); b.appendChild(el('span'));
    b.addEventListener('click', function () { ir(k); reiniciar(); });
    puntos.appendChild(b);
    return { s: s, b: b };
  });
  function ir(k) {
    diapo = (k + slides.length) % slides.length;
    slides.forEach(function (x, j) { x.s.classList.toggle('activa', j === diapo); x.s.setAttribute('aria-hidden', j === diapo ? 'false' : 'true'); x.b.classList.toggle('activo', j === diapo); });
  }
  function reiniciar() { if (sinMov) return; clearInterval(reloj); reloj = setInterval(function () { if (actual < 0) ir(diapo + 1); }, 5000); }
  $('diapo-prev').addEventListener('click', function () { ir(diapo - 1); reiniciar(); });
  $('diapo-next').addEventListener('click', function () { ir(diapo + 1); reiniciar(); });
  ir(0); reiniciar();

  // ---------- Texto de la artista que se escribe al bajar ----------
  var partes = [
    'Pinto lo que aparece en la superficie y también lo que queda latente. Trabajo con ',
    'capas de color, texturas y huellas del gesto',
    ', y dejo que la sensibilidad de quien mira complete lo que la pintura sugiere pero no termina de nombrar.'
  ];
  var total = partes.join('').length, nPrev = -1;
  function escribir(n) {
    if (n === nPrev) return; nPrev = n;
    var a = partes[0].length, b = partes[1].length;
    var n1 = Math.min(n, a), n2 = Math.max(0, Math.min(n - a, b)), n3 = Math.max(0, n - a - b);
    $('e1').textContent = partes[0].slice(0, n1); $('p1').textContent = partes[0].slice(n1);
    $('e2').textContent = partes[1].slice(0, n2); $('p2').textContent = partes[1].slice(n2);
    $('e3').textContent = partes[2].slice(0, n3); $('p3').textContent = partes[2].slice(n3);
  }

  // ---------- Título que se revela al bajar ----------
  var tv = $('titulo-velo');
  tv.addEventListener('click', function () { tv.classList.toggle('revelado'); });

  function medir() {
    var vh = window.innerHeight || 800;
    var rt = tv.getBoundingClientRect();
    var rev = sinMov ? 1 : Math.max(0, Math.min(1, (vh - rt.top) / (vh * 0.55)));
    tv.style.setProperty('--rev', rev.toFixed(3));
    if (rev > 0.98) tv.style.setProperty('--o', '0');

    if (sinMov) { escribir(total); return; }
    var r = $('texto-artista').getBoundingClientRect();
    var p = (vh * 0.95 - r.top) / (vh * 0.45 + r.height * 0.6);
    escribir(Math.round(Math.max(0, Math.min(1, p)) * total));
  }
  var pendiente = false;
  function alDesplazar() { if (pendiente) return; pendiente = true; requestAnimationFrame(function () { pendiente = false; medir(); }); }
  window.addEventListener('scroll', alDesplazar, { passive: true });
  window.addEventListener('resize', alDesplazar);
  medir();

  document.addEventListener('mousemove', function (e) {
    var r = tv.getBoundingClientRect();
    var dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
    var dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
    var rad = 150 - Math.sqrt(dx * dx + dy * dy) * 0.55; if (rad <= 0) rad = -80;
    tv.style.setProperty('--x', (e.clientX - r.left - 8) + 'px');
    tv.style.setProperty('--y', (e.clientY - r.top - 24) + 'px');
    tv.style.setProperty('--r', rad.toFixed(0) + 'px');
    tv.style.setProperty('--o', rad > 0 ? '1' : '0');
  }, { passive: true });

  // ---------- Formulario ----------
  function armarMail() {
    var nombre = $('form-nombre').value.trim(), email = $('form-email').value.trim(), msj = $('form-mensaje').value.trim();
    $('enviar').href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Consulta desde la web' + (nombre ? ' · ' + nombre : '')) +
      '&body=' + encodeURIComponent(msj + '\n\n' + nombre + (email ? '\n' + email : ''));
  }
  ['form-nombre', 'form-email', 'form-mensaje'].forEach(function (id) { $(id).addEventListener('input', function () { armarMail(); $('aviso').textContent = ''; }); });
  armarMail();
  $('enviar').addEventListener('click', function () { $('aviso').textContent = 'Se abrió tu programa de correo con el mensaje listo. Si no se abrió, escribime directamente a ' + EMAIL + '.'; });
  $('formulario').addEventListener('submit', function (e) { e.preventDefault(); });
})();
