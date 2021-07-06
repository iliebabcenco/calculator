import calculate from '../logic/calculate';

describe('test calculation of aritmetic operations', () => {
  it('calculates sum', () => {
    expect(calculate({ total: '5', next: '6', operation: '+' }, '+').total).toEqual('11');
  });

  it('calculates sum with negative operants', () => {
    expect(calculate({ total: '5', next: '-6', operation: '+' }, '+').total).toEqual('-1');
  });

  it('calculates incorrect sum', () => {
    expect(calculate({ total: '55', next: '6', operation: '+' }, '+').total).not.toEqual('3');
  });

  it('calculates subtract', () => {
    expect(calculate({ total: '55', next: '6', operation: '-' }, '-').total).toEqual('49');
  });

  it('calculates incorrect subtract', () => {
    expect(calculate({ total: '55', next: '6', operation: '-' }, '-').total).not.toEqual('3');
  });

  it('calculates multiply', () => {
    expect(calculate({ total: '10', next: '6', operation: 'X' }, 'X').total).toEqual('60');
  });

  it('calculates incorrect multiply', () => {
    expect(calculate({ total: '55', next: '6', operation: 'X' }, 'X').total).not.toEqual('1');
  });

  it('calculates division', () => {
    expect(calculate({ total: '55', next: '5', operation: '÷' }, '÷').total).toEqual('11');
  });

  it('calculates incorrect multiply', () => {
    expect(calculate({ total: '55', next: '6', operation: '÷' }, '÷').total).not.toEqual('1');
  });

  it('calculates equals sign', () => {
    expect(calculate({ total: '55', next: '5', operation: '÷' }, '=').total).toEqual('11');
  });
});

describe('check other operations', () => {
  it("check 'AC' sign", () => {
    expect(calculate({ total: '55', next: '5', operation: '÷' }, 'AC').total).toBeFalsy();
    expect(calculate({ total: '55', next: '5', operation: '÷' }, 'AC').next).toBeFalsy();
    expect(calculate({ total: '55', next: '5', operation: '÷' }, 'AC').operation).toBeFalsy();
  });
  it("check '+/-' sign", () => {
    expect(calculate({ total: '55', next: null, operation: null }, '+/-').total).toEqual('-55');
    expect(calculate({ total: '55', next: '33', operation: '÷' }, '+/-').next).toEqual('-33');
  });
  it("check '.' sign", () => {
    expect(calculate({ total: '55', next: null, operation: null }, '.').total).toEqual('55.');
    expect(calculate({ total: '55', next: '-33', operation: '÷' }, '.').next).toEqual('-33.');
  });
  it("negative check '.' sign", () => {
    expect(calculate({ total: '55.', next: null, operation: null }, '.').total).not.toEqual('55..');
    expect(calculate({ total: '55', next: '-33.', operation: '÷' }, '.').next).not.toEqual('-33..');
  });
  it("check '%' sign", () => {
    expect(calculate({ total: '55', next: null, operation: null }, '%').total).toEqual(0.55);
    expect(calculate({ total: '55', next: '-33', operation: '÷' }, '%').next).toEqual(-0.33);
  });
});
