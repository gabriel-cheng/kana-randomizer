import hiragana from "../data/hiragana.json" with { type: "json"};
import katakana from "../data/katakana.json" with { type: "json"};

class IndexController {
    
    index = (req, res) => {
        return res.status(200).json({
            "message": "Hello, app!"
        });
    }

    hiragana = (req, res) => {
        return res.status(200).json(hiragana);
    }

    katakana = (req, res) => {
        return res.status(200).json(katakana);
    }
    
}

export default IndexController;