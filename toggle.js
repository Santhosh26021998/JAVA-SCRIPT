let d=document.getElementById("d1");
d.classList.add("text-center","p-5");
let chid="checkboxid";
let laid="labelid";

function oncheckboxchange()
{
    lbl.classList.toggle("strike-through");
}

let checkinp = document.createElement("input");
checkinp.type="checkbox";
checkinp.id=chid;

checkinp.onclick = function()
{
    oncheckboxchange();

};

d.appendChild(checkinp);

let lbl=document.createElement("label");
lbl.classList.add("checkbox-label");
lbl.setAttribute("for",chid);
lbl.id=laid;
lbl.textContent="I am a Label";

d.appendChild(lbl);