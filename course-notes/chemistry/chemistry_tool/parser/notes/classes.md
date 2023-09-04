Atom class

```js
class Atom {
    constructor(particle, number) {
        if (number < 0) {
            throw new Error('expected positive number, got negative');
        }
        number = Math.floor(number);
        this.number = number || 1;
        
        if (typeof particle !== 'string') {
	        throw new Error(`expected string, got ${typeof particle}`);
        }
        this.particle = particle;
        getAtomData();
    }
    
    clone() {
	    return new Atom(this.particle, this.number);
    }
    
    getAtomData() {
        let atom = periodicTable.find(data => data.symbol === this.particle);
        if (!atom) {
            throw new Error(`symbol ${this.particle}`)
        }
    }
}

class Molecule {
	constructor(particle, number);
}
```