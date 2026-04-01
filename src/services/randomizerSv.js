function getRandomKanaInRange(data, alphabet, start, end, quantity) {
    const kanaGroup = data[alphabet];

    if (!kanaGroup) {
        throw new Error("Alfabeto inválido (use 'hiragana' ou 'katakana').");
    }

    const allKana = [
        ...kanaGroup.base,
        ...kanaGroup.dakuten,
        ...kanaGroup.handakuten,
        ...kanaGroup.yoon
    ];

    const startIndex = allKana.indexOf(start);
    const endIndex = allKana.indexOf(end);

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
        result.push(shuffle(range));
    }

    return result;
}

export default getRandomKanaInRange;