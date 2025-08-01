// Datos base: ramos, créditos y prerrequisitos
const ramos = [
  { codigo: "BIOCEL", nombre: "Biología Celular Básica Enfermería", creditos: 3, ano: 1, semestre: 1, prerrequisitos: [] },
  { codigo: "PSICO", nombre: "Psicología General Y Evolutiva", creditos: 4, ano: 1, semestre: 1, prerrequisitos: [] },
  { codigo: "SOCIO1", nombre: "Socioantropología I", creditos: 2, ano: 1, semestre: 1, prerrequisitos: [] },
  { codigo: "FUND1", nombre: "Fundamentos De Enfermería", creditos: 2, ano: 1, semestre: 1, prerrequisitos: [] },
  { codigo: "PROMO", nombre: "Promoción de la Salud", creditos: 3, ano: 1, semestre: 1, prerrequisitos: [] },
  { codigo: "ING1", nombre: "Inglés Comunicativo I", creditos: 3, ano: 1, semestre: 1, prerrequisitos: [] },

  { codigo: "HISTO", nombre: "Histología Humana - Enfermería", creditos: 3, ano: 1, semestre: 2, prerrequisitos: ["BIOCEL"] },
  { codigo: "ANATO", nombre: "Anatomía Descriptiva - Enfermería", creditos: 4, ano: 1, semestre: 2, prerrequisitos: ["BIOCEL"] },
  { codigo: "PREV", nombre: "Prevención En Salud", creditos: 3, ano: 1, semestre: 2, prerrequisitos: ["FUND1", "PROMO"] },
  { codigo: "SOCIO2", nombre: "Socioantropología II", creditos: 2, ano: 1, semestre: 2, prerrequisitos: ["SOCIO1"] },
  { codigo: "QUIM", nombre: "Química General Y Básica", creditos: 6, ano: 1, semestre: 2, prerrequisitos: [] },
  { codigo: "ING2", nombre: "Inglés Comunicativo II", creditos: 3, ano: 1, semestre: 2, prerrequisitos: ["ING1"] },

  { codigo: "FISIO", nombre: "Fisiología Enfermería", creditos: 4, ano: 2, semestre: 3, prerrequisitos: ["HISTO", "ANATO", "QUIM"] },
  { codigo: "BIOQ", nombre: "Bioquímica - Enfermería", creditos: 3, ano: 2, semestre: 3, prerrequisitos: ["QUIM"] },
  { codigo: "COMUNITARIA1", nombre: "Enfermería En Salud Familiar Y Comunitaria", creditos: 4, ano: 2, semestre: 3, prerrequisitos: ["PREV", "SOCIO2"] },
  { codigo: "GEST1", nombre: "Fundamentos De La Gestión Del Cuidado De Enfermería", creditos: 4, ano: 2, semestre: 3, prerrequisitos: ["HISTO", "ANATO", "PREV"] },
  { codigo: "ETICA", nombre: "Fundamentos De Ética En Enfermería", creditos: 2, ano: 2, semestre: 3, prerrequisitos: [] },
  { codigo: "COMP1", nombre: "Complementaria I", creditos: 2, ano: 2, semestre: 3, prerrequisitos: [] },

  { codigo: "FISIOPATO", nombre: "Fisiopatología Enfermería", creditos: 4, ano: 2, semestre: 4, prerrequisitos: ["FISIO", "BIOQ"] },
  { codigo: "FARMA", nombre: "Farmacología - Enfermería", creditos: 3, ano: 2, semestre: 4, prerrequisitos: ["FISIO", "BIOQ"] },
  { codigo: "GEST2", nombre: "Gestión Del Cuidado De Enfermería En El Adulto I", creditos: 4, ano: 2, semestre: 4, prerrequisitos: ["FISIO", "BIOQ", "COMUNITARIA1", "GEST1", "ETICA"] },
  { codigo: "ADULTO1", nombre: "Enfermería En El Adulto", creditos: 5, ano: 2, semestre: 4, prerrequisitos: ["FISIO", "GEST1"] },
  { codigo: "INTERACCION", nombre: "Interacción Humana", creditos: 2, ano: 2, semestre: 4, prerrequisitos: ["ETICA"] },
  { codigo: "MICROBIO", nombre: "Microbiología Enfermería Obstetricia", creditos: 4, ano: 2, semestre: 4, prerrequisitos: ["FISIO", "BIOQ"] },

  { codigo: "GERENCIA", nombre: "Gerencia En Salud Y Enfermería", creditos: 3, ano: 3, semestre: 5, prerrequisitos: ["GEST2", "ADULTO1"] },
  { codigo: "GEST3", nombre: "Gestión Del Cuidado De Enfermería En El Adulto II", creditos: 6, ano: 3, semestre: 5, prerrequisitos: ["GEST2", "ADULTO1"] },
  { codigo: "METCUAN", nombre: "Metodología De La Investigación Cuantitativa", creditos: 3, ano: 3, semestre: 5, prerrequisitos: [] },
  { codigo: "LIDERAZGO", nombre: "Comunicación Y Liderazgo", creditos: 2, ano: 3, semestre: 5, prerrequisitos: ["INTERACCION"] },
  { codigo: "COMP2", nombre: "Complementaria II", creditos: 2, ano: 3, semestre: 5, prerrequisitos: [] },

  { codigo: "PROYECTOS", nombre: "Gestión De Proyectos", creditos: 3, ano: 3, semestre: 6, prerrequisitos: ["GERENCIA", "GEST3", "METCUAN"] },
  { codigo: "AMAYOR", nombre: "Enfermería Y Gestión Del Cuidado En El Adulto Mayor", creditos: 5, ano: 3, semestre: 6, prerrequisitos: ["GEST3"] },
  { codigo: "METQUALI", nombre: "Metodología De La Investigación Cualitativa", creditos: 3, ano: 3, semestre: 6, prerrequisitos: [] },
  { codigo: "NINO1", nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", creditos: 5, ano: 3, semestre: 6, prerrequisitos: ["GEST3"] },
  { codigo: "BIOETICA", nombre: "Bioética Y Enfermería", creditos: 2, ano: 3, semestre: 6, prerrequisitos: [] },
  { codigo: "SM", nombre: "Enfermería En Salud Mental", creditos: 4, ano: 3, semestre: 6, prerrequisitos: ["LIDERAZGO"] },

  { codigo: "URGENCIAS", nombre: "Enfermería En Urgencias Y Desastres", creditos: 3, ano: 4, semestre: 7, prerrequisitos: ["AMAYOR", "NINO1", "SM"] },
  { codigo: "EBE", nombre: "Enfermería Basada En La Evidencia", creditos: 3, ano: 4, semestre: 7, prerrequisitos: ["METQUALI"] },
  { codigo: "COMUNITARIA2", nombre: "Enfermería En Salud Familiar Y Comunitaria II", creditos: 4, ano: 4, semestre: 7, prerrequisitos: ["AMAYOR", "NINO1"] },
  { codigo: "NINO2", nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II", creditos: 6, ano: 4, semestre: 7, prerrequisitos: ["NINO1"] },
  { codigo: "GSM", nombre: "Gestión Del Cuidado De Enfermería En Salud Mental", creditos: 3, ano: 4, semestre: 7, prerrequisitos: ["SM"] },

  { codigo: "GURGENCIAS", nombre: "Gestión Del Cuidado De Enfermería En Urgencias Y Desastres", creditos: 6, ano: 4, semestre: 8, prerrequisitos: ["URGENCIAS", "NINO2", "GSM"] },
  { codigo: "CALIDAD", nombre: "Calidad Y Seguridad En Salud", creditos: 3, ano: 4, semestre: 8, prerrequisitos: ["EBE"] },
  { codigo: "GFAMILIAR", nombre: "Gestión Del Cuidado De Enfermería En Salud Familiar Y Comunitaria", creditos: 6, ano: 4, semestre: 8, prerrequisitos: ["COMUNITARIA2", "NINO2", "GSM"] },

  { codigo: "INTEREXT", nombre: "Internado Extramural", creditos: 20, ano: 5, semestre: 9, prerrequisitos: [] },
  { codigo: "INTERINT", nombre: "Internado Intramural", creditos: 20, ano: 5, semestre: 10, prerrequisitos: [] },
  { codigo: "EXFINAL", nombre: "Examen De Titulación", creditos: 0, ano: 5, semestre: 10, prerrequisitos: [] }
];

const TOTAL_CREDITOS = 226;
let creditosAprobados = 0;

function crearMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  const agrupados = {};

  // Agrupar ramos por año y semestre
  ramos.forEach(ramo => {
    const key = `Año ${ramo.ano} - Semestre ${ramo.semestre}`;
    if (!agrupados[key]) agrupados[key] = [];
    agrupados[key].push(ramo);
  });

  for (const [semestre, listaRamos] of Object.entries(agrupados)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>${semestre}</h2>`;

    listaRamos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
      divRamo.dataset.codigo = ramo.codigo;
      divRamo.dataset.creditos = ramo.creditos;
      divRamo.dataset.prerrequisitos = JSON.stringify(ramo.prerrequisitos);
      divRamo.onclick = () => aprobarRamo(divRamo);

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
}

function aprobarRamo(div) {
  if (div.classList.contains("aprobado")) return;

  const prerreqs = JSON.parse(div.dataset.prerrequisitos);
  const cumplidos = prerreqs.every(cod =>
    document.querySelector(`.ramo[data-codigo='${cod}']`)?.classList.contains("aprobado")
  );

  if (!cumplidos) return;

  div.classList.add("aprobado");
  creditosAprobados += parseInt(div.dataset.creditos);
  actualizarProgreso();
}

function actualizarProgreso() {
  const porcentaje = Math.round((creditosAprobados / TOTAL_CREDITOS) * 100);
  document.getElementById("creditos-aprobados").textContent = creditosAprobados;
  document.getElementById("barra-progreso").value = porcentaje;
  document.getElementById("porcentaje-progreso").textContent = `${porcentaje}%`;
  actualizarGrafico(porcentaje);
}

let grafico;
function inicializarGrafico() {
  const ctx = document.getElementById('grafico-torta').getContext('2d');
  grafico = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Aprobado', 'Restante'],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#809bce', '#eac4d5']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function actualizarGrafico(porcentaje) {
  grafico.data.datasets[0].data = [porcentaje, 100 - porcentaje];
  grafico.update();
}

window.onload = () => {
  crearMalla();
  inicializarGrafico();
};
