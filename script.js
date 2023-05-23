function precioTotal(){
    console.log("ingreso a precioTotal");

    let cantEnt=document.getElementById("floatingInputGrid").value;
    console.log(cantEnt);

    let porcDesc=document.getElementById("floatingSelectGrid").value;
    console.log(porcDesc);

    let descuento= (cantEnt*200) * porcDesc/100;
    console.log("descuento " + descuento);

    let precioFin= (cantEnt*200)- descuento;

    document.getElementById("precioFinal").value= "Total a pagar: $" + precioFin;
}
