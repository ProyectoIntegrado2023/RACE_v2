// TODO: el btn guardar esta con la etiqueta div
import { estudianteMejorado as stu } from './personalizarDatosAlumnos.js';
import { interaccion as interacciones } from './interaccion.js';

const welcome = document.getElementById('bienvenida');
const hoursStudent = document.getElementById('cant-horas');
const detailStudent = document.getElementById('detalle-studiante');
const btn = document.getElementById('buscar');
const inputCodigo = document.getElementById('input-codigo');
const inputDni = document.getElementById('input-dni');

let students = [...stu];
let interaccion = new interacciones( inputCodigo,inputDni,welcome,hoursStudent,detailStudent );

btn.addEventListener('click', () => {

    let student = students.find( student => student.codigo == inputCodigo.value && student.dni == inputDni.value);
    
    if(student != undefined){
        interaccion.mostrarDetalles(student);
        interaccion.limpiarInput();
    } else {
        interaccion.limpiarResultado();
        alert('No se encontro al estudiante');
    }
})