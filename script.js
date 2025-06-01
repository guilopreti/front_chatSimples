import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

const socket = io("https://back-chatsimples.onrender.com/");

const userName = "User" + Math.round(Math.random() * 10000);

socket.on("connect", () => {
  socket.emit("joined", userName);
});

const form = document.getElementById("form");
let input = document.getElementById("input");
const messages = document.getElementById("messages");

form.onsubmit = (e) => {
  e.preventDefault();
  socket.emit("message", input.value);
  input.value = "";
  input.focus();
};

socket.on("message", (msg) => {
  messages.innerHTML = msg + "<br/>" + messages.innerHTML;
});
