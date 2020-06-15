var texto = document.getElementById('texto_lineas');
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var xi, yf;
  var colorB = "Blue";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
    {
        xi = espacio * l + 300;
        yf = 600 - (espacio * l);
        dibujarLinea(colorB, xi, 300, 300, yf);

        yi = espacio * l;
        xf = espacio * l + 300;
        dibujarLinea(colorB, 300, yi, xf, 300);

        yi = espacio * l + 300;
        xf = espacio * l;
        dibujarLinea(colorB, 300, yi, xf, 300);

        xi = espacio * l;
        yf = 300 - (espacio * l);
        dibujarLinea(colorB, xi, 300, 300, yf);
    }

  dibujarLinea(colorB, 1,300,600,300);
  dibujarLinea(colorB, 300,1,300,600);
}
