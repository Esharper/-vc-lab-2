document.addEventListener("DOMContentLoaded", function() {
    const employees = [
        { name: "John Doe", email: "john@example.com", position: "Manager" },
        { name: "Jane Smith", email: "jane@example.com", position: "Developer" },
        { name: "Tom Brown", email: "tom@example.com", position: "Designer" }
    ];

    const offices = ["New York", "Los Angeles", "Chicago"];

    const employeesContainer = document.getElementById("employeesContainer");
    const officeList = document.getElementById("officeList");
    const showOfficesButton = document.getElementById("showOffices");

    function displayEmployees() {
        employees.forEach(employee => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Email: ${employee.email}<br>Position: ${employee.position}</p>
                </div>
            `;
            employeesContainer.appendChild(card);
        });
    }

    function displayOffices() {
        offices.forEach(office => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = office;
            officeList.appendChild(listItem);
        });
    }

    showOfficesButton.addEventListener("click", function() {
        officeList.innerHTML = ""; // Clear previous list items
        displayOffices();
    });

    displayEmployees();
});
