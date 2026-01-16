// gateContradiction.js

function gateContradiction(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return "One or Both False or True.";
    }
    else
    {
        return 0;
    }
}

//----//

/*
CONTRADICTION
0000

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

