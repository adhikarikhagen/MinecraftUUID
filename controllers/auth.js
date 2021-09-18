const fetch = require("cross-fetch");
const { response, json } = require("express");
const AIC_URL = "https://api.mojang.com/users/profiles/minecraft/bw_minecraft";

const login = async (req, res = response) => {
    const { username } = req.params;
    try {
        const resp = await fetch(
            `${AIC_URL}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (resp.status >= 400) {
            throw new Error("Bad response from server");
        }

        const data = await resp.json();
        // const dataWithUrls = data.map((image) => ({
        //     ...image,
        //     image_url: `https://www.artic.edu/iiif/2/${image.image_id}/full/843,/0/default.jpg`,
        // }));

        res.json({ data });
    } catch (err) {
        console.error(err);
    }
    // Ideally search the user in a database,
    // throw an error if not found.


};

module.exports = {
    login,
};


