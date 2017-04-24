var titanicos;

function preload() {
  titanicos = loadTable("https://raw.githubusercontent.com/rociormp/clase_17abril/master/Titanic_Passengers.csv", "csv", true);
}


function setup() {
  var miCanvas = createCanvas(windowWidth, 400);
 miCanvas.parent('miContenedor');

   for (var i = 0; i < titanicos.getRowCount(); i++) {
      var nombre = titanicos.get(i, 4);
      var clase = titanicos.get(i, 2);
      print("Pasajero " + nombre + ", clase " +clase);
   }

}
function draw() {
   var pasajeros = 0;
   var vivos = 0;
   for (var y = 0; y < titanicos.getRowCount(); y++) {
      pasajeros++
      if (titanicos.get(y, 1) == 1) {
         vivos++;
      }
   }

   textSize(18);
   text("De un total de "+ pasajeros+" pasajeros en la base de datos, solamente "+vivos+" sobrevivieron.", 10, 30);
}
