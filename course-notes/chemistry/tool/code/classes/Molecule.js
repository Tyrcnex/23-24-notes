class Molecule {
    constructor(particle, number) {
        this.particles = particle ? [particle] : [];
        this.number = isNaN(number) ? 1 : parseInt(number);
    }
    className() { return "Molecule" }
    clone() {
        return new Molecule([...this.particles].map(particle => particle.clone()), this.number);
    }
    flush() {
        let temp = this.clone();
        this.particles = [];
        this.number = 1;
        return temp;
    }
    addParticle(particle, number) {
        let num = isNaN(number) ? 1 : parseInt(number);
        let newParticle;
        if (typeof particle === "string") {
            newParticle = new Atom(particle, num);
        } else if (particle.className) { // molecule or atom
            newParticle = num === 1 ? particle.clone() : new Molecule(particle.clone(), num);
        } else throw new Error(`expected string, Atom, or Molecule; got ${typeof particle}`);
        this.particles.push(newParticle);
    }
    count() {
        let counts = {};
        for (const particle of this.particles) {
            let particleCount = particle.count();
            for (const key in particleCount) {
                counts[key] = particleCount[key] * this.number + (counts[key] ?? 0);
            }
        }
        return counts;
    }
    simplify() {
        return this.number === 1 && this.particles.length === 1 ? this.particles[0] : this;
    }
}