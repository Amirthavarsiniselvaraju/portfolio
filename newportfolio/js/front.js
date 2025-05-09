const roles = [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Enthusiast",
    "Business Analyst"
];

let roleIndex = 0;

function changeRole() {
    document.getElementById("role-text").textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

// Change role every 2 seconds
setInterval(changeRole, 2000);
changeRole(); // Initial call
