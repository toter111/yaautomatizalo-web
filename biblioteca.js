/* =========================================================
   BIBLIOTECA: la lista de materiales gratis.
   Para sumar uno nuevo: subí el PDF junto a la página y agregá
   un bloque igual a los de abajo. Lo usan index.html y biblioteca.html.
   ========================================================= */
const BIBLIOTECA = [
  {
    archivo: "Ficha_GASTOS_Ya_Automatizalo.pdf",
    icono: "🧾",
    titulo: "GASTOS: tu app de gastos sin pagar",
    texto: "Foto del ticket y Claude te arma la planilla: los pedidos exactos para un ticket, para todo el mes, y cómo revisar los números.",
    detalle: "PDF · 2 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Guia_AGENTE_Ya_Automatizalo.pdf",
    icono: "🤖",
    titulo: "Guía AGENTE: tu primer agente de IA",
    texto: "Chat vs agente, tu primer encargo paso a paso sin romper nada, flujo o agente y cómo funciona un agente de WhatsApp para un negocio.",
    detalle: "PDF · 3 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Ficha_LIMITE_Ya_Automatizalo.pdf",
    icono: "🔋",
    titulo: "LIMITE: 5 trucos para que Claude te rinda más",
    texto: "Los consejos de la ayuda oficial explicados en simple: juntar preguntas, pedir claro, Proyectos, qué gasta más y dónde ver tu uso.",
    detalle: "PDF · 2 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Guia_SISTEMA_Ya_Automatizalo.pdf",
    icono: "🎬",
    titulo: "Guía SISTEMA: Reels animados con Claude",
    texto: "Los 5 pasos y los pedidos exactos que usamos: una línea, cinco ganchos, fuentes reales, animación por código y revisión automática.",
    detalle: "PDF · 2 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Pedidos_JEFE_Ya_Automatizalo.pdf",
    icono: "💼",
    titulo: "Los 3 pedidos JEFE: acta, Excel y cliente enojado",
    texto: "Tres pedidos para copiar y pegar en Claude: el acta de una reunión, el informe de un Excel y la respuesta a un cliente enojado.",
    detalle: "PDF · 2 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Kit_Ya_Automatizalo.pdf",
    icono: "🧰",
    titulo: "Kit para usar IA en tu trabajo",
    texto: "Guía en 7 pasos, la fórmula de los 7 pedidos, pack de prompts para la oficina y las fichas de cada video.",
    detalle: "PDF · 19 páginas",
    tag: "Empezá por acá"
  },
  {
    archivo: "Guia_TRADE_Ya_Automatizalo.pdf",
    icono: "📈",
    titulo: "Guía TRADE: 11 skills de trading gratis para Claude",
    texto: "Cómo instalarlas en 10 minutos, bonus: la máquina del tiempo (10.000 simulaciones), y una rutina de 15 minutos. No es consejo financiero.",
    detalle: "PDF · 4 páginas",
    tag: "Nuevo"
  },
  {
    archivo: "Guia_7_pedidos_Ya_Automatizalo.pdf",
    icono: "✍️",
    titulo: "7 pedidos para usar IA en tu trabajo",
    texto: "La fórmula para que Claude te responda bien a la primera, con 7 pedidos listos para copiar.",
    detalle: "PDF · 5 páginas"
  }
];

function pintarBiblioteca(contenedor, conLinks) {
  contenedor.innerHTML = "";
  for (const m of BIBLIOTECA) {
    const el = document.createElement(conLinks ? "a" : "div");
    el.className = "item";
    if (conLinks) { el.href = m.archivo; el.target = "_blank"; el.rel = "noopener"; }
    el.innerHTML =
      '<span class="ic"></span><div class="tx"><b></b><span class="desc"></span><span class="meta"></span></div>' +
      (conLinks ? '<span class="go">Abrir</span>' : "");
    el.querySelector(".ic").textContent = m.icono;
    el.querySelector("b").textContent = m.titulo;
    el.querySelector(".desc").textContent = m.texto;
    el.querySelector(".meta").textContent = m.detalle + (m.tag ? " · " + m.tag : "");
    contenedor.appendChild(el);
  }
}
