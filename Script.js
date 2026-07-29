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

showCategoryScreen(decision,options);

};

    }
function showCategoryScreen(decision, options){

const defaultCategories=[
"Price",
"Performance",
"Camera",
"Battery",
"Display"
];

app.innerHTML=`

<div class="screen">

<h1>Compare By</h1>

<p class="subtitle">${decision}</p>

<div id="categoryBox"></div>

<button id="addCategory">
+ Add Category
</button>

<br><br>

<button id="continueCategory">
Continue
</button>

</div>

`;

const box=document.getElementById("categoryBox");

defaultCategories.forEach(name=>{

const input=document.createElement("input");

input.className="categoryInput";

input.value=name;

box.appendChild(input);

});

document.getElementById("addCategory").onclick=()=>{

const input=document.createElement("input");

input.className="categoryInput";

input.placeholder="Custom Category";

box.appendChild(input);

};

document.getElementById("continueCategory").onclick=()=>{

const categories=[...document.querySelectorAll(".categoryInput")]

.map(i=>i.value.trim())

.filter(Boolean);

showWeightScreen(decision,options,categories);
};

    }
function showWeightScreen(decision,options,categories){

app.innerHTML=`
<div class="screen">

<h1>Importance</h1>

<p class="subtitle">
Move the sliders
</p>

<div id="weightBox"></div>

<button id="finishWeight">
Continue
</button>

</div>
`;

const box=document.getElementById("weightBox");

categories.forEach(category=>{

const item=document.createElement("div");

item.className="weightItem";

item.innerHTML=`

<p>${category}
<span id="${category}Value">5</span>/10
</p>

<input
type="range"
min="1"
max="10"
value="5"
class="weightSlider">

`;

box.appendChild(item);

const slider=item.querySelector(".weightSlider");
const value=item.querySelector("span");

slider.oninput=()=>{

value.textContent=slider.value;

};

});

document.getElementById("finishWeight").onclick=()=>{

const weights={};

document.querySelectorAll(".weightItem").forEach(item=>{

const name=item.querySelector("p").childNodes[0].textContent.trim();

const value=item.querySelector("input").value;

weights[name]=Number(value);

});

console.log(weights);

alert("Importance Saved!");

};

    }
