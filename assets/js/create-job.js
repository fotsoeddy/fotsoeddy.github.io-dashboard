document.addEventListener("DOMContentLoaded", function() {
    const createJobBtn = document.getElementById("createJobBtn");
    const jobFormContainer = document.getElementById("jobFormContainer");
    const jobForm = document.getElementById("jobForm");
    const jobList = document.getElementById("jobList");

    createJobBtn.addEventListener("click", function() {
      jobFormContainer.style.display = "block";
    });

    jobForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const jobTitle = document.getElementById("jobTitle").value;
      const jobDescription = document.getElementById("jobDescription").value;

      const jobItem = document.createElement("div");
      jobItem.classList.add("mb-2");
      jobItem.innerHTML = `
        <div class="card card-rounded">
          <div class="card-body">
            <h6 class="card-title">${jobTitle}</h6>
            <p class="card-text">${jobDescription}</p>
          </div>
        </div>
      `;
      jobList.appendChild(jobItem);
      jobForm.reset();
      jobFormContainer.style.display = "none";
    });
  });