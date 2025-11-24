const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API de usuarios CRUD con Node + Express");
});

app.use("/api/users", usersRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});