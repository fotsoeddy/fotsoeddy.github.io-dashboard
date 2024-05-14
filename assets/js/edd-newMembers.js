document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector('.add-member-btn'); // New class for the button
    const tableBody = document.querySelector('tbody');

    addButton.addEventListener('click', function() {
        // Create a new row
        const newRow = document.createElement('tr');

        // Sample data for the new member (you can replace this with actual data)
        const fields = ['name', 'role', 'company', 'progress', 'status'];

        // Loop through the fields to create table cells with input fields for user input
        fields.forEach(field => {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('form-control');
            input.setAttribute('placeholder', `Enter ${field}`);
            cell.appendChild(input);
            newRow.appendChild(cell);
        });

        // Create a cell for the "OK" button
        const okButtonCell = document.createElement('td');
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.classList.add('btn', 'btn-primary');
        okButton.addEventListener('click', function() {
            // When the "OK" button is clicked, add the new member to the table
            const data = {};
            newRow.querySelectorAll('input').forEach(input => {
                const fieldName = input.getAttribute('placeholder').replace('Enter ', '');
                const value = input.value;
                data[fieldName] = value;
            });
            addMemberToTable(data);
            // Remove input fields and "OK" button
            newRow.remove();
        });
        okButtonCell.appendChild(okButton);
        newRow.appendChild(okButtonCell);

        // Append the new row to the table
        tableBody.appendChild(newRow);
    });

    // Function to add a new member to the table
    function addMemberToTable(data) {
        const newRow = document.createElement('tr');
        for (const key in data) {
            const cell = document.createElement('td');
            if (key === 'company') {
                // Keep company styling unchanged
                cell.innerHTML = `<h6>${data[key]}</h6><p>company type</p>`;
            } else if (key === 'progress') {
                const progressContent = `
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                            <p class="text-success">${data[key]}</p>
                            <p>${data[key]}</p>
                        </div>
                        <div class="progress progress-md">
                            <div class="progress-bar bg-success" role="progressbar" style="width: ${data[key]}" aria-valuenow="${data[key]}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>`;
                cell.innerHTML = progressContent;
            } else {
                cell.innerHTML = `<div><h6>${data[key]}</h6></div>`;
            }
            newRow.appendChild(cell);
        }
        tableBody.appendChild(newRow);
    }
});
