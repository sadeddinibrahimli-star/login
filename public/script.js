function showForm(formId) {
    document.querySelectorAll(".card").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}