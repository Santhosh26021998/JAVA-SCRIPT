let i=document.getElementById("inpid");
let b=document.getElementById("butid");
let u=document.getElementById("ulid");
let bod=document.getElementById("bod");
let d2=document.getElementById("d2");
d2.style.marginTop="50px";
d2.style.backgroundColor="hsla(195, 100%, 50%, 0.525)";
bod.classList.add("text-center","p-5");
i.style.borderBlockColor="blue";
i.style.borderRadius="5px";
u.style.marginTop="20px";
b.style.marginLeft="10px";
b.style.backgroundColor=" #00bfffab";
b.style.borderRadius="10px";

function add()
{
    let item=i.value;
    let lis=document.createElement("li");
    lis.textContent=item;
    lis.style.listStyle="none";
    lis.style.fontSize="15px";
    i.value="";
    u.appendChild(lis);
    let but=document.createElement("button");
    but.textContent="DELETE";
    u.appendChild(but);
    but.onclick = function()
    {
        u.removeChild(lis);
        u.removeChild(but);
    }


}
