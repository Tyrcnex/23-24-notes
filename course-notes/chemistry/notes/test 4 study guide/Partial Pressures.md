The math of partial pressures is situated under very scary looking math symbols. To understand partial pressures, perhaps it's better to understand a little analogy.

Let's say you have lots of tightly packed colored balls (!!!) inside a box. In fact, there's 100 of them, so it's pretty tightly packed. 
- We say that the pressure is very high because the balls are so tightly packed.
- We also say that the "moles" of balls is 100.

Now, let's say the colored balls were only of three colors: red, yellow, and blue. This is the goal of partial pressures:
1. Create 3 boxes identical to the original and separate the balls into a container of their own.
    - At the end of this, let's say there are 53 red balls, 26 yellow balls, and 21 blue balls in a container of their own.
2. Recalculate the "pressure" and "moles".
    - Moles is basically just the number of balls in the new box. For example, there are 53 "moles" of red balls.
    - Pressure is how tightly packed the balls are in the new box. For instance, all the pressures are probably going to be reduced because they're less tightly packed (e.g. 21 blue balls in a box vs 100 colored balls in a box). However, the red balls are more tightly packed than the blue balls because there are more red balls.

That's the concept of partial pressures: figuring out those pressures given the initial gas in a container. Let's notice from the above example, however, the following rule of thumb: *less moles = less pressure*.

Let's look at an example.

> **Question 1:** A mixture of gases contains 4.46 moles of neon (Ne), 0.74 moles of argon (Ar), and 2.15 moles of xenon (Xe). Calculate the partial pressures of the gases if the total pressure is 2.00 atm at a certain temperature.

Given:

$$n_{Ne}=4.46\text{ mol}\text{ (moles of neon)}$$
$$n_{Ar}=0.74\text{ mol}\text{ (moles of argon)}$$
$$n_{Xe}=2.15\text{ mol}\text{ (moles of xenon)}$$
$$P_T=2.00\text{ atm}\text{ (total pressure)}$$

We need to calculate:
$$P_{Ne},P_{Ar},P_{Xe}\text{ (pressures of each gas)}$$

We need to calculate the mole fractions for each of the gases. Like above, you first get the moles of the *individual gas* (i.e. 53 moles of red balls) and then calculate the *total* moles (i.e. 100 moles of colored balls).

First of all, let's calculate the total moles. This is simple: just add up all the moles. $$n_T=n_{Ne}+n_{Ar}+n_{Xe}=4.46+0.74+2.15=7.35$$

This means that the ratio of moles neon to the entire gas is:

$$X_{Ne}=\frac{n_{Ne}}{n_T}=\frac{4.46}{7.35}=0.607$$

Now, remember that the goal is to calculate partial pressures. Also remember that the rule of thumb is that less moles = less pressure. There are certainly fewer moles of neon than the entire gas. In fact, if we multiply the ratio we got above with the total pressure of the box, we get the partial pressure of neon gas:

$$P_{Ne}=P_T\cdot X_{Ne}$$
> Think about this formula for a second. Remember that $X_{Ne}$ is always going to be a fraction less than 1. You can't have 100 colored balls in a box, take the red balls out, and conclude that there are 102 red balls. And if you take that less-than-1 number and multiply it by the total pressure, you'll result in a pressure that is *less* than the total pressure, which follows the rule of thumb.

Then we can now calculate $P_{Ne}$: $$P_{Ne}=2.00\text{ atm}\cdot 0.607 = \boxed{1.214\text{ atm}}$$
Let us now calculate the mole fractions for argon and xenon:

$$X_{Ar}=\frac{n_{Ar}}{n_T}=\frac{0.74}{7.35}=0.101$$
$$X_{Xe}=\frac{n_{Xe}}{n_T}=\frac{2.15}{7.35}=0.293$$


And now we'll calculate $P_{Ar}$ and $P_{Xe}$: 

$$P_{Ar}=P_T\cdot X_{Ar}=2.00\text{ atm}\cdot 0.101 = \boxed{0.202\text{ atm}}$$
$$P_{Xe}=P_T\cdot X_{Xe}=2.00\text{ atm}\cdot 0.293 = \boxed{0.586\text{ atm}}$$

Great! Let's do another example to get a better understanding of this, but this time I'll do more math and less explaining.