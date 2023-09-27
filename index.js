//declaracion

const Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    matricula: "1234 ABC"
  };

  const Casa = {
    codPostal: '41960',
    calle: 'Zurbaran 52',
    portal: '9',
    piso: '65'
  };

  const FullStackDeveloper = {
    lenguajes: ['javaScript'],
    proyectos: ['FullStack']
  };

  const Perro = {
    nombre: 'naya',
    raza: 'teckel',
    color: 'marron',
    edad: '10 meses',
    ladrar: function () {
        console.log('wuau!');
    },
    popo: function () {
        return console.log(Math.random(2) * 3);
    }


  };

// Lectura de propiedades



let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil['marca'];



let grupos = Concierto.grupos;


let RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades

Portatil.modelo = 'P345';
Concierto.cartelera = "Guns N' Roses";
Concierto.fecha = 'new Date';
Impresora.imprimiendo = {'nombreArchivo':marcos, 'copias':4, 'numPaginas': 6 };




//objetos


let Noticia = {
    titular,
    cuerpo
};

let Persona = {
    nombre,
    apellidos,
    edad
};

let Avion = {
    numPasajeros,
    despegar: function(){
        console.log('despegando');
    },
    volar: function(){
        console.log('llegando al destino');
    },
    aterrizar: function(){
        console.log('aterrizando');
    }
};

let Paquete = {
    contenido: []
};

let Pais = {
    numHabitantes,
    continente,
    gentilicio
};

//lectura


const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil.especificaciones;

//modificacion


Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";

Movil.temperatura = '20º';