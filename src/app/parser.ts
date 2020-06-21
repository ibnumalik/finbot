export class Parser {
  /* The tokenize string command. */
  public token: string[];

  /* The tokenize command that is not manipulated. */
  public originalToken: string[];

  /* The original text message from user. */
  public originalText: string;

  constructor(text: string) {
    this.originalText = text;

    this.token = text.split(' ');
    this.originalToken = this.token;
  }

  public getFirstString(): string {
    return this.token[0];
  }

  /**
   * Get the date of the transaction. Default to current date.
   * ['at', '20/6/2020']
   */
  public getDates(): string | Date {
    const dateIndex = this.getStringIndex('at');

    return dateIndex > -1 ? this.extractValue(dateIndex, 2)[1] : new Date();
  }

  /**
   * getAmount
   */
  public getAmount() {
    try {
      return '@';
    } catch (error) {
      throw new Error('');
    }
  }

  /**
   * Get the value from token and delete it.
   *
   * @param index The token start index
   * @param take How much element to delete
   */
  public extractValue(index: number, take = 1) {
    return this.token.splice(index, take);
  }

  /**
   * Find index that starts with the given character.
   *
   * @param symbol string character
   */
  private getStringIndex(symbol: string): number {
    return this.originalToken.findIndex((str) => str.startsWith(symbol));
  }
}
