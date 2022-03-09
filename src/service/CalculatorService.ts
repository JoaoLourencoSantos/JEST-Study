import { InvalidNumberException } from '../exception/InvalidNumberException';
import { InvalidDividerException } from './../exception/InvalidDividerException';

class CalculatorService {
  sum(value1: any, value2: any): number {
    this.validate(value1, value2); 

    return parseFloat(value1) + parseFloat(value2);
  }

  sub(value1: any, value2: any): number {
    this.validate(value1, value2); 

    return parseFloat(value1) - parseFloat(value2);
  }

  mult(value1: any, value2: any): number {
    this.validate(value1, value2); 

    return parseFloat(value1) * parseFloat(value2);
  }

  div(value1: any, value2: any): number {
    this.validate(value1, value2);
    this.validateDivider(value2);

    return parseFloat(value1) / parseFloat(value2);
  }

  validate(value1: any, value2: any) {
    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))) {
      throw new InvalidNumberException("Preencha somente valores numéricos.");
    }
  }

  validateDivider(value: any) {
    if (parseFloat(value) === 0) {
      throw new InvalidDividerException("Preencha um número diferente que 0.");
    }
  }
}

export default new CalculatorService();
