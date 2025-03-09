// Task 2 Adding Employee Ca
const ticketContainer = document.getElementById("ticketContainer");
// Function to create customer card
function createSupportTicket(name, issue, priority) {
    const customerCard = document.createElement('div');
    customerCard.setAttribute("class", "customerCard");
    // Element for name
    const customerName = document.createElement('h3');
    customerName.textContent = name;
    customerCard.appendChild(customerName);
    
    // Element for issue
    const customerIssue = document.createElement('p');
    customerIssue.textContent = issue;
    customerCard.appendChild(customerIssue);
    
    // Element for priority
    const customerPriority = document.createElement('label');
    customerPriority.textContent = priority;
    customerCard.appendChild(customerPriority);
    
    // Remove button 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
    ticketContainer.removeChild(customerCard)
    });
    // Add button and ticket 
    customerCard.appendChild(removeButton);
    ticketContainer.appendChild(customerCard)
}


createSupportTicket('Pikachu', 'Cannot Edit Password', 'High');

// Task 3: Converting NodeLists to Arrays for Bulk Updates