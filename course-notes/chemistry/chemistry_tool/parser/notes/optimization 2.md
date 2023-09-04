Note the following: to parse `(O)2`, the data structure would be different than parsing `O2`. 

Here is the data structure for `(O)2`, without optimizations:
```chem
Molecule {
	number: 2,
	constituents: [
		Molecule {
			number: 1,
			constituents: [
				Atom('O')
			]
		}
	]
}
```

Here is the data structure for `(O)2`, with optimizations (`parseOpt`):
```chem
Atom('O',2)
```

Here is suggested code, in Javascript, for `parseOpt` (untested): 
```js
parseV1(tokens) {
	...
    // molecule is the thing being returned
    if (molecule.getConstituents().length === 0) {
        throw new Error("empty expression");
    } else if (molecule.getConstituents().length === 1) {
        // if constituents.length is 1, it means there is one element in the list.
        // here, you get the only element, constituents[0].
        let atom = molecule.getConstituents()[0];

        // check if the number of molecules is 1.
        // if it is 1, then you can just do Atom(element)
        // if it's not 1, then you have to do Atom(element, number)
        // not sure if this optimizaiton is useful or not, if statements might be slow
        if (molecule.number !== 1) {
            atom.setNumber(molecule.number);
        }
        return atom;
    } else { // otherwise it's a normal molecule
        return molecule;
    }
}
```