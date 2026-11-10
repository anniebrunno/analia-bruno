// CATÁLOGO DE OBRAS
// Para agregar, quitar o cambiar una obra, editá esta lista.
// Cada obra: titulo, medida, foto (archivo en la carpeta img), serie (opcional), tecnica (opcional).
// El número N.º se asigna solo según el orden de la lista.
var OBRAS = [
  { titulo: 'Visible 07', medida: '90 × 130 cm', foto: 'fd685f49e3ecd264a15efde3a1b6d9f1.jpg' },
  { titulo: 'Visible 08', medida: '90 × 130 cm', foto: '6149e411b5f13ed234366e5e53f59b0d.jpg' },
  { titulo: 'Rastro de Luz', medida: '100 × 100 cm', foto: 'fb65c0d6ab8ad9589da3456c502718be.jpg' },
  { titulo: 'Visible 09', medida: '140 × 140 cm', foto: 'b159ba7a52d89d7c19e53134044b0d7b.jpg' },
  { titulo: 'Visible 10', medida: '140 × 140 cm', foto: '98ad70edfb0752e869c5533136171263.jpg' },
  { titulo: 'Territorio interior', medida: '100 × 100 cm', foto: '630a100fab1c4dff28e044ab773cf32e.jpg', serie: 'Ecos de la tierra' },
  { titulo: 'Geometría del vacío', medida: '100 × 90 cm', foto: 'a145911e517599fa32263ed0561c5571.jpg', serie: 'Black and White' },
  { titulo: 'El borde del silencio', medida: '100 × 70 cm', foto: '7b8adf87d90c9a8ebff5353d051d390b.jpg' },
  { titulo: 'Cartografía de lo invisible', medida: '120 × 90 cm', foto: 'bd2e9189628082e0f6124fcc1e1a254c.jpg' },
  { titulo: 'Visible 04', medida: '130 × 110 cm', foto: '79d8a3b6b96122b2bdf6e2b529943bba.jpg' },
  { titulo: 'Visible 02', medida: '100 × 100 cm', foto: 'aa8846ae672890a56479d26a6a9e3644.jpg' },
  { titulo: 'Visible 03', medida: '100 × 130 cm', foto: '193db9a5b90e1f0b57c205e8bf20da13.jpg' },
  { titulo: 'Fragmentos en suspensión', medida: '70 × 80 cm', foto: '2f2daaa57e04df0a22faa7eb6c6dc760.jpg' },
  { titulo: 'Entre lo que fue y aún brilla', medida: '80 × 150 cm', foto: '94413f23ace3ac107a92ba35910d7859.jpg' },
  { titulo: 'Visible 06', medida: '120 × 140 cm', foto: 'bb0da64c391cf9df4d708e9f37885338.jpg' },
  { titulo: 'Visible 05', medida: '130 × 110 cm', foto: '4a30de828e382e82efff768b20eca27f.jpg' },
  { titulo: 'Visible 01', medida: '100 × 120 cm', foto: '7e568d6353a6555c60ca9f59426a5f7c.jpg' },
  { titulo: 'Lo que habita', medida: '200 × 150 cm', foto: '96776fe304e03854525430f8b84b6c7a.jpg' },
  { titulo: 'La huella que persiste', medida: '136 × 200 cm', foto: '2cbdc10f495d2efb886924b576d1d7ec.jpg', serie: 'Lo que atraviesa' },
  { titulo: 'Círculos de color', medida: '100 × 140 cm', foto: '48c8067d9afdedac2ae08e2fd1b4e1c3.jpg' },
  { titulo: 'La memoria de la luz', medida: '100 × 130 cm', foto: 'c2d7a896ef2670871928d07439828806.jpg' },
  { titulo: 'La persistencia de lo invisible', medida: '180 × 80 cm', foto: '2c2bef66920b9ad25cb4a502b4080b90.jpg' },
  { titulo: 'Umbral', medida: '90 × 60 cm', foto: '4fffc7c0550f9d9f14b05e642588967e.jpg' },
  { titulo: 'Intangible', medida: '110 × 160 cm', foto: 'f1f8e4e20f0133af6ceb656d1f86bfea.jpg' },
  { titulo: 'Inquebrantable', medida: '30 × 30 cm', foto: '752891d96a64443e3ea7fd0c539b11ab.jpg', tecnica: 'Técnica mixta · Díptico' },
  { titulo: 'Circunvalación', medida: '200 × 150 cm', foto: '47a96e7ce9af2aeaae7a2055da42c9e1.jpg' },
  { titulo: 'Animalia', medida: '100 × 180 cm', foto: 'c38879e53fb69ef303a5eb6d6f067758.jpg' },
  { titulo: 'Horizonte suspendido', medida: '136 × 149 cm', foto: '844bd2a29e05aefa1ace9336a41a027f.jpg', serie: 'Lo que atraviesa' },
  { titulo: 'Apenas una huella', medida: '130 × 90 cm', foto: 'fb868168740ac895811004c2b53182af.jpg', serie: 'Lo que atraviesa' },
  { titulo: 'Sedimentos dorados', medida: '40 × 40 cm', foto: 'b1e409f693ad664405d584014cc5ba68.jpg' },
  { titulo: 'Bajo la línea', medida: '90 × 90 cm', foto: '9e8ec05455c1b62d66e2af6e9bcf91ef.jpg' }
];

// FOTOS DEL CARRUSEL "OBRAS EN ESPACIOS"
var ESPACIOS = [
  { foto: '12cd6207762ccb9c94fde10211d817e9.jpg', alt: 'Díptico de Analia Bruno en un rincón de lectura con sillón de lino y luz cálida', pos: '50% 50%' },
  { foto: '212bc0bfb2cce72d54ac5f81c1756363.jpg', alt: 'Obra Visible 01 de Analia Bruno colgada junto a un sillón y cortinas de lino', pos: '30% 40%' },
  { foto: 'a6e147cf1ebef5c87cff89ec076ed260.jpg', alt: 'Ambiente con obras de Analia Bruno, sillón, lámparas y vitrina de madera', pos: '50% 50%' },
  { foto: '3b9776f9155632145e9d35513af90bc3.jpg', alt: 'Obra en grises y blancos de Analia Bruno sobre un mueble de madera con una escultura', pos: '50% 35%' },
  { foto: 'adf7a99e678e4d2999fe201af88b7aae.jpg', alt: 'Obra en grises y blancos de Analia Bruno sobre una consola de madera, junto a una ventana', pos: '50% 40%' },
  { foto: '879ee7ac00e7f54c877ed301ed22db16.jpg', alt: 'Obra en tonos ocre y dorado de Analia Bruno iluminada por una lámpara de pie', pos: '50% 40%' },
  { foto: '90982bc6e874dea610e0092b05e167c6.jpg', alt: 'Obra en grises de Analia Bruno sobre una consola de madera con canasto y escultura', pos: '50% 40%' },
  { foto: '553e338685e04efbc9d6c11981f0bae0.jpg', alt: 'Obra en óxido y negro de Analia Bruno sobre un sillón blanco y una mesa de madera', pos: '50% 45%' }
];

var WHATSAPP = '5491121676246';
var EMAIL = 'anniebrunno@gmail.com';
