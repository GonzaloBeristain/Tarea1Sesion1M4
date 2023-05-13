let boton = document.getElementById("boton");
let total = document.getElementById("result");
let interesTotal;
let valorCuota;
let cuotas = document.getElementById("cuotas").value;

let calcularValorInteres = () => {
    let monto = Number(document.getElementById("monto").value);
    let interes = Number(document.getElementById("interes").value);

    interesTotal = (monto * interes) / 100;
    calcularValorCuota()
};

let calcularValorCuota = () => {
    let monto = Number(document.getElementById("monto").value);
    let cuotas = Number(document.getElementById("cuotas").value);
    valorCuota = (interesTotal + monto) / cuotas;
    escribirHtml()
};

let escribirHtml = () => {
    let valorCambiado =
            "$" +
            Number(valorCuota).toLocaleString("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
    });

    total.innerText = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cuotas} CUOTAS DE ${valorCambiado}
    `
};

boton.addEventListener("click", calcularValorInteres);


