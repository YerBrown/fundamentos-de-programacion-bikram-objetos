///Pair Programming
//Declaración
let Coche = {
    marca: 'Nissan',
    modelo: 'Qasqhai',
    matricula: '7369YHN'
}
let Casa = {
    codPostal: 67992,
    calle: 'Calle Txurdinaga',
    portal: 2,
    piso: 6
}
let FullStackDeveloper = {
    lenguajes: ['español', 'ingles', 'euskera'],
    proyectos: ['videojuego', 'pagina web']
}
let Perro = {
    nombre: 'Toby',
    raza: 'Doberman',
    color: 'Negro',
    edad: '7',
    ladrar() {
        console.log('Wow!');
    },
    popo() {
        return Math.random() * 3;
    }
}

//Lectura de propiedades
const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil['marca'];
const grupos = Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades
Portatil.modelo = 'P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
    nombreArchivo: 'Documento',
    copias: 5,
    numPaginas: 10
};

//Proyecto Individual
//Declaración
let Noticia = {
    titular: 'Fallece Mickey Mouse',
    cuerpo: 'Mickey Mouse, tras años de aventuras, se despidió del mundo en silencio, rodeado de sus amigos más cercanos. El castillo de Disney quedó en calma, y el parque se llenó de nostalgia. Los niños dejaron de escuchar su risa inconfundible, y las estrellas del cielo brillaron más esa noche en su honor. Aunque ya no esté, su legado vivirá por siempre en el corazón de quienes crecieron con él.'
}
let Persona = {
    nombre: 'Pepe',
    apellidos: 'Visbal Lopez',
    edad: 78
}
let Avion = {
    numPasajeros: 100,
    despegar() {
        console.log('despegando');
    },
    volar() {
        console.log('llegando al destino');
    },
    aterrizar() {
        console.log('aterrizando');
    }
}
let Paquete = {
    contenido: ['pijama', 'lampara', 'despertador', 'caja lego']
}
let Pais = {
    numHabitantes: 5000000,
    continente: 'Europa',
    gentilicio: 'Irlandes'
}

//Lectura de propiedades
const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil['especificaciones'];

//Moidificacion de propiedades
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = !Led.encendido;
Movil.temperatura = '20º';