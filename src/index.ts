import { InvalidDividerException } from './exception/InvalidDividerException';
import { InvalidNumberException } from './exception/InvalidNumberException';
import CalculatorService from "./service/CalculatorService";

function start() { 
    try {

        CalculatorService.div("1", "s");
        CalculatorService.div("1", "0");
    } catch(e ) {
        if (e instanceof InvalidNumberException) {
            console.log("Por favor digite um número válido, contendo somente caracteres numéricos!")
        }

        if (e instanceof InvalidDividerException) {
            console.log("Por favor, para divisões digite denominador diferente de 0!")
        }
    }
}

start();