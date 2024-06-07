async function mensajeAviso() {
    await fetch('fetch.json')
        .then((response) => response.json())
        .then((data) => {
            const contenedor = document.getElementById("listaAlumnos");
            contenedor.innerHTML = "";
            const mensaje = document.createElement("h2");
            mensaje.innerText = data;
            mensaje.className = "nombreAlumno";
            contenedor.appendChild(mensaje);
        })
        .catch((error) => console.error(error));
}

module.exports = mensajeAviso;
