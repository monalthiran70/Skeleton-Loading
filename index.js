const cardContainer = document.getElementById("card-container");

const data = [
  {
    title: "Sample Card",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg"
  }
];

function createSkeletonCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const skeletonImage = document.createElement("div");
  skeletonImage.classList.add("skeleton", "skeleton-image");
  card.appendChild(skeletonImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const skeletonTitle = document.createElement("div");
  skeletonTitle.classList.add("skeleton", "skeleton-title");
  cardContent.appendChild(skeletonTitle);

  const skeletonDescription = document.createElement("div");
  skeletonDescription.classList.add("skeleton", "skeleton-description");
  cardContent.appendChild(skeletonDescription);

  card.appendChild(cardContent);

  return card;
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = data.imageUrl;
  card.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const title = document.createElement("h2");
  title.textContent = data.title;
  cardContent.appendChild(title);

  const description = document.createElement("p");
  description.textContent = data.description;
  cardContent.appendChild(description);

  card.appendChild(cardContent);

  return card;
}

function populateCards() {
  data.forEach(item => {
    const skeletonCard = createSkeletonCard();
    cardContainer.appendChild(skeletonCard);

    setTimeout(() => {
      const card = createCard(item);
      cardContainer.replaceChild(card, skeletonCard);
    }, 1500); // Simulating loading delay
  });
}

populateCards();
