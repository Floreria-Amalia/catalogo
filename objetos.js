// Metodos para recorrer arreglos
var articulos = [
	{nombre: "Bici", costo:"180"},
	{nombre: "TV", costo:"2500"},
	{nombre: "Celular", costo:"600"},
	{nombre: "laptop", costo:"1800"},
	{nombre: "teclado", costo:"35"},
	{nombre: "audifonos", costo:"85"},
];
//metodo para recorrer arrais
// Metodo 1 Filter()
var articulosFiltrados = articulos.filter(
	function filtrado(articulo) {
		return articulo.costo<=500;
	}
);
articulosFiltrados

//Metodo 2
//metodo map()
var nombreArticulos = articulos.map(
	function function_name(articulo) {
	return articulo.nombre
});

//Metodo 3
//metodo find()

var buscarArticulo = articulos.find(
	function function_name(articulo) {
	return articulo.nombre==="teclado";
});

//todos estos metodos anteriores generan un nuevo array

/*-----------------*/

//metodo forEach()

articulos.forEach(function function_name(articulo) {
	console.log(articulo.nombre);
});

//metodo some()
//este metodo devuelve verdadero o falso

var articulosBaratos = articulos.some(function function_name(articulo) {
	return articulo.costo<= 800;
});