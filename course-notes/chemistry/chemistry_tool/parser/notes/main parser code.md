I'll try to actually write the parser code today.

Helper functions:

`numberPeek()`
```js
return this.type(this.peek()) === 'Number' ? parseInt(this.peek()) : 1;
```

Parselet code:

arguments for each: `nest`

> `Symbol.parselet()`

```js
let particle = this.consume();
let number = this.numberPeek();
molecule.addParticle(particle, number);
```

> `LeftParen.parselet()`

```js
this.consume();
let particle = parse(n + 1); // nest is n+1
this.expect(')'); // expect() should consume the value
let number = this.numberPeek();
molecule.addParticle(particle, number);
```

> `ReactionSymbol.parselet()`

```js
if (nest > 1) return molecule;
this.consume();
equation.add(molecule);
molecule.flush();
```

> `Number.parselet()` (for something like the 7 in 7H2O)

```js

```


___



```

```js
class Parser {
	
}
```