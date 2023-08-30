Atom/Molecule classes

```js
class Atom {
    constructor(symbol, number) {
        if (number < 0) {
            throw new Error('expected positive number, got negative');
        }
        
        // floor number then check if it's falsy, if not default value is 1
        number = Math.floor(number);
        this.number = number || 1;
        this.symbol = symbol;
        getAtomData();
    }
    
    getAtomData() {
        let atom = periodicTable.find(data => data.symbol === this.symbol);
        if (!atom) {
            
        }
    }
    
    
    
}
```