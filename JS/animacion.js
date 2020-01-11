//Aqui hacemos la instancia de Muuri y aparte le pasamos 
//el div que queremos instanciar, en este caso la clase se llama
//grid
/* Despues le pasamos un objeto con todas opciones que queremos que 
pase*/

//Vamos a trabajar con la opcion layour
const grid = new Muuri('.grid', {
    layout: {
        //Cuando esta en true, automaticamente redondea con 
        //ayuda de Math.round(), pero si esta en false se podra trabajar
        //con dimensiones exactas
        rounding: false
      }
});

/* Se realizo una funcion de javascript la cual
esta llamando a la ventana, en donde hara un evento listener
para que cuando cargue la pagina, se muestren las imagenes completas
TAMBIEN se utilizara muuri para poder hacer un diseño responsivo
*/
window.addEventListener('load', () => {
    /* Codigo para que las imagenes sean responsivas*/
    grid.refreshItems().layout();
    /* Se esta obteniendo el grid desde html, para despues, cuando el evento
    se complete, llame a la clase "imagenes-cargadas"*/
    document.getElementById('grid').classList.add('imagenes-cargadas');

    /* Aqui le estamos diciendo que accedas al id categorias y me traigas todos los enlaces*/
    const enlaces = document.querySelectorAll('#categorias a');
    /* Iterar enlaces*/
    enlaces.forEach( (elemento) => {
        /* Debug para ver lo que esta devolviendo el ciclo javascript
        console.log(elemento)
        */
       /* Estamos agregando un evento a los elemento que nos trae el ciclo, para que cuando
       el usuario de click a cualquier categoria, se ponga de manera activa, o sea, 
       que se ponga en negritas, en otras palabras que le quite el activo a el default
       que es el de todos y se lo pase a otra categoria*/
       elemento.addEventListener('click', (evento) => {
           /* aqui estamos previniendo el comportamiento default,
           en otras palabras estamos haciendo que se restringa el comportamiento por default
           que tiene el navegador, es decir que al momento de dar click a las categorias, 
           este mismo no agregue un # al enlance, porque regularmente queda como 
           "localhost/portafolio# (o sea, sea agrego el gatito)*/
           evento.preventDefault();
           /* Debug para ver el funcionamiento del evento target, o sea, nos trae el enlance
           al cual le damos click
            console.log(evento.target);
            */

            /* Se realiza un ciclo para encontar el que tenga el activo y para quitarselo,
            todo esto para no tener 2 categorias en activo*/
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));


           /* Con la ayuda de target, le estamos agregando la clase activo al enlance que demos
           click*/
           evento.target.classList.add('activo');
       });
    });
});