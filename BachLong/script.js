const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
//Dùng thẻ LockBoard để không để cho bật được liên 3,4 ảnh lúc như vậy là sai logic
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    // Dười này là if chứ chưa có giá trị gì nhé
    if (this === firstCard) return;
    //Lam nay de disable 2 the khi lat, tranh lat duoc lien 4 ô

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard()
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
