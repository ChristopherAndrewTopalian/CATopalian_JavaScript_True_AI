// makeTrueAiDiagram.js

function makeTrueAiDiagram()
{
    let trueAiDiagram = ce('img');
    trueAiDiagram.id = 'trueAiDiagram';
    if (online == false)
    {
        trueAiDiagram.src = 'src/media/textures/true_ai_by_christopher_topalian.png';
    }
    else
    {
        trueAiDiagram.src = 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/true-ai-by-christopher-topalian_orig.png';
    }
    trueAiDiagram.style.position = 'absolute';
    trueAiDiagram.style.left = '560px';
    trueAiDiagram.style.top = '33px';
    trueAiDiagram.style.width = '370px';
    ba(trueAiDiagram);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

