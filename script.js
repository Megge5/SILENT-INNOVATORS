// INIT ANIMATION
AOS.init();

// DARK MODE

function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.querySelector(".btn");

  if(document.body.classList.contains("light")){
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
}

// MOBILE MENU
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// SMOOTH NAV SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".card3d").forEach(card => {

  const inner = card.querySelector(".card-inner");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    inner.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  });

});

function checkAnswer(answer){
  const result = document.getElementById("quiz-result");

  if(answer === "correct"){
    result.innerHTML = "✅ Correct! Ada Lovelace is widely regarded as the first computer programmer.";
  } else {
    result.innerHTML = "❌ Try again!";
  }
}

const innovators = {

  ada: {
    name: "Ada Lovelace",
    role: "First Computer Programmer",
    img: "images/ada.jpg",
    desc: "Designed the first published algorithm intended for a machine while studying Charles Babbage's Analytical Engine.",
    fact: "Fun Fact: She imagined computers creating music and graphics nearly a century before they existed."
  },

  boole: {
    name: "George Boole",
    role: "Founder of Boolean Logic",
    img: "images/boole.jpg",
    desc: "Developed Boolean Algebra, the mathematical system behind every digital circuit and computer program.",
    fact: "Fun Fact: Every search, calculation, and computer decision still relies on concepts from his work."
  },

  tesla: {
    name: "Nikola Tesla",
    role: "Electrical Engineering Pioneer",
    img: "images/tesla.jpg",
    desc: "Advanced alternating current (AC) power systems, enabling efficient long-distance electricity transmission.",
    fact: "Fun Fact: Tesla envisioned wireless global communication decades before smartphones and Wi-Fi."
  },

  lamarr: {
    name: "Hedy Lamarr",
    role: "Inventor & Wireless Communication Pioneer",
    img: "images/lamarr.jpg",
    desc: "Co-developed frequency-hopping technology that later influenced Bluetooth, GPS, and Wi-Fi systems.",
    fact: "Fun Fact: She was also a successful Hollywood actress while pursuing scientific inventions."
  },

  perlman: {
    name: "Radia Perlman",
    role: "Mother of the Internet",
    img: "images/perlman.jpg",
    desc: "Created the Spanning Tree Protocol, allowing computer networks to avoid looping failures and scale reliably.",
    fact: "Fun Fact: Her networking innovations quietly power much of today's internet infrastructure."
  },

  shannon: {
    name: "Claude Shannon",
    role: "Father of Information Theory",
    img: "images/shannon.jpg",
    desc: "Established the mathematical framework for digital communication, data compression, and error correction.",
    fact: "Fun Fact: He built mechanical gadgets for fun, including machines that could juggle and solve puzzles."
  },

  turing: {
    name: "Alan Turing",
    role: "Father of Theoretical Computer Science",
    img: "images/turing.jpg",
    desc: "Proposed the Universal Turing Machine concept and contributed to codebreaking efforts during World War II.",
    fact: "Fun Fact: The famous 'Turing Test' remains one of the most discussed benchmarks in artificial intelligence."
  },

  bose: {
    name: "Jagadish Chandra Bose",
    role: "Wireless Communication Pioneer",
    img: "images/bose.jpg",
    desc: "Demonstrated wireless signal transmission and conducted groundbreaking experiments in radio science.",
    fact: "Fun Fact: He often shared discoveries openly rather than patenting them, believing science should benefit everyone."
  }

};

function showInnovator(id){

  const person = innovators[id];

  document.getElementById("modalImg").src =
  person.img;

  document.getElementById("modalName").innerHTML =
  person.name;

  document.getElementById("modalRole").innerHTML =
  person.role;

  document.getElementById("modalDesc").innerHTML =
  person.desc;

  document.getElementById("modalFact").innerHTML =
  person.fact;

  document.getElementById("innovatorModal").style.display =
  "flex";
}

function closeModal(){

  document.getElementById("innovatorModal").style.display =
  "none";

}