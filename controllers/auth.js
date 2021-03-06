const fetch = require("cross-fetch");
const { response, json } = require("express");
const AIC_URL = "https://api.mojang.com/users/profiles/minecraft";

const login = async (req, res = response) => {
    const { username } = req.query;
    try {
        const resp = await fetch(
            `${AIC_URL}/${username}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(username)
        if (resp.status === 200) {
            const data = await resp.json();
            res.json({ data });
        }
        else if (resp.status === 204) {
            res.status(404).send('Sorry, username does not exist');
        }
        if (resp.status >= 400) {
            throw new Error("Bad response from server");
        }


    } catch (err) {
        console.error(err);
    }
    // Ideally search the user in a database,
    // throw an error if not found.


};

module.exports = {
    login,
};


