


const cliente ={
    nombre: 'Rodrigo',
    balance:500
};

describe('Testing a cliente',()=>{
    test('El cliente es premiun',()=>{
        expect(cliente.balance).toBeGreaterThan(400)
    });
    test('Es Rodrigo',()=>{
        expect(cliente.nombre).toBe('Rodrigo');
    });
    test('No es otro cliente',()=>{
        expect(cliente.nombre).not.toBe('Lucas');
    });
    test('No tiene 400',()=>{
        expect(cliente.balance).not.toBe(400);
    });
});