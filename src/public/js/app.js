const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

let roomName;

room.hidden = true;

function showRoom() {
  console.log("채팅방 표시");
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  console.log(h3);
  h3.innerText = `Room : ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");

  socket.emit("enter_room", input.value, showRoom);

  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
