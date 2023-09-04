`Symbol.parselet()`
```pseudocode
1. let particle = consume(symbol)
2. peek for number -> if there is a number, let number
3. if number, add particle with number to molecule
4. else add particle to molecule
```

`LeftParen.parselet()`
```pseudocode
1. consume '('
2. let particle = recursive parse call with nest++
3. finish call, expect ')'
4. peek for number -> if there is a number, let number
5. if number, add particle with number to molecule
6. else add particle to molecule
```

`ReactionSymbol.parselet()`
```pseudocode
1. if nest > 1, immediately return molecule
2. consume '+'
3. add molecule to equation and flush molecule
4. let particle = recursive parse call with SAME nest
5. add particle to molecule
```

`Number.parselet()` (for something like the 7 in 7H2O)
```pseudocode
1. let number = consume(number)
2. let particle = recursive parse call with nest++
3. add particle with number to molecule
```

Return handling (for empty token and right parentheses)
```pseudocode
1. add molecule to equation (molecule might be empty, so handle this) and flush molecule
2. if equation length is equals to 1, return equation[0]
3. else return equation
```