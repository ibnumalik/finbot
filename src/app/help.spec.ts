import { Help } from './help';

const h = new Help();

describe('Help', () => {
  test('Output help message to user', () => {
    expect(h.text).toMatch(/(add)/);
  });
});
