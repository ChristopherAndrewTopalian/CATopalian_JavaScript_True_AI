// makeLogicGateButtons.js

function makeLogicGateButtons()
{
    let logicButtonsDiv = ce("div");
    logicButtonsDiv.id = "logicButtonsDiv";
    logicButtonsDiv.className = "logicButtonsDiv";
    logicButtonsDiv.style.position = 'absolute';
    logicButtonsDiv.style.left = '180px';
    logicButtonsDiv.style.top = '70px';
    //logicButtonsDiv.style.width = '375px';
    logicButtonsDiv.style.zIndex = 1000;
    ba(logicButtonsDiv);

    //-//

    for (let x = 0; x < logic.length; x++)
    {
        let logicGateButton = ce("button");
        logicGateButton.textContent = logic[x].nameShort;
        logicGateButton.id = "logicGateButton" + logic[x].name;
        logicGateButton.className = "logicGateButton";
        logicGateButton.style.alignSelf = 'flex-start';
        logicGateButton.onclick = function()
        {
            clickSound();
            makeLogicCalculator(logic[x].name);
        };

        logicGateButton.onmouseover = function()
        {
            hoverSound();
        };
        logicButtonsDiv.append(logicGateButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

