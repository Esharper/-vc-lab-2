document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const ul = document.querySelector("ul");
    let isUppercase = false;

    button1.addEventListener("click", function() {
        h1.textContent = isUppercase ? h1.textContent.toLowerCase() : h1.textContent.toUpperCase();
        isUppercase = !isUppercase;
    });

    button2.addEventListener("click", function() {
        const terms = ["Git", "GitHub", "Commit", "Branch"];
        terms.forEach(term => {
            const li = document.createElement("li");
            li.textContent = term;
            ul.appendChild(li);
        });
    });
});
