function converteParaCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;

    return celsius;
}

function convertParaFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

function converteTemperatura(temperatura, conversor){
    let resultado;

    if(conversor == 'C'){
        resultado = converteParaCelsius(temperatura);
    } else if(conversor == 'F'){
        resultado = convertParaFahrenheit(temperatura);
    }

    return resultado;
}

exports.converteTemperatura = converteTemperatura;