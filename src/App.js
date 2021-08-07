import React from "react";

import Navb from "./components/nav.js";

import List from "./components/list.js";
import Add from "./components/add.js";
import app from "./App.css";
import { useState } from "react";
import { Rating } from "semantic-ui-react";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const [Movies, setMovies] = useState([
    {
      id: 0,
      name: "Cruella",
      type: "disney",
      img: "https://m.media-amazon.com/images/I/71LD6AGowjL._AC_SL1100_.jpg",
      describtion:
        "Cruella follows her life story and her attempts to get revenge on Baroness von Hellman.",
      rate: 3
    },
    {
      id: 2,
      name: "Maleficent",
      type: "disney",
      img: "https://wdwnt.com/wp-content/uploads/2019/08/Maleficent.jpg",
      describtion:
        "Maleficent is a powerful fairy living in the Moors, a magical forest realm bordering a human kingdom.",
      rate: 4
    },
    {
      id: 3,
      name: "Mulan",
      type: "disney",
      img: "https://m.media-amazon.com/images/I/71c+SZbaVVL._AC_SL1293_.jpg",
      describtion:
        "Mulan is a girl, the only child of her honored family. When the Huns invade China.",
      rate: 5
    },
    {
      id: 4,
      name: "Your name",
      type: "romance",
      img:
        "https://img.moviepostershop.com/your-name-movie-poster-2016-1020777403.jpg",
      describtion:
        "A high school boy in Tokyo and a high school girl who suddenly and inexplicably begin to swap bodies.",
      rate: 2
    },
    {
      id: 5,
      name: "Me Before You",
      type: "romance",
      img: "https://images-na.ssl-images-amazon.com/images/I/A1lmdwbrheL.jpg",
      describtion:
        "Young and quirky Louisa Clark moves from one job to the next to help her family make ends meet",
      rate: 5
    },
    {
      id: 6,
      name: "Call Me By Your Name",
      type: "romance",
      img:
        "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg",
      describtion:
        "chronicles the romantic relationship between a 17-year-old, Elio Perlman, and Oliver... ",
      rate: 1
    },
    {
      id: 7,
      name: "Parasite",
      type: "thriller",
      img: "https://m.media-amazon.com/images/I/91sustfojBL._AC_SL1500_.jpg",
      describtion:
        "Follows the Kim family struggling to make ends meet until son Ki-woo comes across an unexpected opportunity..."
    },
    {
      id: 8,
      name: "Getout",
      type: "thriller",
      img: "https://m.media-amazon.com/images/I/91G9ewuNN9L._AC_SY679_.jpg",
      describtion:
        "Chris Washington, a young black man who uncovers a disturbing secret when he meets the family of his white girlfriend, Rose Armitage...  ",
      rate: 2
    },
    {
      id: 9,
      name: "Quiet Place",
      type: "thriller",
      img:
        "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
      describtion:
        "Struggling to survive and raise their children in a post-apocalyptic world inhabited by blind monsters with an acute sense of hearing",
      rate: 5
    },
    {
      id: 10,
      name: "Black Widow",
      type: "action",
      img:
        "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      describtion:
        "Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      rate: 4
    }
  ]);

  return (
    <div className="App">
      <Navb setSearch={setSearch} setRating={setRating} />
      <List Movies={Movies} search={search} rating={rating} />
      <Add Movies={Movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
