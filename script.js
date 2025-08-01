// script.js completo para malla interactiva Enfermería

const malla = [
  { codigo: "ANATO", nombre: "Anatomía Humana", creditos: 4, semestre: 1, ano: 1, prerrequisitos: [] },
  { codigo: "BIOQUIM", nombre: "Bioquímica", creditos: 5, semestre: 1, ano: 1, prerrequisitos: [] },
  { codigo: "FISIO", nombre: "Fisiología", creditos: 5, semestre: 2, ano: 1, prerrequisitos: ["BIOQUIM"] },
  { codigo: "ENF101", nombre: "Fundamentos de Enfermería", creditos: 6, semestre: 2, ano: 1, prerrequisitos: ["ANATO"] },
  { codigo: "ENF201", nombre: "Cuidados Básicos", creditos: 6, semestre: 1, ano: 2, prerrequisitos: ["ENF101"] },
  { codigo: "ENF202", nombre: "Farmacología", creditos: 4, semestre: 1, ano: 2, prerrequisitos: ["FISIO"] },
  { codigo: "ENF301", nombre: "Salud del Adulto", creditos: 8, semestre: 2, ano: 2, prerrequisitos: ["ENF201"] },
  { codigo: "ENF401", nombre: "Salud Mental", creditos: 5, semestre: 1, ano: 3, prerrequisitos: ["ENF301"] },
  { codigo: "ENF402", nombre: "Salud Materna", creditos: 6, semestre: 1, ano: 3, prerrequisitos: ["ENF301"] },
  { codigo: "ENF403", nombre: "Salud Infantil", creditos: 6, semestre: 2, ano: 3, prerrequisitos: ["ENF402"] },
  { codigo: "ENF501", nombre: "Internado Clínica Adulto", creditos: 10, semestre: 1, ano: 4, prerrequisitos: ["ENF301"] },
  { codigo: "ENF502", nombre: "Internado Comunitario", creditos: 8, semestre: 1, ano: 4, prerrequisitos: ["ENF403"] }
];

const contenedor = document.getElementById("contenedor-malla");
const progresoBarra = document.getElementById("barra-progreso");
const progresoTexto = document.getElementById("porcentaje-progreso");
const creditosTexto = document.getElementById("creditos-aprobados");
const graficoCanvas = document.getElementById("grafico-torta");

let ramosAprobados = [];

function agruparPorSemestre(data) {
  const agrupados = {};
  data.forEach(r => {
    const clave = `Año ${r.ano} - Semestre ${r.semestre}`;
    if (!agrupados[clave]) agrupados[clave] = [];
    agrupados[clave].push(r);
  });
  return agrupados;
}

function crearMalla() {
  contenedor.innerHTML = "";
  const agrupados = agruparPorSemestre(malla);
  Object.keys(agrupados).forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = sem;
    div.appendChild(h2);

    agrupados[sem].forEach(ramo => {
      const boton = document.createElement("div");
      boton.className = "ramo";
      boton.dataset.codigo = ramo.codigo;
      boton.textContent = `${ramo.codigo} (${ramo.creditos} cr)`;
      boton.addEventListener("click", () => toggleRamo(ramo, boton));
      div.appendChild(boton);
    });

    contenedor.appendChild(div);
  });
}

function toggleRamo(ramo, boton) {
  const aprobado = ramosAprobados.includes(ramo.codigo);
  if (!aprobado) {
    const puede = ramo.prerrequisitos.every(pr => ramosAprobados.includes(pr));
    if (!puede) {
      alert("Primero debes aprobar los prerrequisitos: " + ramo.prerrequisitos.join(", "));
      return;
    }
    ramosAprobados.push(ramo.codigo);
    boton.classList.add("aprobado");
  } else {
    ramosAprobados = ramosAprobados.filter(c => c !== ramo.codigo);
    boton.classList.remove("aprobado");
  }
  actualizarProgreso();
}

function actualizarProgreso() {
  const totalCreditos = malla.reduce((acc, r) => acc + r.creditos, 0);
  const creditosAprobados = malla.filter(r => ramosAprobados.includes(r.codigo))
                                 .reduce((acc, r) => acc + r.creditos, 0);
  const porcentaje = Math.round((creditosAprobados / totalCreditos) * 100);

  progresoBarra.value = porcentaje;
  progresoTexto.textContent = porcentaje + "%";
  creditosTexto.textContent = creditosAprobados;

  actualizarGrafico(creditosAprobados, totalCreditos - creditosAprobados);
}

let grafico;
function actualizarGrafico(aprobados, restantes) {
  if (grafico) grafico.destroy();
  grafico = new Chart(graficoCanvas, {
    type: 'doughnut',
    data: {
      labels: ["Aprobados", "Restantes"],
      datasets: [{
        data: [aprobados, restantes],
        backgroundColor: ["#809bce", "#eac4d5"],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
      },
      cutout: '70%'
    }
  });
}

crearMalla();
actualizarProgreso();
