import {sumaModulo} from './ejemplo-function.js';

describe('Probando exportar una función con babel con transpilador',()=>{
    test('Suma 20 y 10 da 30, función exportada de finciones',()=>{
        expect(sumaModulo(20,10)).toBe(30);
    });
});