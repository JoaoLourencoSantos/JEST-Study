export class InvalidNumberException extends Error {
  constructor(public message: string) {
    super(message || "Please provide a 'number' value");
    this.name = "UnexpectedInput";
    this.stack = (<any>new Error()).stack;
  }
}
