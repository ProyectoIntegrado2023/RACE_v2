// TODO: revisar que las cards de los equipos cuente con autocerrado

import { interaccionListarProyecto } from './clasesInteraccionPlan.js';

const etiquetasBtnCard = document.querySelectorAll('.card div .btn');
const contenedorEditor = document.querySelector('#editor');
const btnsCerrarEditor = document.querySelectorAll('#editor div form div button, #editor div button')

const accionIconosFila = {
    'visible equipo' : 'no mirar',
    'no visible equipo' : 'mirar',
    'editar proyecto' : 'editar',
    'eliminar proyecto' : 'eliminar',
    'descargar documento proyecto' : 'descargar',
};
const interaccion = new interaccionListarProyecto(contenedorEditor);

document.addEventListener('click', e => {
    interaccion.identificarTipoIteraccion(accionIconosFila[e.target.alt], e.target);
});

etiquetasBtnCard.forEach( etiquetabtnCard => {
    etiquetabtnCard.addEventListener('click', () => {
        let etiquetaIMG = etiquetabtnCard.parentElement.parentElement.previousElementSibling
        interaccion.identificarTipoIteraccion(accionIconosFila[etiquetaIMG.alt], etiquetaIMG);
    })
});

btnsCerrarEditor.forEach(btncerrar => {
    btncerrar.addEventListener('click', () => {
        interaccion.actualizarEditor();
    })
})