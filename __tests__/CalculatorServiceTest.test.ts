import { InvalidNumberException } from "../src/exceptions/InvalidNumberException";
import CalculatorService from "../src/services/CalculatorService";
import { InvalidDividerException } from "../src/exceptions/InvalidDividerException";

const title: string = `Testing Calculator Service`;
const valid: string = `VALID_CASE`;
const invalid: string = `INVALID_CASE`;
const error: string = `ERROR_CASE`;

describe(`${title} - Addition`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.sum(5, 2)).toBe(7);
    expect(CalculatorService.sum(-5, 2)).toBe(-3);
    expect(CalculatorService.sum(0, 2)).toBe(2);
  });

  it(`${valid} - double case`, () => {
    expect(CalculatorService.sum(0.5, 2)).toBe(2.5);
    expect(CalculatorService.sum(1.3, 2)).toBe(3.3);
    expect(CalculatorService.sum(-0.5, 2)).toBe(1.5);
  });

  it(`${error} - value`, () => {
    expect(() => {
      CalculatorService.sum(5, "s");
    }).toThrow(InvalidNumberException);
  });

  it(`${error} - value`, () => {
    expect(() => {
      CalculatorService.sum("😎", "😆");
    }).toThrow(InvalidNumberException);
  });
});

describe(`${title} - Subtraction`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.sub(5, 2)).toBe(3);
    expect(CalculatorService.sub(5, -2)).toBe(7);
    expect(CalculatorService.sub(10, 10)).toBe(0);
  });

  it(`${valid} - double case`, () => {
    expect(CalculatorService.sub(0.5, 2)).toBe(-1.5);
    expect(CalculatorService.sub(1.3, 2)).toBe(-0.7);
    expect(CalculatorService.sub(-0.5, 2)).toBe(-2.5);
  });

  it(`${error} - value`, () => {
    expect(() => {
      CalculatorService.sub(5, "s");
    }).toThrow(InvalidNumberException);
  });
});

describe(`${title} - Multiplication`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.mult(5, 2)).toBe(10);
    expect(CalculatorService.mult(-5, 2)).toBe(-10);
    expect(CalculatorService.mult(1, 0)).toBe(0);
  });

  it(`${valid} - double case`, () => {
    expect(CalculatorService.mult(0.5, 2)).toBe(1);
    expect(CalculatorService.mult(1.3, 2)).toBe(2.6);
    expect(CalculatorService.mult(-0.5, 2)).toBe(-1);
  });

  it(`${error} - value`, () => {
    expect(() => {
      CalculatorService.sub(5, "s");
    }).toThrow(InvalidNumberException);
  });
});

describe(`${title} - Division`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.div(5, 2)).toBe(2.5);
    expect(CalculatorService.div(-5, 2)).toBe(-2.5);
    expect(CalculatorService.div(1, 2)).toBe(0.5);
    expect(CalculatorService.div(0, 2)).toBe(0);
  });

  it(`${valid} - double case`, () => {
    expect(CalculatorService.div(2.5, 1.6)).toBe(1.5625);
    expect(CalculatorService.div(1.3, 2)).toBe(0.65);
    expect(CalculatorService.div(-0.5, 2)).toBe(-0.25);
  });

  it(`${error} - value`, () => {
    expect(() => {
      CalculatorService.div(5, "s");
    }).toThrow(InvalidNumberException);
  });
  
  it(`${error} - divider`, () => {
    expect(() => {
      CalculatorService.div(5, 0);
    }).toThrow(InvalidDividerException);
  });
});
