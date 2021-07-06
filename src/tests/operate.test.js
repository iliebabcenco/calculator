import operate from '../logic/operate';

describe('test calculation of aritmetic operations', () => {
  it('calculates sum', () => {
    expect(operate(5, 6, '+')).toEqual('11');
  });
  it('calculates subtract', () => {
    expect(operate(5, 6, '-')).toEqual('-1');
  });
  it('calculates multiplier', () => {
    expect(operate(5, 6, 'X')).toEqual('30');
  });
  it('calculates division', () => {
    expect(operate(30, 6, '÷')).toEqual('5');
  });
});
