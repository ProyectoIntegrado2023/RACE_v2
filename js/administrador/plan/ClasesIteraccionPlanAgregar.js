export class interaccionPlanAgregar {
    constructor(urlIconoAgregarEncargado,urlIconoQuitarEncargado,
        contenedorEncargados,contenedorEncargadosSeleccionado){
        this.contenedorEncargados = contenedorEncargados;
        this.contenedorEncargadosSeleccionado = contenedorEncargadosSeleccionado;
        this.urlIconoAgregarEncargado = urlIconoAgregarEncargado;
        this.urlIconoQuitarEncargado = urlIconoQuitarEncargado;

        this.encargadoActivado = false;
        this.grupoActivado = false;
        this.actividadActivado = false;
    }
    identificarControl(accion,etiqueta){
        switch(accion){
            case 'encargado':
                this.controlarEncargado(etiqueta);
                break;
            case 'grupo':
                this.controlarGrupo(etiqueta);
                break;
            case 'horas':
                this.controlarActividad(etiqueta);
                break;
        }
    }
    controlarEncargado(referencia){
        if(this.encargadoActivado){
            this.actualizarEncargado(referencia,'d-none','d-blick');
            this.encargadoActivado = false;
        }else{
            this.actualizarEncargado(referencia,'d-block','d-none');
            this.encargadoActivado = true;
        }
    }
    controlarGrupo(referencia){
        if(this.grupoActivado){
            this.actualizarEncargado(referencia,'d-none','d-blick');
            this.grupoActivado = false;
        }else{
            this.actualizarEncargado(referencia,'d-block','d-none');
            this.grupoActivado = true;
        }
    }
    controlarActividad(referencia){
        if(this.actividadActivado){
            this.actualizarEncargado(referencia,'d-none','d-blick');
            this.actividadActivado = false;
        }else{
            this.actualizarEncargado(referencia,'d-block','d-none');
            this.actividadActivado = true;
        }
    }
    actualizarEncargado(referencia,agregarClase,quitarClase){
        referencia.nextElementSibling.classList.add(agregarClase);
        referencia.nextElementSibling.classList.remove(quitarClase);
    }
    // accion de asignar encargados
    identificarAccionEncargado(accion,etiqueta){
        switch(accion){
            case 'quitar':
                this.quitar(etiqueta);
                break;
            case 'agregar':
                this.agregar(etiqueta);
                break;
        }
    }
    agregar(referencia){
        let img = referencia;
        img.src = this.urlIconoQuitarEncargado;
        img.alt = 'quitar encargado del equipo';

        let orderList = referencia.parentElement.parentElement;
        this.contenedorEncargados.removeChild(orderList);
        this.contenedorEncargadosSeleccionado.appendChild(orderList);
    }
    quitar(referencia){
        let img = referencia;
        img.src = this.urlIconoAgregarEncargado;
        img.alt = 'agregar encargado al equipo';

        let orderList = referencia.parentElement.parentElement;
        this.contenedorEncargadosSeleccionado.removeChild(orderList);
        this.contenedorEncargados.appendChild(orderList);
    }
}

export default interaccionPlanAgregar;