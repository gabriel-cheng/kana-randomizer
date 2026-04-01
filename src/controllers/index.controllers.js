import hiragana from "../data/hiragana.json" with { type: "json"};
import katakana from "../data/katakana.json" with { type: "json"};
import getRandomKanaInRange from "../services/randomizerSv.js";

class IndexController {

    index = (req, res) => {
        return res.status(200).json({
            "message": "Hello, app!"
        });
    }

    getRandomCharactersList = (req, res) => {
        const { first_character, last_character, alphabet } = req.body;

        const data = alphabet === "hiragana" ? hiragana : katakana;

        const randomList = getRandomKanaInRange(
            data,
            alphabet,
            first_character,
            last_character
        );

        return res.status(200).json(randomList);
    };

}

export default IndexController;