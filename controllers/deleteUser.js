const fs = require("fs");

module.exports = (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json"));
    const id = parseInt(req.params.id);

    const filtered = users.filter(u => u.id !== id);

    fs.writeFileSync("users.json", JSON.stringify(filtered, null, 2));

    res.json({ message: "Usuario eliminado" });
};
