const modalForm = document.querySelector("#modal__form");
const btnAddTask = document.querySelector("#add-task");
const btnCloseModal = document.querySelector("#close-modal");
const formTask = document.querySelector("#form-task");

// console.log(form);

// Open Modal //

btnAddTask.addEventListener("click", () => {
  modalForm.showModal();
  modalForm.querySelector("input").focus();
});

// Close Mosal Event //

btnCloseModal.addEventListener("click", closeModal);

//Close Modal //

function closeModal() {
  //console.log(modalForm);
  modalForm.style.animation = "fade .3s forwards";

  modalForm.addEventListener(
    "animationend",
    function (e) {
      modalForm.style.animation = "";
      modalForm.close();
    },
    {
      once: true,
    }
  );
}

// Add Tasks//

formTask.addEventListener("submit", function (event) {
  event.preventDefault();
});
