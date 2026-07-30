const numbers = [4, 8, 12, 16, 20];

const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const average = sum / numbers.length;

console.log("რიცხვების ჯამი:", sum);
console.log("საშუალო არითმეტიკული:", average);

const movie = {
  movieName: "The Matrix",
  genre: "Action",
  streamingPlatforms: ["HBO Max", "Netflix", "Hulu"]
};

console.log(`${movie.movieName}, which is a ${movie.genre} movie, is available on ${movie.streamingPlatforms[0]}.`);

const books = [
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    yearPublished: 1953
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    yearPublished: 1932
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
  }
];

console.log(books);