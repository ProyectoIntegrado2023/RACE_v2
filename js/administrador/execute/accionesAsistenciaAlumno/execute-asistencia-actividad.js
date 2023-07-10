let contenedorMateriales = document.querySelector('#contenedor-materiales');

document.addEventListener('click', e =>{
    switch(e.target.textContent){
        case 'Eliminar':
            e.target.parentElement.remove();
            break;
        case 'Añadir':
            contenedorMateriales.appendChild(agregarMaterial());
            break;
    }
});

function agregarMaterial(){
    let div = document.createElement('div');
    div.className = 'd-flex gap-2';
    div.innerHTML = `
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Materiales">
        <div class="btn btn-outline-danger">Eliminar</div>
    `;
    return div;
}