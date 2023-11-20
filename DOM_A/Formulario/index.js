/*document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("mostrarnombre").textContent = username;
    document.getElementById("mostrarcontraseña").textContent = password;
});*/

/*const miObjeto = {
    usuario: "Admin",
    contraseña: "1234",
    estado: true,
    objetoInterno: { 
        atributo1: "Uno",
        atributo2: "Dos", 
    }
};
miObjeto.usuario = "Administrador"; 
console.log(miObjeto.usuario); */

/*const persona = {
    nombre: "Andres",
    apellido: "Sanchez",
    edad: "20",
    caracteristicas: {
        colorCabello: "Negro",
        genero: "Masculino",
        altura: "150",
        colorOjos: "Azul",
        nacionalidad:"Colombiano", 
    },
    propiedades: ["Carro", "Moto", "Avion", "Terreno"],
    saludar: function () {
        console.log("Hola me llamo " + this.nombre)
    }
}
console.log (persona.saludar())*/

const usuario = document.getElementById("Usuario");
const contraseña = document.getElementById("Contraseña");
const botonIngresar = document.getElementById("botonIngresar");
const nombre = document.getElementById("mostrarnombre");
const mostrarcontraseña = document.getElementById("mostrarcontraseña");
const user = {
    usuario: "admin",
    contraseña: "1234",
};

botonIngresar.addEventListener("click", () => {
    user.usuario = usuario.value;
    user.contraseña = contraseña.value
    mostrarnombre.textContent = usuario.value
    mostrarcontraseña.textContent=contraseña.value
});
/*const credenciales = {
    usuario: "",
    contraseña:"",
}
botonIngresar.addEventListener("click", () => {
    credenciales.usuario = usuario.value;
    credenciales.contraseña = contraseña.value;
})*/