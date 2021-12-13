let Nombre = document.getElementById("Nombre");
let Color = document.getElementById("Color");
let guardar_btn = document.getElementById("guardar-btn");
let lista = document.getElementById("lista");

let arr = [];

const guardar = () => {
    if(Nombre.value && Color.value ) 
    {
        datos.push({
            Nombre: Nombre.value,
            Color: Color.value,
        });
        localStorage.setItem("arr" , JSON.stringify(arr));
        Nombre.value = "";
        Color.value = "";
        obtenerdatos();
    }
    else {
        alert("Completa los campos");
    }
    function obtenerdatos()
	{
		var Nombre = document.getElementById('Nombre').value;
		var Color = parseFloat(document.getElementById('color').value);

		document.nombreobtenido.value = Nombre;
		document.colorobtenido.value = Color;
        console.log(nombreobtenido,colorobtenido);
	}
};
guardar_btn.addEventListener("click", ()=>{guardar()});