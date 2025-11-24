const fs = require("fs");

module.exports = (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json"));
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) return res.json({ message: "Usuario no encontrado" });

    users[userIndex] = {
        ...users[userIndex],
        name: req.body.name,
        email: req.body.email
    };

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "Usuario actualizado", data: users[userIndex] });
};
