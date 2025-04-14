// Change text content dynamically
document.getElementById('dynamic-text').textContent = 
    'Superman is a beacon of hope, justice, and heroism in the DC universe.';

// Highlight Superman's strength with style changes
document.getElementById('style-button').addEventListener('click', () => {
    document.body.style.backgroundColor = 'goldenrod';
    document.body.style.color = 'darkred';
    document.getElementById('dynamic-text').style.fontWeight = 'bold';
});

// Array of fun facts about Superman
const supermanFacts = [
    'Did you know? Superman’s iconic “S” symbol stands for “hope” on Krypton.',
    'Superman was created by Jerry Siegel and Joe Shuster in 1938.',
    'Superman’s first appearance was in Action Comics #1.',
    'Superman gets his powers from Earth’s yellow sun.',
    'Clark Kent works as a journalist for the Daily Planet.'
];

let factIndex = 0;

// Add a fun fact about Superman
document.getElementById('add-element-button').addEventListener('click', () => {
    if (factIndex < supermanFacts.length) {
        const newFact = document.createElement('p');
        newFact.textContent = supermanFacts[factIndex];
        newFact.style.padding = '10px';
        newFact.style.backgroundColor = 'lightgray';
        document.getElementById('container').appendChild(newFact);
        factIndex++;
    } else {
        alert('No more facts to add!');
    }
});

// Remove a fun fact about Superman
document.getElementById('remove-element-button').addEventListener('click', () => {
    const container = document.getElementById('container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
        if (factIndex > 0) factIndex--; // Decrement factIndex when a fact is removed
    } else {
        alert('No more facts to remove!');
    }
});