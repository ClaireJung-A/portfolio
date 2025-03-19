export const project2 = {
  title: "Minesweeper Game",
  intro: "Minesweeper Game Project",
  description:
    "This project is an implementation of the Minesweeper game. The player wins by either finding all the mines or uncovering all the non-mine cells. Game-related data is managed globally using Redux.",
  points: [
    "Implemented the Minesweeper algorithm using Depth-First Search (DFS).",
    "Allows players to select a difficulty level or create a custom board by specifying the number of rows, columns, and mines.",
    "Displays the number of mines in the eight adjacent cells when a cell is clicked.",
    "Implemented a recursive logic where all adjacent non-mine cells are automatically uncovered when an empty cell is clicked.",
    "Managed the game's global state using Redux and Redux Toolkit (RTK).",
    "Used `redux-persist` to store the Redux-managed state in local storage, ensuring that the selected difficulty level remains even after refreshing the page.",
  ],
  startDate: "2023-12-07",
  endDate: "2023-12-11",
  category: ["Personal"],
  path: "minesweeper-game",
  featured: false,
  stacks: ["react", "styledComponents", "typescript", "redux", "vercel"],
  githubUrl: "https://github.com/ClaireJung-A/minesweeper/tree/main",
  docsUrl: "",
  serviceUrl: "",
  images: 1,
};
