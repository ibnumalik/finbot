export class Parser {
  /* The tokenize string command . */
  public token: string[];

  /* The original text message from user. */
  public originalText: string;

  constructor(text: string) {
    this.originalText = text;

    this.token = text.split(' ');
  }

  public get action(): string {
    return this.token[0];
  }
}
