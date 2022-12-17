// Función para obtener todos los clientes
function getClients() {
    fetch("http://localhost:9000/api/clientes")
        .then(response => response.json())
        .then(data => console.log(data));
}

getClients();

// Función para obtener a clientes por ID
function getClient(id) {
    fetch(`http://localhost:9000/api/clientes/${id}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

getClient("639bcae86788f2da61d3c934");

