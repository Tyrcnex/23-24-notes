To parse `(ONO)3AgCl`, the following data structure should be returned (subject to change):
```chem
Molecule {
	number: 1,
	constituents: [
		Molecule {
			number: 3,
			constituents: [
				Molecule {
					number: 1,
					constituents: [
						Atom('O'),
						Atom('N'),
						Atom('O'),
					]
				}
			]
		},
		Atom('Ag'),
		Atom('Cl'),
	]
}
```

If `number` is 1, should it be made optional? By this, I mean:
```chem
Molecule {
	constituents: [
		Molecule {
			number: 3,
			constituents: [
				Molecule {
					constituents: [
						Atom('O'),
						Atom('N'),
						Atom('O'), // Should this be combined?
					]
				}
			]
		},
		Atom('Ag'),
		Atom('Cl'),
	]
}
```