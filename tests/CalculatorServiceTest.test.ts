import { InvalidNumberException } from "./../src/exception/InvalidNumberException";
import CalculatorService from "../src/service/CalculatorService";
import { InvalidDividerException } from "../src/exception/InvalidDividerException";

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
});

describe(`${title} - Subtraction`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.sub(5, 2)).toBe(3);
    expect(CalculatorService.sub(5, -2)).toBe(7);
    expect(CalculatorService.sub(10, 10)).toBe(0);
  });
});

describe(`${title} - Multiplication`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.mult(5, 2)).toBe(10);
    expect(CalculatorService.mult(-5, 2)).toBe(-10);
    expect(CalculatorService.mult(1, 0)).toBe(0);
  });
});

describe(`${title} - Division`, () => {
  it(`${valid} - simple case`, () => {
    expect(CalculatorService.div(5, 2)).toBe(2.5);
    expect(CalculatorService.div(-5, 2)).toBe(-2.5);
    expect(CalculatorService.div(1, 2)).toBe(0.5);
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
