// Hero Section: Animated typing text
function animateText(elementId, text, speed = 40) {
  const textElement = document.getElementById(elementId);
  textElement.innerHTML = ""; // reset content
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      if (text.substring(i, i + 6) === "<span ") {
        const spanEnd = text.indexOf("</span>", i) + 7;
        textElement.innerHTML += text.substring(i, spanEnd);
        i = spanEnd;
      } else {
        textElement.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

document.addEventListener("DOMContentLoaded", () => {
  animateText(
    "animated-text",
    "I am dedicated to developing modern, efficient, and scalable software solutions that drive innovation and deliver measurable impact.",
    100
  );
});

const text1 = "I am a final-year Software Engineering student passionate about Software Development and technology innovation. With a strong foundation in logical thinking and problem-solving, I see every challenge as an opportunity to grow and create impactful solutions.";
const text2 = "I enjoy the full software development process—from brainstorming ideas to implementation—and thrive in collaborative environments. Known for being detail-oriented, communicative, and adaptable, I continuously strive to enhance both my technical and soft skills.";

const el1 = document.getElementById("typing-text");
const el2 = document.getElementById("typing-text-2");

let i = 0, j = 0;

// --- Default tampil penuh saat pertama kali load ---
el1.innerText = text1;
el2.innerText = text2;

// --- Function reset untuk typing ulang ---
function resetText() {
  i = 0; j = 0;
  el1.innerHTML = "";
  el2.innerHTML = "";
}

function typeFirst() {
  if (i < text1.length) {
    el1.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeFirst, 30);
  } else {
    setTimeout(typeSecond, 300);
  }
}

function typeSecond() {
  if (j < text2.length) {
    el2.innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeSecond, 30);
  }
}

// --- Event klik About di navbar → jalankan animasi typing ---
document.querySelector('a[href="#about"]').addEventListener("click", function() {
  resetText();
  setTimeout(typeFirst, 300);
});


// When About link clicked, re-run typing effect
document.querySelector('a[href="#about"]').addEventListener("click", function () {
  resetText();
  setTimeout(typeFirst, 300);
});

// Portfolio Section: Show/hide projects
function showProjects(category) {
  const card = document.getElementById("card-" + category);
  card.querySelector(".card-content").classList.add("hidden");
  card.querySelector(".project-list").classList.remove("hidden");
}

function backToCategory(category) {
  const card = document.getElementById("card-" + category);
  card.querySelector(".project-list").classList.add("hidden");
  card.querySelector(".card-content").classList.remove("hidden");
}



  // Skills Section: Animate progress bars
  window.addEventListener("DOMContentLoaded", () => {
    const skills = [
      { id: "HTML", target: 100, speed: 100 },
      { id: "CSS", target: 100, speed: 100 },
      { id: "Python", target: 100, speed: 100 },
      { id: "JavaScript", target: 85, speed: 100 },
      { id: "CSharp", target: 85, speed: 100 },
      { id: "GitHub", target: 100, speed: 100 },
      { id: "SonarQube", target: 90, speed: 100 },
      { id: "Katalon", target: 70, speed: 100 },
      { id: "Docker", target: 50, speed: 100 },
      { id: "Cypress", target: 50, speed: 100 }
    ];

    skills.forEach(skill => {
      const bar = document.getElementById(`${skill.id}-progress`);
      const text = document.getElementById(`${skill.id}-percent`);

      let value = 0;
      const interval = setInterval(() => {
        if (value >= skill.target) {
          clearInterval(interval);
        } else {
          value++;
          bar.style.width = value + "%";
          text.textContent = value + "%";
        }
      }, skill.speed);
    });
  });

