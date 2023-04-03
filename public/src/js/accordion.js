const accordion = document.querySelectorAll(".accordion");
const content = document.querySelectorAll(".content");


for ( i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    e.target.classList.toggle("active");
    console.log("active");
  })
}

document.querySelectorAll(".chevron").forEach(n => n.addEventListener("click", () => {
  accordion.classList.remove("active");
  content.classList.remove("active");
}))