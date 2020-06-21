import { Command } from './command';
import { Parser } from './parser';

describe('Command', () => {
  const text = `add $400 to @cimb +bonus`;
  const parser = new Parser(text);
  const command = new Command(parser);

  it('should have action', () => {
    expect(command.action).toBe('add');
  });
});
