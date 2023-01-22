const socket = new WebSocket(`ws://${window.location.host}`);

const nickForm = document.querySelector("#nick");
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");

socket.addEventListener("open", () => {
  console.log("서버와 연결됨");
});

socket.addEventListener("message", (message) => {
  console.log("Just do this", message.data, "from the server");
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

socket.addEventListener("close", () => {
  console.log("서버와 연결이 종료됨");
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

function handleNickSubmit(event) {
  event.preventDefault();
  const input = nickForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
