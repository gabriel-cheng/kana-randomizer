function getRandomKanaInRange(data, alphabet, start, end, quantity) {
    const kanaGroup = data[alphabet];

    const allKana = [
        ...Object.entries(kanaGroup.base),
        ...Object.entries(kanaGroup.dakuten),
        ...Object.entries(kanaGroup.handakuten),
        ...Object.entries(kanaGroup.yoon)
    ];

    const startIndex = allKana.findIndex(([char]) => char === start);
    const endIndex = allKana.findIndex(([char]) => char === end);

    if (startIndex === -1 || endIndex === -1) {
        throw new Error("Caractere inicial ou final não encontrado.");
    }

    if (startIndex > endIndex) {
        throw new Error("O caractere inicial deve vir antes do final.");
    }

    const range = allKana.slice(startIndex, endIndex + 1);

    const shuffle = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const result = [];

    for (let i = 0; i < quantity; i++) {
        result.push(
            shuffle(range).map(([char, romaji]) => ({
                char,
                romaji
            }))
        );
    }

    return result;
}

export default getRandomKanaInRange;