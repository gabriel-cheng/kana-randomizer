class IndexController {
    index = (req, res) => {
        return res.status(200).json({
            "message": "Hello, app!"
        });
    }
}

export default IndexController;