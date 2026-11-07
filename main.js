
const book = document.getElementById("book");

const doors = document.getElementById("doors");

const openBtn = document.getElementById("openBtn");

const backBtn = document.getElementById("backBtn");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

const pageNumber = document.getElementById("pageNumber");


/* CAMBIAR DE PÁGINA */

function showPage(page) {

  const details = page === 2;

  book.classList.toggle(
    "show-details",
    details
  );

  pageNumber.textContent = details
    ? "2 / 2"
    : "1 / 2";

  prev.disabled = !details;

  next.disabled = details;

}


/* ABRIR LAS PUERTAS */

function openInvitation() {

  doors.classList.add("open");

  window.setTimeout(() => {

    doors.classList.add("hidden");

    showPage(2);

  }, 1150);

}


/* BOTÓN ABRIR */

openBtn.addEventListener(
  "click",
  openInvitation
);


/* REGRESAR A LA PORTADA */

backBtn.addEventListener(
  "click",
  () => showPage(1)
);


/* SIGUIENTE PÁGINA */

next.addEventListener(
  "click",
  () => {

    if (!doors.classList.contains("hidden")) {

      openInvitation();

    } else {

      showPage(2);

    }

  }
);


/* PÁGINA ANTERIOR */

prev.addEventListener(
  "click",
  () => showPage(1)
);


/* DESLIZAMIENTO HORIZONTAL EN CELULAR */

let startX = 0;

book.addEventListener(
  "touchstart",
  event => {

    startX = event.changedTouches[0].clientX;

  },
  { passive: true }
);


book.addEventListener(
  "touchend",
  event => {

    const delta =
      event.changedTouches[0].clientX - startX;

    if (Math.abs(delta) > 55) {

      if (
        delta < 0 &&
        !book.classList.contains("show-details")
      ) {

        openInvitation();

      }

      if (delta > 0) {

        showPage(1);

      }

    }

  },
  { passive: true }
);


/* INICIAR EN LA PORTADA */

showPage(1);
