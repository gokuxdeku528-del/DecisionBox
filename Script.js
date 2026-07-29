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

alert("Decision Saved:\\n\\n"+decision);

});

}
