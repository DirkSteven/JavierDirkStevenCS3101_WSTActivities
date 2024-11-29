document.addEventListener('DOMContentLoaded', () => {
    // Category Filter Functionality
    const filterButtons = document.querySelectorAll('.category-filter button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get the filter category
            const filter = button.dataset.filter;

            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Spotify Player Interaction
    const spotifyPlayers = document.querySelectorAll('.spotify-player iframe');
    
    spotifyPlayers.forEach(player => {
        player.addEventListener('mouseover', () => {
            // Optional: Add a subtle animation or effect on hover
            player.style.transform = 'scale(1.05)';
        });

        player.addEventListener('mouseout', () => {
            player.style.transform = 'scale(1)';
        });
    });

    // Dynamic Quote Rotation (Optional Feature)
    const quotes = [
        {
            text: "I'd rather be hated for who I am, than loved for who I am not.",
            author: "Kurt Cobain"
        },
        {
            text: "The biggest adventure you can ever take is to live the life of your dreams.",
            author: "Oprah Winfrey"
        },
        {
            text: "Your time is limited, so don't waste it living someone else's life.",
            author: "Steve Jobs"
        }
    ];

    const quoteBox = document.querySelector('.quote-box');
    let currentQuoteIndex = 0;

    function rotateQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const quote = quotes[currentQuoteIndex];
        
        quoteBox.innerHTML = `
            <p>"${quote.text}"</p>
            <p>— ${quote.author}</p>
        `;
    }

    // Rotate quote every 10 seconds
    setInterval(rotateQuote, 10000);
});