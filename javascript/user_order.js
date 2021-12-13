// import { lis } from './shopping.js'
// console.log(lis)

var auth = firebase.auth();
var db = firebase.database();

const parentQuantityDiv = document.getElementById("quantityId");
const parentNameDiv = document.getElementById("nameId");
const parentPrizeDiv = document.getElementById("prizeId");
const parentStatusDiv = document.getElementById("pstatus");

let sum = 0;
let ArrayData_cut = [];
let ArrayData_real = [];
let Random_arr = ["Pending","Pending","Pending","Pending"]; // For testing purpose .Don't compare this with real life

function createQuantityBlock(value)
{
    const span = document.createElement('span');
    span.className = "P_quantity";
    span.innerHTML = value
    parentQuantityDiv.appendChild(span);
}
function createNameBlock(value)
{
    let cut_ = value.split(" ");
   
    let new_name = cut_[0] +" "+ cut_[1];
    ArrayData_cut.push(cut_[0]);
    ArrayData_real.push(new_name);
   
    const span = document.createElement('span');
    span.className = "P_name"
    span.innerHTML = new_name;
    parentNameDiv.appendChild(span);

}

function CreateStatus()
{

  const getValue = Random_arr[Math.floor(Math.random()*Random_arr.length)];
  const span = document.createElement('span');
  if (getValue == "Pending")
  {
    
    span.className = "P_status color_red";
  }else{

    span.className = "P_status color_green";
  }
  span.innerHTML = getValue;
  parentStatusDiv.appendChild(span);
}
function createPrizeBlock(value)
{
    
    const span = document.createElement('span');
    span.className = "P_prize";
    span.innerHTML = "৳ "+value;
    sum +=parseInt(value);
    parentPrizeDiv.appendChild(span);

    // document.getElementById("prize-summary").innerHTML = "Total : ৳ " + sum;
    // document.getElementById("prize-summary").style.display = "block";
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var userId = db.ref("OrderList/" + user.uid);
    console.log(userId);

    userId.once("value", function (snapshot) {
      snapshot.forEach(function (child) {

        child.forEach(function(inner){

          createQuantityBlock(inner.val().quantity);
          createNameBlock(inner.val().name);
          createPrizeBlock(inner.val().prize);
          CreateStatus()

        });
        
       
      });
    });
  }
});



window.addEventListener('resize',function(e){

  if(this.screen.width <=430)
  {
    let data = this.document.querySelectorAll('.P_name');
    
    for(let i=0;i<data.length;i++)
    {
      data[i].innerHTML = ArrayData_cut[i]

    }
  }else{

    let data = this.document.querySelectorAll('.P_name');
    
    for(let i=0;i<data.length;i++)
    {
      data[i].innerHTML = ArrayData_real[i]

    }
  }

})

