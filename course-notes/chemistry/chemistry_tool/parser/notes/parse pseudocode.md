Parse plan for `(O2N4C)4Ag2+7H2O+2O` (subject to change)
```js
1 parse nest=1, ['(','O','2','N','4','C',')','4','Ag','2','+','7','H','2','O','+','2','O']
1 let equation: Equation
1 let molecule: Molecule
1 peek '(', is of type LEFTPAREN // use LeftParen.parselet()
1 consume('(')
1 let particle = parse nest=2 ['O','2','N','4','C',')','4','Ag','2','+','7','H','2','O','+','2','O']

    // IMPORTANT NOTE: if nest>1, and a '+' is detected, return immediately.
    // then, on the outside, since it is expecting a ')' but gets '+', it will throw an error.
    // why do this? this is because something like O2(H+C) is not valid chemistry notation (but O2H+CO2 is).
    // 
    // the variable "equation" will still be created, however, because I don't want to modify the entire parse() function to handle this issue.

    2 let equation: Equation
    2 let molecule: Molecule

    // Start repeat

	// If first token is a symbol, consume it, and then check if the next token is a number. (do this only for tokens that are symbols)
	// This code should be in something like Symbol.parselet()
    2 peek 'O', is of type SYMBOL
    2 let particle = consume('O')
    2 peek '2', is of type NUMBER
    2 let num = consume('2')
    2 molecule.addParticle(particle, num)
    
    // End repeat (omit repeat for next loops)
    
    2 peek 'N', is of type SYMBOL
    2 let particle = consume('N')
    2 peek '4', is of type NUMBER
    2 let num = consume('4')
    2 molecule.addParticle(particle, num)
    
    2 peek 'C', is of type SYMBOL
    2 let particle = consume('C')
    2 peek ')' is of type RIGHTPAREN // don't add a number
    2 molecule.addParticle(particle) // num defaults to 1
    
    2 peek ')' is of type RIGHTPAREN // when encountering right parentheses, return
    2 equation.addTerm(molecule)
    2 molecule.flush() // consistency

    // (see note above) even though I'm not supposed to use equation, I don't want to modify the entire parse() function
    2 length of equation === 1 -> length of equation[0] > 1 -> return equation[0] // if length of equation is not 1, return equation (unless length of molecule, which is equation[0] is ALSO 1, in which just return the first element of molecule) (also length of equation should only be > 1 in nest=1 because the parser should have instantly returned when it saw a '+')
1 expect(')'), got ')', so continue // if it was not ')', throw error
1 peek '4', is of type NUMBER
1 let num = consume('4')
1 molecule.addParticle(particle, num)

1 peek 'Ag', is of type SYMBOL
1 let particle = consume('Ag')
1 peek '2' is of type NUMBER
1 let num = consume('2')
1 molecule.addParticle(particle, num)

// This should be handled under ReactionSymbol.parselet()
1 peek '+', is of type REACTION_SYMBOL
1 consume('+')
1 equation.addTerm(molecule)
1 molecule.flush() // Remove all particles of the molecule
1 let particle = parse nest=1 /* Use the same nest value if the + operator is used */ ['7','H','2','O','+','2','O']
    1* let equation: Equation
    1* let molecule: Molecule
    1* peek '7' is of type NUMBER // the first token of the equation is a number, so 7H2O should be treated as 7 H2O molecules
    // The following code should be in something like Number.parselet()
    1* let num = consume('7')
    1* let particle = parse nest=2 ['H','2','O','+','2','O']
	    2 let equation: Equation
	    2 let molecule: Molecule
	    
	    2 peek 'H', is of type SYMBOL
	    2 let particle = consume('H')
	    2 peek '2', is of type NUMBER
	    2 let num = consume('2')
	    2 molecule.addParticle(particle, num)
		
		2 peek 'O', is of type SYMBOL
		2 let particle = consume('O')
		2 peek '+' is of type REACTION_SYMBOL
		2 molecule.addParticle(particle, num)
		
		2 peek '+', is of type REACTION_SYMBOL
		2 return molecule // if the token is '+', immediately return molecule, not equation (because nest>2)
	1* molecule.addParticle(particle, num)
	
	1* peek '+', is of type REACTION_SYMBOL
	1* consume('+')
	1* equation.addTerm(molecule)
	1* molecule.flush()
	1* let particle = parse nest=1 ['2','O']
		1** let equation: Equation
		1** let molecule: Molecule
		
		1** peek '2', is of type NUMBER // Number.parselet()
		1** let num = consume('2')
		1** let particle = parse nest=2 ['O']
			2 let equation: Equation
			2 let molecule: Molecule
			
			2 peek 'O', is of type SYMBOL
			2 let particle = consume('O')
			2 peek null, is of type null // empty token
			2 molecule.addParticle(particle)
			
			// when you see null, you should return because empty token
			2 peek null, is of type null
			2 equation.addTerm(molecule)
			2 molecule.flush()
			2 length of equation === 1 -> length of equation[0] === 1 -> return equation[0][0] // if length of equation is not 1, return equation (unless length of molecule is ALSO 1, in which just return the first element of molecule)
			// molecule[0] is Atom('O'), singular
		1** molecule.addParticle(particle, num)
		
		// empty token, return
		1** peek null, is of type null
		1** equation.addTerm(molecule)
		1** molecule.flush()
		1** length of equation === 1, length of equation[0] === 1 -> return equation[0][0] // note that 2 Atom('O') is Atom('O',2), and is the only element of molecule
		
	// Remember, this next step happened after a '+' after parsing 2O
	1* molecule.addParticle(particle)
	
	1* peek null, is of type null
	1* equation.addTerm(molecule)
	1* molecule.flush()
	1* length of equation !== 1, return equation // this consists of 7H2O and 2O
1 molecule.addParticle(particle)

1 peek null, is of type null
1 equation.addTerm(molecule)
1 molecule.flush()
1 length of equation !== 1, return equation // FINAL RETURN:  this consists of (O2N4C)4Ag2, 7H2O, and 2O
```

Question: Should I remove the `length of molecule === 1` check? Reason: `O2` is not the same as `2O` , because the former represents two oxygen atoms bonded together to form a dioxygen molecule, while the latter represents two unbonded oxygen atoms. TODO: ask chem teacher

Adding onto this, will `molecule.addParticle(Atom('O'),2)` turn into `Atom('O',2)` or `Molecule { number: 2, particles: [Atom('O')] }`?