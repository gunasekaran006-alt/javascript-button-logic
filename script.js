
        // JavaScript Logic
        const likeBtn = document.getElementById('likeBtn');
        const countDisplay = document.getElementById('count');
        const heartIcon = document.getElementById('heart');

        let count = 0;
        let isLiked = false;

        likeBtn.addEventListener('click', () => {
            if (!isLiked) {
                // If not liked: increment and change style
                count++;
                heartIcon.innerText = '❤️'; // Red heart
                likeBtn.classList.add('active');
                isLiked = true;
            } else {
                // If already liked: decrement and reset style
                count--;
                heartIcon.innerText = '🤍'; // White heart
                likeBtn.classList.remove('active');
                isLiked = false;
            }

            // Update the text on screen
            countDisplay.innerText = count;
        });
  