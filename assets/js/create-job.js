document.addEventListener("DOMContentLoaded", function () {
  const showJobFormBtn = document.getElementById("showJobFormBtn");
  const jobFormContainer = document.getElementById("jobFormContainer");
  const jobDetailsContainer = document.getElementById("jobDetailsContainer");
  const jobFormStep1 = document.querySelector("#jobFormContainer #jobForm");
  const jobFormStep2 = document.querySelector("#jobFormContainer #jobFormStep2");
  const jobsListContainer = document.getElementById("jobsListContainer");

  showJobFormBtn.addEventListener("click", function () {
    showJobFormBtn.style.display = "none";
    jobFormContainer.style.display = "block";
    jobFormStep1.style.display = "block";
    jobFormStep2.style.display = "none";
    jobDetailsContainer.style.display = "none";
  });

  const nextStepBtn = document.querySelector("#jobFormContainer .next-step-btn");
  nextStepBtn.addEventListener("click", function () {
    if (validateStep1()) {
      jobFormStep1.style.display = "none";
      jobFormStep2.style.display = "block";
    }
  });

  const previousStepBtn = document.querySelector("#jobFormContainer .previous-step-btn");
  previousStepBtn.addEventListener("click", function () {
    jobFormStep2.style.display = "none";
    jobFormStep1.style.display = "block";
  });

  const createJobBtn = document.querySelector("#jobFormContainer .create-job-btn");
  createJobBtn.addEventListener("click", function () {
    if (validateStep2()) {
      const recruiterName = document.getElementById("recruiterName").value;
      const company = document.getElementById("company").value;
      const jobTitle = document.getElementById("jobTitle").value;
      const jobDescription = document.getElementById("jobDescription").value;

      jobDetailsContainer.innerHTML += `
        <h5>Job Details:</h5>
        <p><strong>Recruiter's Name:</strong> ${recruiterName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>
      `;

      const cancelButton = document.createElement("button");
      cancelButton.classList.add("btn", "btn-danger");
      cancelButton.textContent = "Cancel";
      cancelButton.addEventListener("click", cancelJobCreation);
      createJobBtn.parentNode.replaceChild(cancelButton, createJobBtn);

      document.getElementById("recruiterName").value = "";
      document.getElementById("company").value = "";
      document.getElementById("jobTitle").value = "";
      document.getElementById("jobDescription").value = "";

      jobFormContainer.style.display = "none";
      jobDetailsContainer.style.display = "block";
      showJobFormBtn.style.display = "block";

      jobFormStep1.style.display = "block";
      jobFormStep2.style.display = "none";
    }
  });

  function validateStep1() {
    const recruiterName = document.getElementById("recruiterName").value;
    const company = document.getElementById("company").value;
    if (!recruiterName || !company) {
      alert("Please fill in all required fields in Step 1.");
      return false;
    }
    return true;
  }

  function validateStep2() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    if (!jobTitle || !jobDescription) {
      alert("Please fill in all required fields in Step 2.");
      return false;
    }
    return true;
  }

  function cancelJobCreation() {
    document.getElementById("recruiterName").value = "";
    document.getElementById("company").value = "";
    document.getElementById("jobTitle").value = "";
    document.getElementById("jobDescription").value = "";

    jobFormContainer.style.display = "none";
    showJobFormBtn.style.display = "block";
  }

  showJobFormBtn.addEventListener("click", function () {
    showJobFormBtn.style.display = "none";
    jobFormContainer.style.display = "block";
    jobFormContainer.scrollIntoView({ behavior: "smooth" });
  });
});
