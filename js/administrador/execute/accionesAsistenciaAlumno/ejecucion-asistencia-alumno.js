const btnEditar = document.querySelector('#editar-asistencia');
const btnGuardar = document.querySelector('#guardar-asistencia');
let activateEditarAsistencia = false;


btnEditar.addEventListener('click', () => {
    activarEdicionAsistencia();
});
btnGuardar.addEventListener('click', () => {
    if(activateEditarAsistencia){
        activarEdicionAsistencia();
    }
});

function activarEdicionAsistencia(){
    if(activateEditarAsistencia){
        btnEditar.className = 'btn btn-outline-primary';
        btnEditar.innerHTML = 'Editar';
        activateEditarAsistencia = false;
    }else{ 
        btnEditar.className = 'btn btn-outline-danger';
        btnEditar.innerHTML = 'Cancelar';
        activateEditarAsistencia = true;
    }
}

let imgAsistencia = document.querySelectorAll('img[alt="asistio"], img[alt="falto"]');

imgAsistencia.forEach(img => {
    img.addEventListener('click', e => {
        if(activateEditarAsistencia)
        switch(e.target.alt){
            case 'asistio':
                e.target.nextElementSibling.classList.remove('d-none');
                e.target.classList.add('d-none');
                break;
            case 'falto':
                e.target.previousElementSibling.classList.remove('d-none');
                e.target.classList.add('d-none');
                break;
        }
    });
})