const app = document.getElementById("app");

app.innerHTML = `
<div class="screen">

<div class="logo">🧠</div>

<h1>DecisionBox</h1>

<p class="subtitle">
Can't decide?<br>
Let's figure it out together.
</p>

<button id="startBtn">
Start Decision
</button>

</div>
`;

document.getElementById("startBtn").addEventListener("click", () => {
    showDecisionScreen();
});

function showDecisionScreen(){

app.innerHTML = `
<div class="screen">

<h1>New Decision</h1>

<p class="subtitle">
What are you trying to decide?
</p>

<input
id="decisionInput"
type="text"
placeholder="Example: Which phone should I buy?">

<button id="continueBtn">
Continue
</button>

</div>
`;

document
.getElementById("continueBtn")
.addEventListener("click", () => {

const decision =
document.getElementById("decisionInput").value.trim();

if(decision===""){
alert("Please enter your decision.");
return;
}

showOptionsScreen(decision);
});

}
function showOptionsScreen(decision){

app.innerHTML=`

<div class="screen">

<h1>Your Options</h1>

<p class="subtitle">${decision}</p>

<div id="optionsBox">

<input class="optionInput" placeholder="Option 1">

<input class="optionInput" placeholder="Option 2">

</div>

<button id="addOption">
+ Add Option
</button>

<br><br>

<button id="nextBtn">
Next
</button>

</div>

`;

document.getElementById("addOption").onclick=()=>{

const input=document.createElement("input");

input.className="optionInput";

input.placeholder="Another Option";

document
.getElementById("optionsBox")
.appendChild(input);

};

document.getElementById("nextBtn").onclick=()=>{

const options=[...document.querySelectorAll(".optionInput")]

.map(i=>i.value.trim())

.filter(Boolean);

if(options.length<2){

alert("Add at least 2 options.");

return;

}

alert(
"Decision:\\n"+
decision+
"\\n\\nOptions:\\n"+
options.join("\\n")
);

};

    }
