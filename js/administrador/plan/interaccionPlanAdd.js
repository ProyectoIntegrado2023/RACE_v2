let contenedorEncargadosSeleccionados = document.querySelector('#encargados-seleccionados');
let contenedorListaEncargados = document.querySelector('#lista-encargados');
let cantidadEncargadosSeleccionados = document.querySelector('#cantidad-encargados-seleccionados');

document.addEventListener('click', e => {
    let Encargado = e.target.parentElement;
    let nombre = Encargado.children[0].textContent;
    let accion = e.target.value;
    let claseBtn;

    switch(accion){
        case 'añadir':
            claseBtn = 'btn-outline-danger';
            contenedorEncargadosSeleccionados.appendChild(moverEncargado(nombre,'quitar',claseBtn));
            Encargado.remove();
            break;
        case 'quitar':
            claseBtn = 'btn-outline-success';
            contenedorListaEncargados.appendChild(moverEncargado(nombre,'añadir',claseBtn));
            Encargado.remove();
            break;
    }
    
    cantidadEncargadosSeleccionados.innerHTML = `Encargados seleccionados (${contenedorEncargadosSeleccionados.children.length})`;
});

function moverEncargado(nombre, accion, claseBtn) {
    let div = document.createElement('div');
    div.className = 'd-flex gap-3 align-items-center';
    div.innerHTML = `
        <div>${nombre}</div>
        <input type="button" class="btn ${claseBtn}" value="${accion}">
    `;
    return div;
}

document.addEventListener("keyup", e=>{
    if (e.target.matches("#busqueda")){
        if (e.key ==="Escape")e.target.value = "";
        Array.from(contenedorListaEncargados.children).forEach(encargado => {
            if(encargado.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                encargado.classList.add("d-flex");
                encargado.classList.remove("d-none");
            }else{
                encargado.classList.add("d-none");
                encargado.classList.remove("d-flex");
            }
        })
    }
});