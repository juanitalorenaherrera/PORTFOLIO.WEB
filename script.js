// Desplazamiento suave
document.querySelectorAll('.navbar a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
});

// Eliminar la animación de murciélagos
// Esta sección ya no es necesaria, así que la eliminamos.

// Generar íconos flotantes en movimiento (código relacionado con "programador junior")
document.addEventListener('DOMContentLoaded', () => {
	const fondo = document.querySelector('.fondo-movimiento');
	if (fondo) {
		setInterval(() => {
			const codigo = document.createElement('img');
			codigo.src = 'codigo.svg'; // Asegúrate de que este archivo exista en tu proyecto
			codigo.classList.add('codigo');
			codigo.style.left = `${Math.random() * 100}vw`;
			codigo.style.top = `${Math.random() * 100}vh`;
			fondo.appendChild(codigo);

			setTimeout(() => {
				codigo.remove();
			}, 10000); // Eliminar después de 10 segundos
		}, 2000); // Generar un nuevo ícono cada 2 segundos
	}
});

// Menú interactivo con emojis
const menuToggle = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const menuElement = document.querySelector(".menu-icons");

if (menuToggle && menuClose && menuElement) {
	menuToggle.addEventListener("click", () => {
		if (!menuElement.dataset.emojisAdded) {
			for (let i = 0; i < 5; i++) {
				const emoji = document.createElement("span");
				emoji.textContent = "🖥️"; // Puedes cambiar el emoji a uno relacionado con la programación
				menuElement.appendChild(emoji);
			}
			menuElement.dataset.emojisAdded = "true";
		}
	});

	menuClose.addEventListener("click", () => {
		menuElement.innerHTML = ""; // Limpia los emojis
		delete menuElement.dataset.emojisAdded;
	});
}
const toggleButton = document.getElementById('toggle-modo');
const body = document.body;

toggleButton.addEventListener('click', () => {
    const temaActual = body.getAttribute('data-tema');
    const nuevoTema = temaActual === 'claro' ? 'oscuro' : 'claro';
    body.setAttribute('data-tema', nuevoTema);
});

document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll(".seccion");

    const activarSeccion = (entrada, observador) => {
        const seccion = entrada.target;
        if (entrada.isIntersecting) {
            seccion.classList.add("activa");
            observador.unobserve(seccion); // Deja de observar para evitar repetición
        }
    };

    const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach((entrada) => activarSeccion(entrada, observador));
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Activa al 20% de visibilidad
    });

    secciones.forEach((seccion) => {
        observer.observe(seccion);
    });
});
const toggleMode = document.querySelector('#toggle-mode');
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
