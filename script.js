function toggleSection(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

let allExpanded = false;

function toggleAllSections() {
    const sections = document.querySelectorAll('.card-content');
    sections.forEach(section => {
        section.style.display = allExpanded ? 'none' : 'block';
    });
    allExpanded = !allExpanded;
    document.getElementById('toggle-all').textContent = allExpanded ? 'Collapse All' : 'Expand All';
}