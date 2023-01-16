import express from "express";

const app = express();

const handleListen = () => console.log("3000 개방");

app.listen(3000, handleListen);
