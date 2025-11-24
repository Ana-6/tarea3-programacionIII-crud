module.exports = (req, res) => {
    res.json({
      message: "Lista de usuarios obtenida correctamente",
      users: [
        { id: 1, nombre: "Usuario 1" },
        { id: 2, nombre: "Usuario 2" }
      ]
    });
  };