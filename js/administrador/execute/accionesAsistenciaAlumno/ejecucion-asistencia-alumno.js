const btnAccionesSemana = document.querySelector('.breadcrumb-item .btn-link');
let activateBtnAccionesSemana = false;
btnAccionesSemana.addEventListener('click', (e) => {
    let cardOpcionesSemana = e.target.nextElementSibling;
    if(activateBtnAccionesSemana){
        cardOpcionesSemana.classList.remove('d-block');
        cardOpcionesSemana.classList.add('d-none');
        activateBtnAccionesSemana = false;
    }else{
        cardOpcionesSemana.classList.remove('d-none');
        cardOpcionesSemana.classList.add('d-block');
        activateBtnAccionesSemana = true;
    }
});