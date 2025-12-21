var typed = new Typed(".text", {
  strings: [
    "Web Developer",
    "MERN Stack Developer",
    "Frontend Developer"
  ],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  loop: true
});
/* Sticky navbar on scroll */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

/* Active link highlight */
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
(function(){
  emailjs.init(i3QwMiHa_j_MZimMD);
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    service_ge8waoq,
    template_1iqlhwv,
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("Failed to send message!");
    console.log(error);
  });
});
