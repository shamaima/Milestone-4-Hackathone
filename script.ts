// scripts.ts

// Function to handle the editing of resume sections
function handleEditing() {
    // Select all elements that are editable
    const editableElements = document.querySelectorAll('.editable-content');
    
    // Add an event listener for each editable element
    editableElements.forEach(element => {
        element.addEventListener('blur', () => {
            // When focus is lost, log the updated content
            console.log(`Content updated: ${element.innerHTML}`);
        });
    });
}

// Initialize the script once the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    handleEditing(); // Set up the editing functionality
});
