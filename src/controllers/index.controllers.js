import hiragana from "../data/hiragana.json" with { type: "json"};
import katakana from "../data/katakana.json" with { type: "json"};
import getRandomKanaInRange from "../services/randomizerSv.js";

class IndexController {

    index = (req, res) => {
        return res.render("home", {
            showHeader: false
        });
    }

    getRandomCharactersList = (req, res) => {
        const { 
            first_character,
            last_character,
            alphabet,
            quantity
         } = req.body;

        const data = alphabet === "hiragana" ? hiragana : katakana;

        const randomList = getRandomKanaInRange(
            data,
            alphabet,
            first_character,
            last_character,
            quantity
        );

        return res.status(200).json(randomList);
    }

    alphabet = (req, res) => {
        const { alphabet } = req.params;
        const alphabetsViews = {
            hiragana: "alphabets/hiragana",
            katakana: "alphabets/katakana",
        }
        
        const view = alphabetsViews[alphabet];

        if(!view) {
            return res.status(404).render("404", {
                "message": "Página não encontrada!",
                showHeader: false
            });
        }

        res.render(view, {
            alphabet,
            showHeader: true
        });
    }

}

export default IndexController;