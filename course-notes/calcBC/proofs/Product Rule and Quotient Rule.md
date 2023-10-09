Date: 09-20-2023
## Product Rule proof

$$\frac{d}{dx}\left[f(x)\cdot g(x)\right]=\lim_{h\to 0}\frac{f(x+h)g(x+h)\textcolor{red}{-f(x)g(x+h)+f(x)g(x+h)}-f(x)g(x)}{h}$$
$$=\lim_{h\to 0}\frac{g(x+h)(f(x+h)-f(x))}{h}+\lim_{h\to 0}\frac{f(x)(g(x+h)-g(x))}{h}$$

$$=\lim_{h\to 0}g(x+h)\cdot\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}+\lim_{h\to 0}f(x)\cdot\lim_{h\to 0}\frac{g(x+h)-g(x)}{h}=\boxed{g(x)\cdot f'(x)+f(x)\cdot g'(x)}$$
## Quotient Rule proof (derived from Product Rule)

$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]=\frac{d}{dx}\left[f(x)\cdot \frac{1}{g(x)}\right]=f'(x)\cdot \frac{1}{g(x)}+f(x)\cdot\left(-\frac{1}{g(x)^2}\cdot g'(x)\right)=\frac{f'(x)g(x)}{g(x)^2}-\frac{f(x)g'(x)}{g(x)^2}=\frac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$$
