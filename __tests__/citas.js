import Citas from '../js/classes/Citas.js'

describe('Probando la clase de Citas',()=>{
    const cita = new Citas();
    const id = Date.now();
    test('Agregar una nueva cita',()=>{
        const citaObj = {
            id,
            mascota: 'Toribio',
            propietario: 'Lili',
            telefono: '546546546546',
            fecha: '22-04-2022',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }
       
        cita.agregarCita(citaObj);
        // Prueba
        expect(cita).toMatchSnapshot();
    });
    test('Actualizar cita',()=>{
        const citaActualizada = {
            id,
            mascota: 'Toribio actualizado',
            propietario: 'Lili',
            telefono: '546546546546',
            fecha: '22-04-2022',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }
        cita.editarCita(citaActualizada);
        expect(cita).toMatchSnapshot();
    });
    test('Eliminar cita',()=>{
        cita.eliminarCita(id);
        expect(cita).toMatchSnapshot();
    });

});