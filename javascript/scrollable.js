Window.onscroll = function() {scrollfunc()};

function scrollfunc() {

    if (document.body.scrollTop >=80 || document.documentElement.scrollTop >=80)
    {
        
        console.log(document.body.scrollTop)

       document.getElementById("popup").style.display = "none";
        

    }else
    {
        document.getElementById("popup").style.display = "block";
        

    }
}