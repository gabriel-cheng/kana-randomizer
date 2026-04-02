import hiragana from "../data/hiragana.json" with { type: "json"};
import katakana from "../data/katakana.json" with { type: "json"};
import getRandomKanaInRange from "../services/randomizer.service.js";

class IndexController {

    index = (req, res) => {
        return res.render("home", {
            showHeader: false
        });
    }

    getRandomCharactersList = (req, res) => {
        const { 
            firstCharacter,
            lastCharacter,
            alphabet,
            quantity
         } = req.body;

        const data = alphabet === "hiragana" ? hiragana : katakana;

        const randomList = getRandomKanaInRange(
            data,
            alphabet,
            firstCharacter,
            lastCharacter,
            quantity
        );

        return res.status(200).json(randomList);
    }

    alphabet = (req, res) => {
        const { alphabet } = req.params;
        const alphabetsViews = ["hiragana", "katakana"]

        if(!alphabetsViews.includes(alphabet)) {
            return res.status(404).render("404", {
                "message": "Página não encontrada!",
                showHeader: false
            });
        }

        res.render("alphabets/alphabets", {
            alphabet,
            showHeader: true,
            alphabet
        });
    }

}

export default IndexController;