$(document).ready(function() {
 $('.modal').modal();
});

//evento al apretar botón
$("#agregar").click(function() {
	//guardar input
	var nombre= $("#nombreInput").val();
	var telefono= $("#telefonoInput").val();
//apendding inputs
$("#listaContactos").append("<div>"+"<i class='material-icons'>contacts</i>"+nombre+telefono+"</div");/* Act on the event */
	});

