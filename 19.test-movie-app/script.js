// script.js
const movieGrid = document.querySelector(".movie-grid");

const movies = [
  {
    title: "Movie 1",
    image: "https://picsum.photos/200/300",
    description: "This is a movie description",
  },
  {
    title: "Movie 2",
    image: "https://picsum.photos/200/301",
    description: "This is another movie description",
  },
  {
    title: "Movie 3",
    image: "https://picsum.photos/200/302",
    description: "This is yet another movie description",
  },

  {
    title: "Movie 4",
    image: "https://picsum.photos/200/303",
    description: "This is yet another movie description",
  },
  {
    title: "Movie 5",
    image: "https://picsum.photos/200/304",
    description: "This is yet another movie description",
  },
];

movies.forEach((movie) => {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");
  movieCard.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p>${movie.description}</p>
  `;
  movieGrid.appendChild(movieCard);
});
