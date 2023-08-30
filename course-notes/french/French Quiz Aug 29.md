```french
sentence_structure = [subject (sujet)] + [verb (verbe)]

// Ordering below: [je, tu, il/elle/ont, nous, vous, ils/elles]
avoir = [ai, as, a, avons, avez, ont]
er_verbs = [e, es, e, ons, ez, ent] | EXCEPTION_Collection -> {
	préférer -> if (je, tu, il/elle/ont, ils/elles), 2nd é -> è, else no change,
	acheter -> if (je, tu, il/elle/ont, ils/elles), 2nd e -> è, else no change
}
ir_verbs = [is, is, it, issons, issez, issent];
re_verbs = [s, s, , ons, ez, ent];
def_articles = [le, la, l', les];
etre = [suis, es, est, sommes, êtes, sont];


negation = Collection -> {
	rule1 = ne (add ' when necessary) [verb] pas;
	rule2 = (un, une, des) -> de; // only applies during negation
}

// Notice below that la and l' don't have contractions.
contractions_with_a = Map -> {
	a+le   -> au,
	a+les  -> aux,
	a+la   -> a la,
	a+l'   -> a l'
};
contractions_with_de = Map -> {
	de+le  -> du,
	de+les -> des,
	de+la  -> de la,
	de+l'  -> de l'
};

// Adjective agreement
adjective_agreement = Collection -> {
	M_to_F = Collection -> {
		general_rule = adj + (if adj doesn't have e, add e),
		EXCEPTION_Collection { 1 } -> {
			eux -> eus + e,
			if  -> iv + e
		}
		EXCEPTION_Collection { 2 }  -> {
			long    -> longue,
			blanc   -> blanche,
			bon     -> bonne,
			gros    -> grosse,
			gentil  -> gentille,
			mignon  -> mignonne
		}
	},
	adjective_ordering = Collection -> {
		general_rule -> adjectives are AFTER noun
		EXCEPTION_Collection {--BAGS--} -> {
			B -> Beauty,
			A -> Age,
			G -> Goodness,
			S -> Size
		}
	},
	adj_to_plural = adj + (if adj doesn't have s, add s),
	des_rule = if adj is before noun, des -> de
}

possesive_adjectives = Collection -> {

	/*
		USAGE: [possesive adjective][noun]
		Use this ordering: [my, your, his/her/its, our, your, their]
		If [noun] is masculine singular, use masculine_singular, etc
	*/

	masculine_singular = [mon, ton, son, notre, votre, leur];
	feminine_singular = [ma, ta, sa, notre, votre, leur];
	plural = [mes, tes, ses, nos, vos, leurs];
	EXCEPTION = if noun (M/F) begins with vowel, use masculine singular
}

question_words = Collection -> {
	general_rule -> [question word] + est-ce que (remove e and add ' if needed)
	question_words_list = Collection -> {
		when      -> quand
		why       -> pourquoi
		what      -> qu
		where     -> ou
		how       -> comment
		with whom -> avec qui
	}
	EXCEPTION_Collection -> {
		if verb is etre, don't use est-ce que, // e.g. Où est ton frère?
		who -> qui [without est-ce que]
	}
}
```