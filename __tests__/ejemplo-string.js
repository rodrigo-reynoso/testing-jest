const { TestWatcher } = require("jest");

const password = '123456';

describe('Válida que el password no este vacio y tenga una extensión de 6 caracteres',()=>{
    test('Que el password tenga 6 caracteres',()=>{
        expect(password).toHaveLength(6);
    });
    test('Que no este vacio',()=>{
        expect(password).not.toHaveLength(0);
    });

})