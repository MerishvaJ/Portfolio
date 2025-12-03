// ========== TYPEWRITER EFFECT ==========
const titleText = "AI & ML Engineer | Computer Vision | Deep Learning Enthusiast";
let index = 0;

function typeEffect() {
  if (index < titleText.length) {
    document.querySelector(".lead.text-secondary").innerHTML = titleText.substring(0, index + 1);
    index++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();


// ========== EMAIL FUNCTION ==========
function sendEmail() {
  window.location.href = "mailto:merishvajd@gmail.com";
}

// ========== DARK/LIGHT MODE ==========
const themeBtn = document.createElement("button");
themeBtn.className = "theme-toggle";
themeBtn.innerHTML = "🌙";
document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeBtn.innerHTML = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeBtn.innerHTML = "☀️";
}

// ========== PROJECT DATA ==========
const projectsData = [
  { 
    id:"cow", 
    title: "AI-powered Cow & Buffalo Detection System", 
    skills: ["Python", "YOLOv8", "Flask", "Computer Vision"], 
    link:"#projects" 
  },
  { 
    id:"ecom", 
    title: "E-Commerce Website", 
    skills: ["PHP", "HTML", "CSS", "JavaScript", "XAMPP"], 
    link:"#projects" 
  },
  { 
    id:"blockchain", 
    title: "Blockchain Transaction Dashboard", 
    skills: ["Flask", "Streamlit", "XAMPP"], 
    link:"#projects" 
  },
  { 
    id:"fish", 
    title: "Fish Weight Prediction", 
    skills: ["scikit-learn", "Streamlit", "Machine Learning"], 
    link:"#projects" 
  },
  { 
    id:"text", 
    title: "Text Category Classifier", 
    skills: ["TensorFlow", "RNN", "Deep Learning"], 
    link:"#projects" 
  }
];

const projectContainer = document.querySelectorAll(".card-body");

// ========== SKILL BUTTON INTERACTION + AUTO REDIRECT ==========
document.querySelectorAll(".skill-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const skill = btn.innerText.toLowerCase();

    // Find matching project
    const matchedProject = projectsData.find(project =>
      project.skills.some(s => s.toLowerCase() === skill)
    );

    if (matchedProject) {
      // Scroll to project
      const card = [...document.querySelectorAll(".card-body")]
        .find(c => c.innerText.toLowerCase().includes(matchedProject.title.toLowerCase()));

      if (card) {
        card.scrollIntoView({ behavior: "smooth" });
        card.classList.add("highlight");

        setTimeout(() => card.classList.remove("highlight"), 2500);
      }

      // Optional Redirect / open detail popup
      setTimeout(() => {
        alert(`📌 This skill belongs to:\n\n${matchedProject.title}`);
      }, 800);
    }
  });
});

// ========== SHOW ALL PROJECTS BUTTON ==========
document.getElementById("showAll").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
// ===== AI PRELOADER =====
const aiText = "Welcome, User. Initializing AI Environment...";
let aiIndex = 0;
const aiElement = document.getElementById("aiText");
const aiCursor = document.getElementById("aiCursor");

function typeAIText() {
  if(aiIndex < aiText.length){
    aiElement.innerHTML += aiText.charAt(aiIndex);
    aiIndex++;
    setTimeout(typeAIText, 50); // typing speed
  } else {
    setTimeout(() => {
      document.getElementById("aiPreloader").style.display = "none";
    }, 1000); // preloader disappears after 1s
  }
}

// Start AI Preloader typing effect
window.addEventListener("load", () => {
  aiElement.innerHTML = ""; // reset
  typeAIText();
});
// ===== AI Search Post-Initialization =====
const sections = ["Home", "About", "Projects", "Skills", "Contact"];
const aiSearchDiv = document.getElementById("aiSearch");
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

// Show search after AI typing finishes
function showSearch() {
  aiPreloader.style.display = "none";  // hide preloader
  aiSearchDiv.style.display = "block"; // show search
  searchInput.focus();
}

// Listen to typing in search input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = "";

  const filtered = sections.filter(sec => sec.toLowerCase().startsWith(query));
  filtered.forEach(sec => {
    const li = document.createElement("li");
    li.textContent = sec;
    li.addEventListener("click", () => redirectToSection(sec));
    suggestionsList.appendChild(li);
  });
});

// Handle Enter key press
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = searchInput.value;
    if (sections.includes(value)) {
      redirectToSection(value);
    }
  }
});

// Redirect function
function redirectToSection(section) {
  const id = section.toLowerCase();
  aiSearchDiv.style.display = "none"; // hide search
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
