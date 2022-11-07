function convertirGradosCentigradosAGradosFahrenheint(gC)
{     var result = document.getElementById("resultado")
     var F=0
    F= gC*9/5
    F= F+32
if (F>=212){  result.innerHTML = "<p1> Punto de ebullicion del agua:" + F + "</p1>" } else 
if (F>=98.6 && F<212){  result.innerHTML = "<p1> Temperatura del cuerpo humano:" + F + "</p1>" } else
if (F>=77 && F<98.6){  result.innerHTML = "<p1> Temperatura ambiente" + F + "</p1>"} else 
if (F>=32 && F<77){  result.innerHTML = "<p1> Punto de congelación del agua:" + F + "</p1>"} else
if (F>= -459.58 && F<32){  result.innerHTML = "<p1> Cero absoluto:" + F + "</p1>"}
}

function calcularporcentajes(num1)
{     var result = document.getElementById("porcentaje")
var numF= 0
if (num1<500) {numF=num1+num1/2 
result.innerHTML = "<p1> El resultado total del numero ingresado " + num1 + " es " + numF + "</p1>"} else
if (num1>=500){numF= num1-num1*7/100
 result.innerHTML = "<p1> El resultado total del numero ingresado " + num1 + " es " + numF + "</p1>"}
}
function obtenertabla(filas,columnas)
 { var result = document.getElementById("tabla")
 var p=filas*columnas

 document.write("<table border>")

 for (var i = 0; i < filas; i++) {
     document.write("<tr>")
     for (var j = 0; j < columnas; j++) {
         document.write("<td>")
         document.write (p)
         p--
         document.write("</td>")
     }
     document.write ("</tr>")}
     document.write ("</table>")  
     document.write ("<br>")   
     document.write ("<p> Que tenga buena noche </p>")  
 }
   

    
  
    