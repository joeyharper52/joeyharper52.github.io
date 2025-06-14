const svg = document.getElementById('spiral-table');
const tooltip = document.getElementById('tooltip');
const buttons = document.querySelectorAll('[data-zone]');

const centerX = 400;
const centerY = 400;
const spacing = 18;
const angleStep = 0.38;

const elements = [
  { symbol: "H", name: "Hydrogen", zone: "Core", color: "#00ffff", desc: "Core — Pressure zone field role" },
  { symbol: "He", name: "Helium", zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 — Pressure zone field role" },
  { symbol: "Li", name: "Lithium", zone: "Zone 1", color: "#00ffaa", desc: "Zone 1 — Pressure zone field role" },
  { symbol: "Na", name: "Sodium", zone: "Zone 2", color: "#aaff00", desc: "Zone 2 — Pressure zone field role" },
  { symbol: "Fe", name: "Iron", zone: "Zone 3", color: "#ffaa00", desc: "Zone 3 — Pressure zone field role" },
  { symbol: "La", name: "Lanthanum", zone: "Zone 4", color: "#ff70aa", desc: "Zone 4 — Lanthanide zone" },
  { symbol: "U", name: "Uranium", zone: "Zone 5", color: "#ff0070", desc: "Zone 5 — Field instability zone" },
  { symbol: "Og", name: "Oganesson", zone: "Zone 6", color: "#8800ff", desc: "Zone 6 — Critical field cascade" }
];

let drawnNodes = [];

elements.forEach((el, i) => {
  const angle = i * angleStep;
  const radius = spacing + i * 6;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  node.setAttribute("cx", x);
  node.setAttribute("cy", y);
  node.setAttribute("r", 18);
  node.setAttribute("fill", el.color);
  node.setAttribute("data-zone", el.zone);
  node.style.cursor = "pointer";

  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", x);
  label.setAttribute("y", y + 5);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("fill", "#ffffff");
  label.setAttribute("font-size", "12");
  label.textContent = el.symbol;
  label.setAttribute("pointer-events", "none");

  node.addEventListener("mouseenter", (e) => {
    tooltip.innerHTML = `<strong>${el.name}</strong><br>${el.desc}`;
    tooltip.classList.remove("hidden");
  });
  node.addEventListener("mousemove", (e) => {
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.style.left = e.pageX + 15 + "px";
  });
  node.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  svg.appendChild(node);
  svg.appendChild(label);
  drawnNodes.push({ node, label, zone: el.zone });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetZone = btn.getAttribute("data-zone");
    drawnNodes.forEach(({ node, label, zone }) => {
      const visible = targetZone === "All" || zone === targetZone;
      node.setAttribute("visibility", visible ? "visible" : "hidden");
      label.setAttribute("visibility", visible ? "visible" : "hidden");
    });
  });
});
