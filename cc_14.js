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

    // Task 3 Highlight High priority tickets
    if (priority === 'High') {
        customerCard.classList.add('high-priority')
    }
    
    // Creating remove button 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Resolve';
    // Creating function to resolve ticket when remove button is clicked
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        ticketContainer.removeChild(customerCard)
    });
   
    // Add button and ticket to customer card & ticket container 
    customerCard.appendChild(removeButton);
    ticketContainer.appendChild(customerCard);

    // Task 5: Inline Editing 

    // Creat edit button
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', "editButton")  
    editButton.addEventListener('dblclick', function() {
    
        // Pre-populate the input fields with the existing customer name, issue, and priority level.
        const nameInput = document.createElement('input');
        nameInput.value = customerName.textContent;
        
        const issueInput = document.createElement('input');
        issueInput.value = customerIssue.textContent;

        const priorityInput = document.createElement('input');
        priorityInput.value = customerPriority.textContent;
        
        // Add the input content to employee card
        customerCard.appendChild(nameInput);
        customerCard.appendChild(issueInput);
        customerCard.appendChild(priorityInput);
    
        // Remove static content from employee card
        customerCard.removeChild(customerName);
        customerCard.removeChild(customerIssue);
        customerCard.removeChild(customerPriority);
    
        // Create save button when edit button is double clicked
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.setAttribute("class", "saveButton")
        
        // Save input when save button is clicked 
        saveButton.addEventListener('click', function() {
            // Update text content to input values
            customerName.textContent = nameInput.value;
            customerIssue.textContent = issueInput.value;
            customerPriority.textContent = priorityInput.value;
            
            // Add static conent to customer card
            customerCard.appendChild(customerName);
            customerCard.appendChild(customerIssue);
            customerCard.appendChild(customerPriority);
    
            // Remove input content from customer card
            customerCard.removeChild(nameInput);
            customerCard.removeChild(issueInput);
            customerCard.removeChild(priorityInput);
    
            // Remove save button after saving so it doesn't add everytime edit button is clicked
            saveButton.remove();
        })
        
        // Add save button when edit button is double clicked
        customerCard.appendChild(saveButton)
    })
    // Add edit button to customer card
    customerCard.appendChild(editButton)
}

// Test Case
createSupportTicket('Pikachu', 'Cannot Edit Password', 'High');

// Task 3: Converting NodeLists to Arrays for Bulk Updates
// Select all high priority tickets 
const highPriorityTickets = document.querySelectorAll('.high-priority');
const ticketsArray = Array.from(highPriorityTickets);
// Highlight all high priority tickets with white 
ticketsArray.forEach(ticket => {
    ticket.style.backgroundColor = 'white';;
});

// Task 4:  Implementing Ticket Resolution with Event Bubbling
// When customer card is clicked it will log a message 
ticketContainer.addEventListener('click', function()
{console.log("Ticket Clicked")});