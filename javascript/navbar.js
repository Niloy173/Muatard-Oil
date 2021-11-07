function openSidebar()
{
    document.getElementById("nav-section").style.width="200px";
    document.getElementById("close").style.display="block";
}

function close_sidebar()
{
    document.getElementById("nav-section").style.width="0";
    document.getElementById("close").style.display="none";
}


function open_profile()
{
    document.getElementById("profile_section_popup").style.display="block";
    document.getElementById("profile_section_popup").style.zIndex="99";
    
    

   // alert('Hello')
}

function close_login()
{
    document.getElementById("popup").style.display = "none";
    document.getElementById("nav-content-section").style.display="block";
}

function open_Home()
{
    window.location = "../index.html";
}




// testing
window.addEventListener('click',function(event){

    var loginSection = document.getElementById("popup");
   if(event.target == loginSection)
   {
       loginSection.style.display = "none";
   }

})


// scorll section 
