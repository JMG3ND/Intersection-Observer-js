//Creamos un observador que es el encargado de vigilar que un elemento pasapor el
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entrie => {
        //Obtenemos el atributo id del elemento que se está obsevando
        const id = entrie.target.getAttribute("id");

        //Obtenemos el ancla que contiene el id como hiperbíncoulo de referencia
        const ancla = document.querySelector(`.nav-section a[href = "#${id}"]`);

        //Preguntamos si el elemento que se está observando está siendo intersectado
        if (entrie.isIntersecting) {
            //Si está intersectado le agregamos la clase activa al ancla que está relacionado con la sección que está intersectando
            ancla.classList.add("active")
        } else {
            //Si no está intersectado le removemos la clase activa al ancla.
            ancla.classList.remove("active");
        }
    })
}, {
    /*
    Configuramos el margen del observado en este caso
        top: -40%, raight: 0, bottom: -60%, left: 0
    Esta configuración provoca que el margen sea de 1 pixel y esté hubicado al 60% del alto de la pantalla.
    */
    rootMargin: "-40% 0px -60% 0px",
});

//Extraemos el objetivo a observar en este caso las secciones del artículo
let target = document.querySelectorAll(".section");

//Le añadimos al obsevador las secciones que extraimos para que los observe
target.forEach(element => observer.observe(element));