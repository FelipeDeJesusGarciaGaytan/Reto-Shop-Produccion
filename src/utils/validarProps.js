export function validarProps(componente, nombreProp, valor, tipoEsperado){

    const tipoReal = typeof valor;

    if (valor !== undefined && tipoReal !== tipoEsperado){
        console.warn(
            ` [${componente}] Las props "${nombreProp}" deberia ser ` +
            `${tipoEsperado}, pero llego ${tipoReal}.` +
            `(valor: ${JSON.stringify(valor)})`
        );
    };
}

export function validarOpciones(componente, nombreProp, valor, opcionesValidas){
    if(valor !== undefined && !opcionesValidas.includes(valor)){
        console.warn(
            ` [${componente}] Las props "${nombreProp}" debe ser una de: ` +
            `${opcionesValidas.join(', ')}, pero llego ${valor}.`
        )
    }
}