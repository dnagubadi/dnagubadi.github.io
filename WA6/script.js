const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    function toggleMenu() {
        const isShown = navMenu.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', isShown);
    }

    navToggle.addEventListener('click', toggleMenu);

    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
} else {
    console.log("navToggle or navMenu not found!");
}


const regButton = document.getElementById("regButton");
const resetButton = document.getElementById("resetButton");
const contactButton = document.getElementById("contactButton");
const receipt = document.getElementById("receipt");
const errorMessage = document.getElementById("errorMessage");

if (regButton) {
    regButton.addEventListener("click", showReceipt);
}
if(resetButton){
    resetButton.addEventListener("click", hideReceipt);
}
if(contactButton){
    contactButton.addEventListener("click", contactSubmit);
}




function showReceipt() {
    const name = document.getElementById("fullName").value.trim();
    const age = document.getElementById("age").value.trim();
    const team = document.getElementById("teamName").value.trim();
    const email = document.getElementById("email").value.trim();
    const division = document.getElementById("division").value.trim();

    if (!name || !age || !team || !email || !division) {
      errorMessage.textContent = "Error: Please fill out all fields before submitting.";
      receipt.style.display = "none";
      return;
    }

    errorMessage.textContent = "";

    document.getElementById("rName").textContent = name;
    document.getElementById("rAge").textContent = age;
    document.getElementById("rTeam").textContent = team;
    document.getElementById("rEmail").textContent = email;
    document.getElementById("rDivision").textContent = division;

    receipt.style.display = "block";
}

function hideReceipt(){
    receipt.style.display = "none";

    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("teamName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("division").value = "";

    errorMessage.textContent = "";
}
function contactSubmit(){
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if (!name || !email || !message) {
      contactError.textContent = "Error: Please fill out all fields before sending.";
      return;
    }

    contactError.textContent = "";
    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    document.getElementById("cName").value = "";
    document.getElementById("cEmail").value = "";
    document.getElementById("cMessage").value = "";
}

