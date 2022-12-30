var des=document.getElementById("desc").value;

function check()
{   
    let nam=document.getElementById("n1").value;
    let emid=document.getElementById("e1").value;
    let sp=document.getElementById("s1").value;
    
    
    if(nam.length<4)
    {
      document.getElementById("s1").innerHTML=("poor");
    }
    else
    {
       document.getElementById("s1").innerHTML=("Good");
     
     }

}
function che()
{   
    
    let emid=document.getElementById("e1").value;
    let s2=document.getElementById("s2").value;
    
    
    if(emid.length<4)
    {
      document.getElementById("s2").innerHTML=("poor");
    }
    else
    {
       document.getElementById("s2").innerHTML=("Good");
     
     }

}
function pay()
{
  let bp=document.getElementById("bp").value;
    let s3=document.getElementById("s3").value;
    
    
    if(bp<15000)
    {
      document.getElementById("s3").innerHTML=("invalid salary");
    }
    else if(bp>=15000)
    {
       document.getElementById("s3").innerHTML=("valid salary");
       bp=parseInt(bp);
     
   let h=document.getElementById("h1").value=((bp*15)/100);
   h=parseInt(h);  
   let d=document.getElementById("d1").value=((bp*10)/100);
   d=parseInt(d);  
   let p=document.getElementById("p1").value=((bp*5)/100);
   p=parseInt(p);  
   let g=document.getElementById("g1").value=(bp+d+p);
   let net=document.getElementById("net").value=(g-p);
    }
}

