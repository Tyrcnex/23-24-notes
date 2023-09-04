class Parser {
    constructor (string) {
        this.updateInput(string);
    }
    updateInput(string) {
        this.tokenizer = new Tokenizer(string);
    }
    number() { return this.tokenizer.peek().type === "number" ? this.tokenizer.consume() : 1; }
    parse(n) {
        let nest = isNaN(n) ? 1 : n;
        let equation = new Equation();
        let molecule = new Molecule();
        while (true) {
            let nextToken = this.tokenizer.peek();
            switch(nextToken.type) {
                case "symbol": {
                    let particle = this.tokenizer.consume();
                    let number = this.number();
                    molecule.addParticle(particle, number);
                    break;
                }
                case "number": {
                    let number = this.tokenizer.consume();
                    let particle = this.parse(nest + 1);
                    molecule.addParticle(particle, number);
                    break;
                }
                case "paren": {
                    this.tokenizer.consume();
                    let particle = this.parse(nest + 1);
                    this.tokenizer.expect("closeParen");
                    let number = this.number();
                    molecule.addParticle(particle, number);
                    break;
                }
                case "combinator": {
                    if (nest > 1) return molecule;
                    this.tokenizer.consume();
                    equation.addTerm(molecule.flush());
                    let particle = this.parse(nest);
                    equation.addTerm(particle);
                    break;
                }
                default: {
                    equation.addTerm(molecule);
                    if (equation.terms.length === 1) return equation.terms[0].simplify();
                    else return equation;
                }
            }
        }
    }
}