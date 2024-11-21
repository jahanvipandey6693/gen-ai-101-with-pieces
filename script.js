const facts = [
    "At 20, I have already explored several mountain trails, embracing the thrill of adventure and the beauty of nature.",
    "My passion for mountains has led me to study the diverse ecosystems and wildlife that flourish in these majestic landscapes.",
    "Capturing the stunning vistas from mountain peaks is one of my favorite hobbies, allowing me to share the beauty of nature with others.",
    "Hiking and climbing mountains are my preferred activities for staying fit and maintaining a healthy lifestyle.",
    "I am fascinated by the cultural significance of mountains worldwide, from the spiritual importance of Mount Fuji to the historical tales of the Andes."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
