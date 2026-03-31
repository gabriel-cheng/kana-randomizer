import app from "./app.js";

function main() {
    const port = 5000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}!`);
    });
}

main();