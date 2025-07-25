// script.js
// Carga completa con todos los ramos y prerrequisitos con almacenamiento local

const ramos = [
  { nombre: "Biología Celular Básica Enfermería", semestre: "Año 1 - Semestre 1", creditos: 3, prerrequisitos: [] },
  { nombre: "Psicología General Y Evolutiva", semestre: "Año 1 - Semestre 1", creditos: 4, prerrequisitos: [] },
  { nombre: "Socioantropologia I", semestre: "Año 1 - Semestre 1", creditos: 2, prerrequisitos: [] },
  { nombre: "Fundamentos De Enfermería", semestre: "Año 1 - Semestre 1", creditos: 2, prerrequisitos: [] },
  { nombre: "Promoción de la Salud", semestre: "Año 1 - Semestre 1", creditos: 3, prerrequisitos: [] },
  { nombre: "Inglés Comunicativo I", semestre: "Año 1 - Semestre 1", creditos: 3, prerrequisitos: [] },
  { nombre: "Histología Humana - Enfermeria", semestre: "Año 1 - Semestre 2", creditos: 3, prerrequisitos: ["Biología Celular Básica Enfermería"] },
  { nombre: "Anatomía Descriptiva - Enfermería", semestre: "Año 1 - Semestre 2", creditos: 4, prerrequisitos: ["Biología Celular Básica Enfermería"] },
  { nombre: "Prevención En Salud", semestre: "Año 1 - Semestre 2", creditos: 3, prerrequisitos: ["Fundamentos De Enfermería", "Promoción de la Salud"] },
  { nombre: "Socioantropología II", semestre: "Año 1 - Semestre 2", creditos: 2, prerrequisitos: ["Socioantropologia I"] },
  { nombre: "Química General Y Básica", semestre: "Año 1 - Semestre 2", creditos: 6, prerrequisitos: [] },
  { nombre: "Inglés Comunicativo II", semestre: "Año 1 - Semestre 2", creditos: 3, prerrequisitos: ["Inglés Comunicativo I"] },
  { nombre: "Fisiología Enfermería", semestre: "Año 2 - Semestre 3", creditos: 4, prerrequisitos: ["Histología Humana - Enfermeria", "Anatomía Descriptiva - Enfermería", "Química General Y Básica"] },
  { nombre: "Bioquímica - Enfermería", semestre: "Año 2 - Semestre 3", creditos: 3, prerrequisitos: ["Química General Y Básica"] },
  { nombre: "Enfermería En Salud Familiar Y Comunitaria", semestre: "Año 2 - Semestre 3", creditos: 4, prerrequisitos: ["Prevención En Salud", "Socioantropología II"] },
  { nombre: "Fundamentos De La Gestión Del Cuidado De Enfermería", semestre: "Año 2 - Semestre 3", creditos: 4, prerrequisitos: ["Histología Humana - Enfermeria", "Anatomía Descriptiva - Enfermería", "Prevención En Salud"] },
  { nombre: "Fundamentos De Ética En Enfermería", semestre: "Año 2 - Semestre 3", creditos: 2, prerrequisitos: [] },
  { nombre: "Complementaria I", semestre: "Año 2 - Semestre 3", creditos: 2, prerrequisitos: [] },
  { nombre: "Fisiopatología Enfermería", semestre: "Año 2 - Semestre 4", creditos: 4, prerrequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"] },
  { nombre: "Farmacologia - Enfermeria", semestre: "Año 2 - Semestre 4", creditos: 3, prerrequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"] },
  { nombre: "Gestión Del Cuidado De Enfermería En El Adulto I", semestre: "Año 2 - Semestre 4", creditos: 4, prerrequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería", "Enfermería En Salud Familiar Y Comunitaria", "Fundamentos De La Gestión Del Cuidado De Enfermería", "Fundamentos De Ética En Enfermería"] },
  { nombre: "Enfermería En El Adulto", semestre: "Año 2 - Semestre 4", creditos: 5, prerrequisitos: ["Fisiología Enfermería", "Fundamentos De La Gestión Del Cuidado De Enfermería"] },
  { nombre: "Interacción Humana", semestre: "Año 2 - Semestre 4", creditos: 2, prerrequisitos: ["Fundamentos De Ética En Enfermería"] },
  { nombre: "Microbiología Enfermería Obstetricia", semestre: "Año 2 - Semestre 4", creditos: 4, prerrequisitos: ["Fisiología Enfermería", "Bioquímica - Enfermería"] },
  { nombre: "Gerencia En Salud Y Enfermería", semestre: "Año 3 - Semestre 5", creditos: 3, prerrequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto I", "Enfermería En El Adulto"] },
  { nombre: "Gestión Del Cuidado De Enfermería En El Adulto II", semestre: "Año 3 - Semestre 5", creditos: 6, prerrequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto I", "Enfermería En El Adulto"] },
  { nombre: "Metodología De La Investigación Cuantitativa", semestre: "Año 3 - Semestre 5", creditos: 3, prerrequisitos: [] },
  { nombre: "Comunicación Y Liderazgo", semestre: "Año 3 - Semestre 5", creditos: 2, prerrequisitos: ["Interacción Humana"] },
  { nombre: "Complementaria 2", semestre: "Año 3 - Semestre 5", creditos: 2, prerrequisitos: [] },
  { nombre: "Gestión De Proyectos", semestre: "Año 3 - Semestre 6", creditos: 3, prerrequisitos: ["Gerencia En Salud Y Enfermería", "Gestión Del Cuidado De Enfermería En El Adulto II", "Metodología De La Investigación Cuantitativa"] },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Adulto Mayor", semestre: "Año 3 - Semestre 6", creditos: 5, prerrequisitos: ["Gerencia En Salud Y Enfermería", "Gestión Del Cuidado De Enfermería En El Adulto II"] },
  { nombre: "Metodología De La Investigación Cualitativa", semestre: "Año 3 - Semestre 6", creditos: 3, prerrequisitos: [] },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", semestre: "Año 3 - Semestre 6", creditos: 5, prerrequisitos: ["Gestión Del Cuidado De Enfermería En El Adulto II"] },
  { nombre: "Bioética Y Enfermería", semestre: "Año 3 - Semestre 6", creditos: 2, prerrequisitos: [] },
  { nombre: "Enfermería En Salud Mental", semestre: "Año 3 - Semestre 6", creditos: 4, prerrequisitos: ["Comunicación Y Liderazgo"] },
  { nombre: "Enfermería En Urgencias Y Desastres", semestre: "Año 4 - Semestre 7", creditos: 3, prerrequisitos: ["Enfermería Y Gestión Del Cuidado En El Adulto Mayor", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", "Enfermería En Salud Mental"] },
  { nombre: "Enfermería Basada En La Evidencia", semestre: "Año 4 - Semestre 7", creditos: 3, prerrequisitos: ["Metodología De La Investigación Cualitativa"] },
  { nombre: "Enfermería En Salud Familiar Y Comunitaria II", semestre: "Año 4 - Semestre 7", creditos: 4, prerrequisitos: ["Enfermería Y Gestión Del Cuidado En El Adulto Mayor", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I"] },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II", semestre: "Año 4 - Semestre 7", creditos: 6, prerrequisitos: ["Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I"] },
  { nombre: "Gestión Del Cuidado De Enfermería En Salud Mental", semestre: "Año 4 - Semestre 7", creditos: 3, prerrequisitos: ["Enfermería En Salud Mental"] },
  { nombre: "Gestión Del Cuidado De Enfermería En Urgencias Y Desastres", semestre: "Año 4 - Semestre 8", creditos: 6, prerrequisitos: ["Enfermería En Urgencias Y Desastres", "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II", "Gestión Del Cuidado De Enfermería En Salud Mental"] },
  { nombre: "Calidad Y Seguridad En Salud", semestre: "Año 4 - Semestre 8", creditos: 3, prerrequisitos: ["Enfermería Basada En La Evidencia"] },
  { nombre: "Gestión Del Cuidado De Enfermería En Salud Familiar Y Comunitaria", semestre: "Año 4 - Semestre 8", creditos: 6, prerrequisitos: ["Enfermería En Salud Familiar Y Comunitaria II", "Gestión Del Cuidado De Enfermería En Salud Mental"] },
  { nombre: "Internado Extramural", semestre: "Año 5 - Semestre 9", creditos: 20, prerrequisitos: [] },
  { nombre: "Internado Intramural", semestre: "Año 5 - Semestre 10", creditos: 20, prerrequisitos: [] },
  { nombre: "Examen De Titulación", semestre: "Año 5 - Semestre 10", creditos: 0, prerrequisitos: [] }
];

let aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados") || "[]"));
const totalCreditos = 232;
document.getElementById("creditos-totales").textContent = totalCreditos;

function crearMalla() {
  const container = document.getElementById("malla");
  const semestres = {};

  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      const div = document.createElement("div");
      div.className = "semestre";
      div.id = ramo.semestre;
      const h2 = document.createElement("h2");
      h2.textContent = ramo.semestre;
      div.appendChild(h2);
      semestres[ramo.semestre] = div;
      container.appendChild(div);
    }

    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;

    if (aprobados.has(ramo.nombre)) {
      div.classList.add("aprobado");
    } else {
      div.classList.add("locked");
    }

    const credit = document.createElement("div");
    credit.className = "credito";
    credit.textContent = `${ramo.creditos} créditos`;
    div.appendChild(credit);

    div.onclick = () => aprobarRamo(ramo, div);
    semestres[ramo.semestre].appendChild(div);
  });

  actualizarBloqueos();
  actualizarProgreso();
}

function aprobarRamo(ramo, div) {
  if (div.classList.contains("locked")) return;

  if (!aprobados.has(ramo.nombre)) {
    aprobados.add(ramo.nombre);
    localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados]));
    div.classList.add("aprobado");
    actualizarProgreso();
    actualizarBloqueos();
  }
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.childNodes[0].nodeValue;
    const ramoData = ramos.find(r => r.nombre === nombre);
    const requisitos = ramoData.prerrequisitos;

    const desbloqueado = requisitos.every(req => aprobados.has(req));
    if (desbloqueado || requisitos.length === 0) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }
  });
}

function actualizarProgreso() {
  const creditosAprobados = ramos
    .filter(r => aprobados.has(r.nombre))
    .reduce((sum, r) => sum + r.creditos, 0);

  const porcentaje = Math.floor((creditosAprobados / totalCreditos) * 100);
  document.getElementById("progress-bar").style.width = `${porcentaje}%`;
  document.getElementById("progress-text").textContent = `${porcentaje}%`;
  document.getElementById("creditos-aprobados").textContent = creditosAprobados;

  actualizarGrafico(porcentaje);
}

let chart;
function actualizarGrafico(porcentaje) {
  if (!chart) {
    const ctx = document.getElementById("chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Aprobado", "Restante"],
        datasets: [
          {
            data: [porcentaje, 100 - porcentaje],
            backgroundColor: ["#6fcf97", "#ddd"],
            borderWidth: 1,
          },
        ],
      },
    });
  } else {
    chart.data.datasets[0].data = [porcentaje, 100 - porcentaje];
    chart.update();
  }
}

crearMalla();
