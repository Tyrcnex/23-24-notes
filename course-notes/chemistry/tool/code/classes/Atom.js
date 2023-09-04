class Atom {
    constructor(particle, number) {
        if (!particle) throw new Error('empty particle supplied');
        if (typeof particle !== "string") throw new Error(`expected string, got ${typeof particle}`);
        this.particle = particle;
        this.number = isNaN(particle) ? 1 : parseInt(particle);
    }
    className() { return "Atom"; }
    clone() {
        return new Atom(this.particle, this.number);
    }
    simplify() { return this.clone(); }
    count() {
        return {[this.particle]: this.number};
    }
    getAtomData() {
        let particle = periodicTable.find(data => data.symbol === this.particle);
        if (!p) throw new Error(`unknown symbol ${this.particle}`);
        return p;
    }
    getAtomicMass() {
        return this.getAtomData().atomicMass * this.number;
    }
}