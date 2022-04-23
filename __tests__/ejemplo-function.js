function suma(a,b){
    return a + b;
};

function resta(a,b){
    return a - b;
};

export function sumaModulo(a,b){
    return a+b;
}

describe('Testing a las funciones',()=>{
    test('Suma de 20 y 40',()=>{
        expect(suma(20,40)).toBe(60);
    });
    test('Resta 10 y 5',()=>{
        expect(resta(10,5)).toBe(5);
    });
    test('Suma de 10 y 10, no sea 10',()=>{
        expect(suma(10,10)).not.toBe(10);
    });
    test('Resta de 10 y 4, no sea 5',()=>{
        expect(resta(10,4)).not.toBe(5);
    });
});