export default class TileBag {
    private letters: string[] = [];

    constructor() {
        this.populate();
        this.shuffle();
    }

    private populate() {
        this.letters = [
            ..."AAAAAAAAAAAAA",
            ..."BBBB",
            ..."CCCC",
            ..."DDDDDD",
            ..."EEEEEEEEEEEEEEEEEE",
            ..."FFF",
            ..."GGGG",
            ..."HHH",
            ..."IIIIIIIIIIII",
            ..."JJ",
            ..."KK",
            ..."LLLLL",
            ..."MMM",
            ..."NNNNNNNN",
            ..."OOOOOOOOOOOO",
            ..."PPP",
            ..."QQ",
            ..."RRRRRRRRR",
            ..."SSSSSS",
            ..."TTTTTTTTT",
            ..."UUUUUU",
            ..."VVV",
            ..."WWWW",
            ..."XX",
            ..."YYY",
            ..."ZZ"
        ];
    }

    private shuffle() {
        for (let i = this.letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.letters[i], this.letters[j]] = [this.letters[j], this.letters[i]];
        }
    }

    public draw(): string {
        return this.letters.pop() ?? "";
    }

    public remaining(): number {
        return this.letters.length;
    }
}