let cvBtn = document.getElementById("cvBtn");
cvBtn.addEventListener("click", function () {
  alert("cv has download sucessfully");
});

let subBtn = document.getElementById("submit");
subBtn.addEventListener("click", function () {
  alert("From submit sucessfully");
});

gsap.from("#nav", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from(".main", {
  y: -20,
  delay: 0.5,
  duration: 1,
  opacity: 0,
});

gsap.from(".aboutus ", {
  y: -20,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".aboutus ",
    scroller: "body",
    start: "top 30%",
  },
});

gsap.from(".servises ", {
  y: -20,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".servises  ",
    scroller: "body",
    start: "top 30%",
  },
});

gsap.from(".connect", {
  y: -20,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".connect ",
    scroller: "body",
    start: "top 30%",
  },
});


