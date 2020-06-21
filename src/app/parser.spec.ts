import { Parser } from './parser';

describe('Parser', () => {
  const text = `add $400 to @cimb +bonus`;
  const parser = new Parser(text);

  test('should have original text', () => {
    expect(parser.originalText).toBe(text);
  });

  test('should tokenize text', () => {
    expect(parser.token.length).toBe(5);
  });

  test('should define action as first string in text', () => {
    expect(parser.getFirstString()).toBe('add');
  });
});
