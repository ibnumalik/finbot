import { Parser } from './parser';

const basicCommand = `add $400 to @cimb +bonus`;
const commandWithDate = `add $400 to @cimb at 20/6/2020 +freelance`;

describe('Parser', () => {
  const parser = new Parser(basicCommand);

  it('should have original text', () => {
    expect(parser.originalText).toBe(basicCommand);
  });

  it('should tokenize text', () => {
    expect(parser.token.length).toBe(5);
  });

  it('should define action as first string in text', () => {
    expect(parser.getFirstString()).toBe('add');
  });

  describe('without date', () => {
    it('should get today date', () => {
      jest.spyOn(Date, 'now').mockImplementation(() => new Date().valueOf());
      expect(parser.getDates()).toEqual(new Date());
    });
  });

  describe('with date', () => {
    const parserWithDate = new Parser(commandWithDate);

    it('should get date defined by user', () => {
      expect(parserWithDate.getDates()).toBe('20/6/2020');
    });
  });
});
