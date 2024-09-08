// scripts.ts
// Function to handle the editing of resume sections
function handleEditing() {
    // Select all elements that are editable
    var editableElements = document.querySelectorAll('.editable-content');
    // Add an event listener for each editable element
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function () {
            // When focus is lost, log the updated content
            console.log("Content updated: ".concat(element.innerHTML));
        });
    });
}
// Initialize the script once the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    handleEditing(); // Set up the editing functionality
});
