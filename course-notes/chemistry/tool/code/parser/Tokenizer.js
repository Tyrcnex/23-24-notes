class Tokenizer {
    matchers = {
        paren: '\\(',
        closeParen: '^\\)',
        combinator: '\\+',
        number: '[0-9]+',
        symbol: '[A-Z][a-z]*',
    }
    constructor (string) {
        if (typeof string !== "string") throw new Error(`expected string, got ${typeof string}`);
        this.tokens = this.tokenize(string);
    }
    consume() {
        let token = this.tokens.shift()?.value;
        if (!isNaN(token)) token = parseInt(token);
        return token;
    }
    peek() {
        if (!this.tokens.length) return { value: null, type: null };
        else return this.tokens[0];
    }
    expect(type) {
        if (this.peek().type !== type) throw new Error(`expected type ${type}; got ${this.peek().type}`);
        this.consume();
    }
    tokenize(string) {
        let str = string;
        let tokens = [];
        while (str.length) {
            let token = {};
            for (const key in this.matchers) {
                let match = str.match(this.matchers[key]);
                if (match) {
                    token = { type: key, value: match };
                    break;
                }
            }
            if (!token.value) throw new Error(`unknown token ${str[0]}`);
            str = str.slice(token.value.length);
            tokens.push(token);
        }
        return tokens;
    }
}