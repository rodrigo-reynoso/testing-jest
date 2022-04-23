const cliente ={
    nombre:'Ignacio modificado 2',
    tipo:'premium',
    balance:500
};

describe('Testing al objeto con snapshot, y actualizando cuando se modifica el objeto',()=>{
    test('El cliente es Ignacio',()=>{
        expect(cliente).toMatchSnapshot();
    });
});