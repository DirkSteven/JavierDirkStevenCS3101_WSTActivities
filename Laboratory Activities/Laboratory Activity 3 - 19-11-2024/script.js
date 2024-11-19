document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();

    // Count words
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    // Update the word count display
    document.getElementById('wordcount').querySelector('.count-number').textContent = wordCount;

    // Update the sentence count display
    document.getElementById('sentenceCount').querySelector('.count-number').textContent = sentenceCount;

    // Optional: Animate count updates
    animateCounter(document.querySelector('#wordcount .count-number'), wordCount);
    animateCounter(document.querySelector('#sentenceCount .count-number'), sentenceCount);
});

function animateCounter(element, target) {
    const current = parseInt(element.textContent, 10);
    const increment = target > current ? 1 : -1;

    if (current !== target) {
        const interval = setInterval(() => {
            const updatedValue = parseInt(element.textContent, 10) + increment;
            element.textContent = updatedValue;

            if (updatedValue === target) {
                clearInterval(interval);
            }
        }, 30);
    }
}
