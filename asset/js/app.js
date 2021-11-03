console.log("probando")

class Paciente{
    constructor(nombre,edad,rut,diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;

    }
}


class Consultorio {
    constructor(nombre,paciente = [] ){
        this.nombre = nombre;
        this.paciente = paciente
    }
    set setPaciente(paciente){
        this.paciente.push(paciente)
    }
    get getPaciente(){
        return this.paciente
    }
}

Consultorio.prototype.buscarPaciente = function(nombre){
    return this.paciente.find((item) => item.nombre === nombre)
}

const pacienteUno = new Paciente("Matias", 45 , "12.698.259-5" , "Covid")
const pacienteDos = new Paciente("Juana" , 20 , "19.345.685-k" , "Higado graso")
const pacienteTres = new Paciente("Pedro" , 10 , "25.365.895-5" , "Colon irritable")
const pacienteCuatro = new Paciente("Maria" , 25 , "18.367.256-6" , "Asma" )
const pacienteCinco = new Paciente("Fernanda" , 50 , "10.658.579-5" , "Cancer")


const consultorioPrincipal = new Consultorio("Consultorio Maipu")

consultorioPrincipal.setPaciente = pacienteUno
consultorioPrincipal.setPaciente = pacienteDos
consultorioPrincipal.setPaciente = pacienteTres
consultorioPrincipal.setPaciente = pacienteCuatro
consultorioPrincipal.setPaciente = pacienteCinco

//arreglo de los pacientes
console.log(consultorioPrincipal.getPaciente)

//buscar
console.log(consultorioPrincipal.buscarPaciente("Matias"))