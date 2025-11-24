const fs = require("fs");

module.exports = (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json"));

    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "Usuario creado", data: newUser });
};
