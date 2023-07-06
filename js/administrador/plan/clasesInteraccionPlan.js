export class interaccionListarProyecto {
    constructor(editor){
        this.urlIconoVisibleEquipo = '/Recursos/iconos/png/visible.png';
        this.urlIconoNoVisibleEquipo = '/Recursos/iconos/png/no-visible.png';
        this.contenedorEditor = editor;
    }
    identificarTipoIteraccion(accion, etiqueta){
        switch(accion){
            case 'editar' :
                break;
            case 'eliminar' :
                this.eliminar(etiqueta);
                break;
            case 'descargar' :
                break;
            case 'mirar' :
                this.mirar(etiqueta);
                break;
            case 'no mirar':
                this.noMirar(etiqueta);
                break;
        }
    }
    actualizarEditor(){
        this.contenedorEditor.classList.remove('d-block');
        this.contenedorEditor.classList.add('d-none');
    }
    eliminar(referencia){
        let fila = referencia.parentElement.parentElement;
        if(confirm('¿estas seguro que quieres eliminar el projecto?')){
            fila.remove();
        }
    }
    mirar(referencia){
        this.actualizarReferenciaIMG(referencia,this.urlIconoVisibleEquipo,'visible equipo');
        this.actualizarReferenciaCARD(referencia,'d-block','d-none');
    }
    noMirar(referencia){
        this.actualizarReferenciaIMG(referencia,this.urlIconoNoVisibleEquipo,'no visible equipo');
        this.actualizarReferenciaCARD(referencia,'d-none','d-block');
    }
    actualizarReferenciaIMG(referencia,url,alt){
        let etiquetaIMG = referencia;
        etiquetaIMG.src = url;
        etiquetaIMG.alt = alt;
    }
    actualizarReferenciaCARD(referencia, agregarClase, quitarClase){
        let etiquetaDIV = referencia.nextElementSibling;
        etiquetaDIV.classList.add(agregarClase);
        etiquetaDIV.classList.remove(quitarClase);
    }
}

export default { interaccionListarProyecto };