
/* ==================================
   TANISHA'S BIRTHDAY WEBSITE
   Complete JavaScript
================================== */

/* 1. SECRET PIN */

const correctPin = "3010";
let enteredPin = "";

const pinMessage = document.getElementById("pinMessage");
const pinBoxes = [
  document.getElementById("pin0"),
  document.getElementById("pin1"),
  document.getElementById("pin2"),
  document.getElementById("pin3")
];

function updatePinDisplay() {
  pinBoxes.forEach((box, index) => {
    box.textContent = enteredPin[index] ? "●" : "";
  });
}

function resetPin() {
  enteredPin = "";
  updatePinDisplay();
}

function pressKey(number) {
  if (enteredPin.length >= 4) return;

  enteredPin += number;
  updatePinDisplay();

  if (enteredPin.length === 4) {
    if (enteredPin === correctPin) {
      pinMessage.textContent = "Yay! Surprise unlocked! 💗";

      setTimeout(() => {
        showScreen("welcomeScreen");
        resetPin();
      }, 650);
    } else {
      pinMessage.textContent =
        "Oops! Wrong code. Try again, birthday girl! 🎀";

      pinBoxes.forEach(box => {
        box.classList.add("shake");
      });

      setTimeout(() => {
        pinBoxes.forEach(box => {
          box.classList.remove("shake");
        });

        resetPin();
        pinMessage.textContent = "Hint: Your special day 💕";
      }, 900);
    }
  }
}

/* Only on-screen keypad is used */

document.querySelectorAll("[data-number]").forEach(button => {
  button.addEventListener("click", () => {
    pressKey(button.dataset.number);
  });
});

document.getElementById("deletePin").addEventListener("click", () => {
  enteredPin = enteredPin.slice(0, -1);
  updatePinDisplay();
});

document.getElementById("clearPin").addEventListener("click", () => {
  resetPin();
  pinMessage.textContent = "Hint: Your special day 💕";
});


/* 2. SCREEN NAVIGATION */

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  if (nextScreen) {
    nextScreen.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});


/* 3. FUNNY YES / NO SECTION */

const noMessages = [
  "Nice try! You cannot escape your own birthday! 😂",
  "NO? Sorry, that button is not working today.",
  "The surprise is waiting. Stop running! 😭",
  "Are you sure? Your Didi worked very hard!",
  "Wrong answer, birthday girl! Try YES! 💗",
  "I knew you would try that! 😂",
  "Your NO button needs a holiday today! 🎀",
  "Just press YES already! 🤭"
];

let noCount = 0;

const noButton = document.getElementById("noButton");
const noMessage = document.getElementById("noMessage");
const yesButton = document.getElementById("yesButton");

function noClicked() {
  noMessage.textContent =
    noMessages[noCount % noMessages.length];

  noCount++;

  const moveX = Math.random() * 150 - 75;
  const moveY = Math.random() * 65 - 32;

  noButton.style.transform =
    `translate(${moveX}px, ${moveY}px)`;

  yesButton.style.transform = "scale(1.08)";
}

noButton.addEventListener("click", noClicked);

/* Also move the NO button when the pointer approaches it */

noButton.addEventListener("mouseenter", () => {
  if (noCount > 0) {
    noButton.style.transform =
      `translate(${Math.random() * 100 - 50}px,
                 ${Math.random() * 50 - 25}px)`;
  }
});

yesButton.addEventListener("click", () => {
  showScreen("celebrationScreen");
  confetti();
});


/* 4. CONFETTI EFFECT */

function confetti(amount = 100) {
  const container =
    document.getElementById("confettiContainer");

  const colors = [
    "#f5a9c8",
    "#d8b8f1",
    "#ffe09b",
    "#f5c9dc",
    "#c5e8d4",
    "#ffffff"
  ];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay =
      Math.random() * 2 + "s";

    piece.style.animationDuration =
      2.5 + Math.random() * 2 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5500);
  }
}



/* 5. PHOTO SCRAPBOOK */

const photoData = [
  {
    title: "Childhood Memory 1",
    caption: "Little Tanisha, big dreams. 🌸",
    image: "images/childhood1.jpg"
  },
  {
    title: "Childhood Memory 2",
    caption: "Growing up, one memory at a time.",
    image: "images/childhood2.jpg"
  },
  {
    title: "With Mummy",
    caption: "Mummy's little girl. ❤️",
    image: "images/mummy.jpg"
  },
  {
    title: "With Papa",
    caption: "Papa's precious daughter.",
    image: "images/papa.jpg"
  },
  {
    title: "With Bhai",
    caption: "Sibling madness and endless memories. 😂",
    image: "images/bhai.jpg"
  },
  {
    title: "With Didi",
    caption: "Sisters forever, partners in everything.",
    image: "images/didi.jpg"
  },
  {
    title: "Our Whole Family",
    caption: "My favourite people, my whole world.",
    image: "images/family.jpg"
  },
  {
    title: "Three Musketeers",
    caption: "Three siblings, one beautiful bond.",
    image: "images/siblings.jpg"
  }
];

const gallery = document.getElementById("gallery");

photoData.forEach(photo => {
  const card = document.createElement("article");

  card.className = "photo-card";

  card.innerHTML = `
    <div class="photo-frame">
      <img src="${photo.image}" alt="${photo.title}">
    </div>
    <h3>${photo.title}</h3>
    <small>${photo.caption}</small>
  `;

  gallery.appendChild(card);
});


/* 6. FAMILY WISHES */

const familyMembers = [
  {
    name: "Mummy",
    icon: "🌷",
    message:
      "My dear Tanisha, happy birthday! May you always stay happy, healthy and blessed. Keep smiling, keep learning and keep moving towards your dreams. You will always be my little girl. Lots of love!"
  },
  {
    name: "Papa",
    icon: "🌟",
    message:
      "Happy 18th birthday, beta! I wish you a bright future filled with happiness and success. Believe in yourself, work hard and always stay kind. May all your dreams come true."
  },
  {
    name: "Bhai",
    icon: "🎮",
    message:
      "Happy birthday, Tanisha! Keep smiling and keep annoying everyone as usual. 😂 May you get lots of happiness, success and of course, a bigger birthday gift next year!"
  },
  {
    name: "Didi",
    icon: "🎀",
    message:
      "Happy birthday to my favourite little troublemaker! I may tease you a lot, but I will always support you, cheer for you and stand beside you. Love you, little one!"
  }
];

const familyContainer =
  document.getElementById("familyMessages");

familyMembers.forEach((person, index) => {
  const card = document.createElement("article");

  card.className = "message-card";

  card.innerHTML = `
    <div class="message-icon">${person.icon}</div>
    <h3>${person.name} ❤️</h3>

    <button class="secondary-btn reveal-button">
      Open your wish 💌
    </button>

    <div class="message-text hidden">
      ${person.message}
    </div>
  `;

  const button = card.querySelector(".reveal-button");
  const message = card.querySelector(".message-text");

  button.addEventListener("click", () => {
    message.classList.toggle("hidden");

    button.textContent = message.classList.contains("hidden")
      ? "Open your wish 💌"
      : "Close message";
  });

  familyContainer.appendChild(card);
});


/* 7. SECRET GIFT AND ENVELOPES */

const secretMessages = [
  {
    title: "When you miss us",
    icon: "🏡",
    message:
      "Remember that no matter where we are, you will always have a home full of people who love you. Our memories are always with you. ❤️"
  },
  {
    title: "When you're sad",
    icon: "🌈",
    message:
      "It's okay to have difficult days. You don't have to be happy all the time. Take a breath, be kind to yourself and remember that you are loved."
  },
  {
    title: "When you need motivation",
    icon: "✨",
    message:
      "Never underestimate yourself. You are capable of learning, growing and doing wonderful things. Take one step at a time. Your Didi believes in you!"
  },
  {
    title: "Just because",
    icon: "😂",
    message:
      "Official notice: You are permanently registered as my little sister. No returns, no exchanges, no cancellation. Lifetime membership! Love you!"
  }
];

const envelopeContainer =
  document.getElementById("envelopes");

secretMessages.forEach(item => {
  const card = document.createElement("article");

  card.className = "message-card";

  card.innerHTML = `
    <div class="message-icon">${item.icon}</div>
    <h3>${item.title}</h3>

    <button class="secondary-btn reveal-button">
      Open envelope 💌
    </button>

    <div class="message-text hidden">
      ${item.message}
    </div>
  `;

  const button = card.querySelector(".reveal-button");
  const message = card.querySelector(".message-text");

  button.addEventListener("click", () => {
    message.classList.toggle("hidden");

    button.textContent = message.classList.contains("hidden")
      ? "Open envelope 💌"
      : "Close envelope";
  });

  envelopeContainer.appendChild(card);
});

/* Gift box opens all four envelopes */

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {
  envelopeContainer.classList.remove("hidden");

  document.getElementById("giftHint").textContent =
    "Your little surprises are waiting for you! 💗";

  giftButton.textContent = "🎀";
  giftButton.disabled = true;

  giftButton.style.animation = "none";

  confetti(45);
});


/* 8. CAKE CANDLE INTERACTION */

const candles = document.querySelectorAll(".candle");
const cakeMessage = document.getElementById("cakeMessage");
const cakeNext = document.getElementById("cakeNext");

let candlesLeft = candles.length;

candles.forEach((candle, index) => {
  candle.addEventListener("click", () => {
    if (candle.classList.contains("blown")) return;

    candle.classList.add("blown");
    candlesLeft--;

    if (candlesLeft > 0) {
      cakeMessage.textContent =
        `Beautiful! ${candlesLeft} candle(s) left. ✨`;
    } else {
      cakeMessage.textContent =
        "Your wish is now sent to the universe! Happy 18th Birthday, Tanisha! ❤️🎂";

      cakeNext.classList.remove("hidden");

      confetti(120);
    }
  });
});

cakeNext.addEventListener("click", () => {
  showScreen("letterScreen");
});


/* 9. REPLAY WEBSITE */

document.getElementById("replayButton").addEventListener("click", () => {

  // Reset PIN
  resetPin();

  pinMessage.textContent = "Hint: Your special day 💕";

  // Reset YES / NO section
  noCount = 0;

  noMessage.textContent =
    "Think carefully before answering! 👀";

  noButton.style.transform = "none";
  yesButton.style.transform = "none";

  // Reset gift
  giftButton.disabled = false;
  giftButton.textContent = "🎁";
  giftButton.style.animation = "";

  envelopeContainer.classList.add("hidden");
  document.getElementById("giftHint").textContent =
    "Tap the gift box to discover your envelopes.";

  // Close all messages
  document.querySelectorAll(".message-text").forEach(message => {
    message.classList.add("hidden");
  });

  document.querySelectorAll(".reveal-button").forEach(button => {
    button.textContent = button.closest("#envelopes")
      ? "Open envelope 💌"
      : "Open your wish 💌";
  });

  // Reset cake
  candlesLeft = candles.length;

  candles.forEach(candle => {
    candle.classList.remove("blown");

    if (!candle.querySelector(".flame")) {
      const flame = document.createElement("span");
      flame.className = "flame";
      candle.appendChild(flame);
    }
  });

  cakeMessage.textContent =
    "Tap each candle to blow it out. 🕯️";

  cakeNext.classList.add("hidden");

  // Start again without entering PIN
  showScreen("welcomeScreen");
});
