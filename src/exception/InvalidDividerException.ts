export class InvalidDividerException extends Error {
  constructor(public message: string) {
    super(message || "Please provide a 'number' biggest than 0");
    this.name = "UnexpectedInput";
    this.stack = (<any>new Error()).stack;
  }
}
