export class interaccion {
    constructor(inputCodigo,inputDni,welcome,hoursStudent,detailStudent) {
        this.inputCodigo = inputCodigo;
        this.inputDni = inputDni;
        this.welcome = welcome;
        this.hoursStudent = hoursStudent;
        this.detailStudent = detailStudent;
    }
    mostrarDetalles(student) {
        let nFila = 1;
        let fila = '';
        let horas = 0;
        this.welcome.innerHTML = `Bienvenido ${student.nombre}`;
        student.projectos.map(e => {
            fila += this.componenteTrTable( nFila,e.nombreProjecto,e.semestre,e.horas);
            horas += e.horas;
            nFila++;
        })
        this.hoursStudent.innerHTML = `Tu cantidad de hora es: ${horas}`;
        this.detailStudent.innerHTML = fila;
    }
    
    componenteTrTable( n,nombreProjecto,semestre,horas ){
        return `
        <tr>
          <th class="text-center" scope="row">${n}</th>
          <td class="text-center">${nombreProjecto}</td>
          <td class="text-center">${semestre}</td>
          <td class="text-center">${horas}</td>
        </tr>
        `
    }
    
    limpiarInput () {
        this.inputCodigo.value = '';
        this.inputDni.value = '';
    }
    
    limpiarResultado () {
        this.welcome.innerHTML = 'Bienvenido -';
        this.hoursStudent.innerHTML = 'Tu cantidad de hora es: -';
        this.detailStudent.innerHTML = '';
    }
}
export default interaccion;