const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 8;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
  { imgSrc: "./assets/images/avocado.jpg", name: "avocado" },
  { imgSrc: "./assets/images/asparagus.jpg", name: "asparagus" },
  { imgSrc: "./assets/images/brocoli.jpg", name: "brocoli" },
  { imgSrc: "./assets/images/chili.jpg", name: "chili" },
  { imgSrc: "./assets/images/eggplant.jpg", name: "eggplant" },
  { imgSrc: "./assets/images/ginger.jpg", name: "ginger" },
  { imgSrc: "./assets/images/spinach.jpg", name: "spinach" },
  { imgSrc: "./assets/images/tomato.jpg", name: "tomato" },
  { imgSrc: "./assets/images/asparagus.jpg", name: "asparagus" },
  { imgSrc: "./assets/images/avocado.jpg", name: "avocado" },
  { imgSrc: "./assets/images/brocoli.jpg", name: "brocoli" },
  { imgSrc: "./assets/images/chili.jpg", name: "chili" },
  { imgSrc: "./assets/images/eggplant.jpg", name: "eggplant" },
  { imgSrc: "./assets/images/ginger.jpg", name: "ginger" },
  { imgSrc: "./assets/images/spinach.jpg", name: "spinach" },
  { imgSrc: "./assets/images/tomato.jpg", name: "tomato" },
];

// Randomize
const randomize = () => {
  const cardData = getData();
  console.log(cardData);
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Card Generator Function
const cardGenerator = () => {
  const cardData = randomize();
  // Generator the HTML
  const cards = document.querySelectorAll(".card");
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // Attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// Check card
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  console.log(flippedCards);

  // Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try again!");
      }
    }
  }
  //   Run a check to see if we won the game
  if (toggleCard.length === 16) {
    restart("You won!");
  }
};
//   Restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //   Randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = 'all'
    }, 1000);
  });
  playerLives = 8;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};
// Play sound the cards
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387")
const clickeCard = document.querySelectorAll('.card')
 clickeCard.forEach(img => {
  img.addEventListener('click', () => {
    audio.play()
  })
 })

cardGenerator();
