Question: Solve the following using the limit definition for the derivative at a point. $$\frac{d}{dx}\sin(x)\Big|_{x=\frac{\pi}{3}}$$
Answer:

$$\lim_{x\to \frac{\pi}{3}}\frac{\sin x-\sin\frac{\pi}{3}}{x-\frac{\pi}{3}}=\lim_{x\to \frac{\pi}{3}}\frac{\sin x-\frac{\sqrt3}{2}}{x-\frac{\pi}{3}}$$

Here's a common trick I use. I don't really like that $x-\frac{\pi}{3}$ in the denominator, so I want to isolate it and use only one variable. Let's do a variable substitution. $$u=x-\frac{\pi}{3}$$
(note from this that $x=u+\frac{\pi}{3}$)


We also have to change the value we approach. Plug in $x=\frac{\pi}{3}$: $$\frac{\pi}{3}-\frac{\pi}{3}=0$$
Now solve the new limit: $$\lim_{u\to 0}\frac{\sin(u+\frac{\pi}{3})-\frac{\sqrt3}{2}}{u}=\lim_{u\to 0}\frac{\sin u\cos\frac{\pi}{3}+\cos u\sin\frac{\pi}{3}-\frac{\sqrt3}{2}}{u}$$
Simplify: $$\lim_{u\to 0}\frac{\frac{\sin u}{2}+\cos u\cdot\frac{\sqrt3}{2}-\frac{\sqrt3}{2}}{u}=\frac{1}{2}\lim_{u\to 0}\frac{\sin u}{u}+\frac{\sqrt3}{2}\lim_{u\to 0}\frac{\cos u-1}{u}$$
These two are common limits that are memorized. $$\frac{1}{2}\cdot1+\frac{\sqrt3}{2}\cdot 0=\boxed{\frac{1}{2}}$$
You can actually verify this answer. The derivative of $\sin$ is $\cos$, and $\cos\frac{\pi}{3}=\frac{1}{2}$. So everything checks out.

Also, from the variable substitution step, we learn a valuable technique. A second formula for the derivative at a point is the following: $$\lim_{x\to 0}\frac{f(x+c)-f(c)}{x}$$
This formula is more useful when you can't find a factor in the form $x-c$ in the numerator, or when $f(x+c)$ can be simplified nicely, like in this example.