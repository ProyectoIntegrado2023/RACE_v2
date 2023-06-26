import { students } from '../data/alumno.js';

export let estudianteMejorado = [];
students.map( student => {    
    estudianteMejorado.push(
        {
            codigo: student.code,
            dni: student.dni,
            nombre: student.nameStudent,
            projectos: personalizarProjecto(student.projects),
        }
    );
});

function personalizarProjecto(projects){
    let projecto = [];
    projects.map(project => {
        projecto.push(
            {
                id: project.id,
                nombreProjecto: project.nameProject,
                semestre: project.Semester,
                horas: project.hours
            }
        )
    });
    return projecto;
}

export default estudianteMejorado;