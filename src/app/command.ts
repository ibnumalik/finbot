import { Parser } from './parser';

export class Command {
  /* The action user intended to do. First string in text message. */
  public get action(): string {
    return this.parser.getFirstString();
  }

  public parser: Parser;

  constructor(parser: Parser) {
    this.parser = parser;
  }
}
