var count=0;


function dropfunction()
{
    if(document.getElementById("content").style.display == "none")
    {
        document.getElementById("content").style.display="block";
    }else
    {
        document.getElementById("content").style.display="none";

    }
}



window.onclick = function(event){

    if(!event.target.matches('.droptext'))
    {
        document.getElementById("content").style.display="none";
    }
   
}





