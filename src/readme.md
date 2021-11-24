Instrunctions and Logic
==============================================================
Instructions
-------------------------------------------------------------
To run the codes, 
1) ensure you've got ts-node installed;
npm i -g ts-node

2) install code runner, if you're on vs-code, go to market-place, search and install
3) install typescript
npm i -g typescript
compile typscript codes with the command "tsc"

run all codes with: ts-node <filename>
e.g ts-node q1
=================================================================
Logic
--------------------------------------------------
Question 1:
Logic: use of additive identity for operation
--------------------------------------------------
Question 2:
Logic
-------------------------------------------------
Question 3: 
Logic: If both kangaroos must be at the same point (location) at the same time,
it then implies that the time taken for both kangaroos to cover that distance must be equal.

we know that; Velocity = Distance/Time
Hence, for both knagaroos, V1 = D1/T1
V2 = D2/T2

However, it is known that both kangaroos didn't start from the same point and it wasn't exact, as to which was ahead of the other. Moreover, they must finish at the same point and same time. Therefore,

0-----------x1---------(Sm-x1)----------Sm
0----------------x2-----(Sm-x2)---------Sm

distance D1, covered by kangaroo1 = Sm - x1
distance D2, covered by kangaroo2 = Sm - x2

Hene, V1 = (Sm-x1)/T1 ----- (1)
      V2 = (Sm-x2)/T2 ----- (2)

because the division of numbers could possibly result into irrational numbers,
let p, be a correctional value for rationalising;

    p*V1 = (Sm-x1)/T1 ----- (1a)
    p*V2 = (Sm-x2)/T2 ----- (2a)
since T1 = T2 (same time), let T1 = 1
p*V1 = Sm - x1, Sm = p*V1 + x1
p*V2 = Sm - X2, Sm = p*V2 + x2

i.e p*V1 + x1 = p*V2 + x2

========================================================================================
p*(V1 - V2) = x2 - x1 ----- this is the condition for which both kangaroos would always meet
V1 must be > V2
x2 must be > x1
the multiplication of the correctional value and difference between V1 and V2 must equal
the difference between x2 and x1
==========================================================================================

The code conditions would be:
if p = 1 and V1 - V2 !== x2 - x1 return NO

