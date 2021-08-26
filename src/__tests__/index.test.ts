import { Greeting } from '../index';

describe('Greeting()', () => {
  it('should return correct message', () => {
    expect(Greeting('Sylar')).toBe('Hello Sylar');
  });
});
