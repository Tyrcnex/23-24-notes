class Equation {
    constructor(term) {
        this.terms = term ? [term] : [];
    }
    clone() {
        return new Equation([...this.terms].map(term => term.clone()));
    }
    className() { return "Equation"; }
    addTerm(term) {
        if (term.terms) { // Equation
            this.terms = this.terms.concat(term.terms);
        } else if (term.classname) { // Molecule & Atoms
            if (term.particles?.length === 0) return;
            else this.terms.push(term);
        } else throw new Error(`expected Equation, Molecule, or Atom; got ${typeof term}`);
    }
}