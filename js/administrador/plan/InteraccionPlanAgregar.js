import { interaccionPlanAgregar } from './ClasesIteraccionPlanAgregar.js';

const btnsControl = document.querySelectorAll('.form-personal-row-3 div input');
const contenedorControl = document.querySelectorAll('.form-personal-row-3 div .card');
const iconsControlEncargado = document.querySelectorAll('.form-personal-row-3 div .card .card-body img');
const contenedorEncargadosSeleccionado = document.querySelector('#contenedor-encargados-selecionados');
const contenedorEncargados = document.querySelector('#contenedor-encargados');

const urlIconoAgregarEncargado = '/Recursos/iconos/png/more.png';
const urlIconoQuitarEncargado = '/Recursos/iconos/png/less.png';

const btnAccion = {
    'Encargado' : 'encargado',
    'Asignar grupo' : 'grupo',
    'Horas designadas' : 'horas'
};
const iconosAccionEncargados = {
    'quitar encargado del equipo' : 'quitar',  
    'agregar encargado al equipo' : 'agregar'
}

const interaccion = new interaccionPlanAgregar(urlIconoAgregarEncargado,urlIconoQuitarEncargado,
                            contenedorEncargados,contenedorEncargadosSeleccionado);

iconsControlEncargado.forEach(iconControl => {
    iconControl.addEventListener('click', () =>{
        interaccion.identificarAccionEncargado(iconosAccionEncargados[iconControl.alt],iconControl);
    })
})

btnsControl.forEach(btnControl => {
    btnControl.addEventListener('click', () => {
        interaccion.identificarControl(btnAccion[btnControl.value], btnControl)
    })
})