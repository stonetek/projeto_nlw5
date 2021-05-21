import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server running on port 3333"));




/**
 Apenas para lembrar
 * * GET = Buscas
 * POST = Criação
 * DELETE Alteração
 * PATCH = Alterar uma informação específica

 app.get("/", (request, response) => {
  return response.json({
    message: "Olá seus NOOB",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "New User save success!",
  });
});
*/