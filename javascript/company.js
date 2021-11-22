var company = document.getElementById("company-paragraph");
var vision = document.getElementById("purpose-paragraph");
var system = document.getElementById("system-paragraph");
var header_content = document.getElementById("centered");

var x = window.matchMedia("(max-width:700px)");
var y = window.matchMedia("(min-width:768px)");

var txt = "OUR COMPANY";


window.onresize = function() {onresizeable()};

function onresizeable()
{
    if(x.matches)
    {
        header_content.innerHTML= txt;
        document.getElementById("company-id").style.display="block";
        document.getElementById("vision-id").style.display="block";
        document.getElementById("system-id").style.display="block";
    }else{
       
        if(company.onclick)
        {
            
            company_func();
        }
    }


}

// remove content function when user scroll down 70px

window.onscroll = function() {scrollfunction()};

function scrollfunction()
{
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >=80)
    {
        
        document.getElementById("content-section-id").style.display="none";
    }else
    {
        document.getElementById("content-section-id").style.display="block";
        

    }
}







function vision_func(){

    company.style.border="none";
    system.style.border="none";
    vision.style.borderBottom="6px solid red";
    

    
    header_content.innerHTML = "Purpose & Vision"
    
    

    document.getElementById("company-id").style.display="none";
    document.getElementById("vision-id").style.display="block";
    document.getElementById("system-id").style.display="none";
}

function company_func()
{
    vision.style.border="none";
    system.style.border="none";
    company.style.borderBottom = "6px solid red"
    header_content.innerHTML = "Our Company";
    document.getElementById("company-id").style.display="block";
    document.getElementById("vision-id").style.display="none";
    document.getElementById("system-id").style.display="none";
}


function system_func()

{   
    vision.style.border="none";
    company.style.border="none";
    system.style.borderBottom="6px solid red";
    header_content.innerHTML = "System Functionality"

    document.getElementById("company-id").style.display="none";
    document.getElementById("vision-id").style.display="none";
    document.getElementById("system-id").style.display="block";
}

// window.onscroll = function() {scrollfunction()}
// {
//     function scrollfunction()
//     {
//         if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >=80)
//     {
        
//         document.getElementById("content-part-id").style.display="none";
//     }else
//     {
//         document.getElementById("content-part-id").style.display="block";
        

//     }
//     }
// }

function close_login()
{
    document.getElementById("profile_section_popup").style.display = "none";
}

function shopping_section()
{
    alert('Go To Shopping section');
    window.location="./shopping.html";
}