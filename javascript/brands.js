var slider = 0;


var white = document.getElementById("white");
var black = document.getElementById("black");


show_slider()

function show_slider()
{
    var section = document.getElementsByClassName("mybrand");


    for(let i=0;i<section.length;i++)
    {
        section[i].style.display = "none";
    }
    slider++;
    if ( slider > section.length)
    {
        slider = 1;
    }

    section[slider-1].style.display="block";
    setTimeout(show_slider,2000);

}

function white_mastard(){

    document.getElementById("white-oil").style.display="block";
    document.getElementById("black-oil").style.display = "none";
    document.getElementById("indian-oil").style.display="none";

    document.getElementById("white").style.borderBottom="5px solid red";
    document.getElementById("white").style.padding="5px";
    document.getElementById("black").style.borderBottom = "none";
    document.getElementById("indian").style.borderBottom = "none";
}


function black_mastard(){

    document.getElementById("white-oil").style.display="none";
    document.getElementById("black-oil").style.display = "block";
    document.getElementById("indian-oil").style.display="none";


    document.getElementById("white").style.borderBottom="none";
    document.getElementById("indian").style.borderBottom = "none";

    document.getElementById("black").style.borderBottom = "5px solid red";
    document.getElementById("black").style.padding="5px";
    

}

function indian_mustard()
{
    document.getElementById("black-oil").style.display = "none";
    document.getElementById("white-oil").style.display="none";
    document.getElementById("indian-oil").style.display= "block";


    document.getElementById("white").style.borderBottom="none";
    document.getElementById("indian").style.borderBottom = "5px solid red";
    document.getElementById("indian").style.padding="5px";

    document.getElementById("black").style.borderBottom = "none";

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

function close_login()
{
    document.getElementById("profile_section_popup").style.display = "none";
}
function shopping_section()
{
    alert('Go To Shopping section');
    window.location="./shopping.html";
}


window.addEventListener('resize',function(event)
{
    if(this.screen.width <=530)
    {
        this.document.getElementById('black').innerHTML = 'Black'
        this.document.getElementById('indian').innerHTML = 'Indian'
        this.document.getElementById('white').innerHTML = 'White'
    }else
    {
        this.document.getElementById('black').innerHTML = 'Black Mustard'
        this.document.getElementById('indian').innerHTML = 'Indian Mustard'
        this.document.getElementById('white').innerHTML = 'White Mustard'
    }
})