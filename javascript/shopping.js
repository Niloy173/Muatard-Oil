
var total_amount = 0;
var value = 0;
var auth = firebase.auth();
var db = firebase.database();
var database_ref = db.ref();
var user = auth.currentUser;
var Arr = [];


function option1()
{

   document.getElementById('western').style.display = "block";
   document.getElementById('native').style.display = "none";
}

function option2()
{
  document.getElementById('western').style.display = "none";
  document.getElementById('native').style.display = "block";
}

// document.getElementById('cancelBtn1').addEventListener('click',function(e){

//     document.getElementById('payment').style.display = "none";
//     document.getElementById('product_card_id').style.display = "block";
//     
// })

// document.getElementById('cancelBtn2').addEventListener('click',function(e){

//     document.getElementById('payment').style.display = "none";
//     document.getElementById('product_card_id').style.display = "block";
    
// })


function cancelFunc()
{
    document.getElementById('payment').style.display = "none";
    


}


function Append_obj(itemName,itemQuantity,itemPrize)
{
    let obj = {};
    

    obj.name = itemName;
    obj.quantity = itemQuantity;
    obj.prize = itemPrize;

    return obj;
   
    
}


function scrolfunc(){

    if(document.body.scrollTop >= 80 || document.documentElement.scrollTop >=80)
    {
        document.getElementById("content-section-id").style.display="none"
        document.getElementById("product_card_id").style.display = "none";
    }else{
        document.getElementById("content-section-id").style.display="block"
        
    }
}

let item_container = [];
var row_content = document.getElementById("list_item");
// var row_items = document.getElementById("Items_Row");
function showCard()
{
   

        document.getElementById('product_card_id').style.display = "block";
        document.getElementById('product_card_id').style.zIndex = "99";

        if(row_content.children.length == 0)
        {
            document.getElementById("status").style.display = "block";
            document.getElementById("ConfirmOrder").style.display = "none";
            document.getElementById("place-id-amount").style.display = "none";
        }

}

function close_product()
{
    document.getElementById('product_card_id').style.display = "none";
}

function Generate_String(length)
{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var len = characters.length;
    for(var i=0;i<length;i++)
    {
        result +=characters.charAt(Math.floor(Math.random()*len));
    }

    return result;


}

function AddToCart(num)
{
     
     
    document.getElementById("status").style.display = "none";
    document.getElementById("ConfirmOrder").style.display = "block";
    document.getElementById('placeBtn').style.display = "block"
    document.getElementById('place-id-amount').style.display = "flex";
    document.getElementById('placeAmountHead').style.display="block";
    document.getElementById('placeAmountValue').style.display="block";

    var rand_string = Generate_String(5);

    var row_items = document.createElement('div');
    row_items.id = rand_string;
    row_items.className = "child-content"

    
    let product_name = document.querySelectorAll('#product_name');
    let product_cost = document.querySelectorAll('#product_cost');
    let product_quanity = document.querySelectorAll('#product_quantity');
   

    

    let product_quanity_arr = [...product_quanity];
    let product_name_arr = [...product_name];
    let product_cost_arr = [...product_cost];

 

    //check for item already in the container or not
    let item_name = product_name_arr[num-1].innerHTML;
    if(item_container.includes(item_name))
    {
        alert("This item is already added in the Bucket");
        return;
    }



     // adding product name and quanity info in one colum;

     const col_details = document.createElement('div');
     col_details.className = "column col_item";
 
     let pTag = document.createElement('p');
     pTag.id = "Item_name";
     pTag.innerHTML = product_name_arr[num-1].innerHTML;
     

     item_container.push(product_name_arr[num-1].innerHTML);
    //  console.log(item_container);
     
 
     let subPtag = document.createElement('p');
     subPtag.id ="Quantity";
     subPtag.innerHTML = product_quanity_arr[num-1].innerHTML;
 
     col_details.appendChild(pTag);
     col_details.appendChild(subPtag);
 
     //adding cost to another column;
     const col_amount = document.createElement('div');
     col_amount.className = "column col_prize";
 
     let amountPTag = document.createElement('p');
     amountPTag.id ="prize";
     amountPTag.innerHTML = "৳ "+product_cost_arr[num-1].innerHTML;
     


 
     col_amount.appendChild(amountPTag);
     

    //adding number_quantity in first column

    const col_quantity = document.createElement('div');
    col_quantity.className = "column col_number";

    let quantityPtag = document.createElement('p');
    let quanitySpan = document.createElement('span');
    quanitySpan.innerHTML = " 1";
    quanitySpan.id ="quantity_number_default";

    let quantityPlus = document.createElement('a');
    let amount = amountPTag.innerHTML;
    amount  = amount.replace("৳ ","")
    
    
    let money = parseInt(amount);
    total_amount +=money;
    // console.log(total_amount);
    document.getElementById('placeAmountValue').innerHTML ="৳ "+ total_amount;

    quantityPlus.innerHTML = " +";
    quantityPlus.style.cursor = "pointer";
    quantityPlus.href="#";
    quantityPlus.onclick = function(e){
        let number = parseInt( quanitySpan.innerHTML );
        number +=1;
        quanitySpan.innerHTML =  number;
       

        
        
        value = parseInt(product_cost_arr[num-1].innerHTML);
        money += parseInt(product_cost_arr[num-1].innerHTML);
        //console.log(money);
       // console.log(amount);
        // amountPTag.innerHTML = amount;
        total_amount +=value;
        
        amountPTag.innerHTML = "৳ "+money;
        document.getElementById('placeAmountValue').innerHTML = "৳  "+ total_amount;

        // console.log(total_amount);
        
        

    }

    

    let quantityMinus = document.createElement('a');
    quantityMinus.innerHTML = " -";
    quantityPlus.style.cursor = "pointer";
    quantityMinus.href="#";
    quantityMinus.style.fontSize = "20px";
    quantityMinus.onclick = function(e){
        let number = parseInt( quanitySpan.innerHTML );
        
       
        

        if(number > 1)
        {
            number -=1;
            quanitySpan.innerHTML = number;
            

            value = parseInt(product_cost_arr[num-1].innerHTML);
            money -= parseInt(product_cost_arr[num-1].innerHTML);
            
            //console.log(data);
            
            total_amount -=value;
            amountPTag.innerHTML = "৳ "+money;
            // console.log(total_amount);
            document.getElementById('placeAmountValue').innerHTML = "৳  "+ total_amount;

        
        }else{
            quanitySpan.innerHTML = " 1";
            //amountPTag.innerHTML = "৳ "+product_cost_arr[num-1].innerHTML;
        }
    }

    quantityPtag.appendChild(quanitySpan);
    quantityPtag.appendChild(quantityPlus);
    quantityPtag.appendChild(quantityMinus);

    col_quantity.appendChild(quantityPtag);


    const col_delete_buck = document.createElement('div');
    col_delete_buck.className = "column col_delete"

    let dustBin = document.createElement('img');
     dustBin.id = "dustBin";
     dustBin.src = "./images/dustbin_.png";
     dustBin.style.textAlign = "center";
     dustBin.style.marginTop = "3px";
     dustBin.style.width = "15px";
     dustBin.onclick = function(e)
     {
          let CatchParent = this.parentNode.parentNode;
        //   console.log(CatchParent)
          

          

          
          
        //   let ParentId = CatchParent.id;
        //   let ParentNode = document.getElementById(ParentId);
          
          let Childreen = CatchParent.children;
          let SubChildreen = Childreen[1].children;
          let ItemName = SubChildreen[0].innerHTML;
          //console.log(ItemName);

          //getting quantity
          let Subquantity = Childreen[0].children;
          let QuantityNum = Subquantity[0].innerHTML;
        
        //getting the amount
          
          let SubChildreenPrize = Childreen[2].children;
          let itemPrize = SubChildreenPrize[0].innerHTML;
          value =parseInt(itemPrize.replace("৳ ",""));
          total_amount -=value;
          
          
          

          

          let getIndex = item_container.indexOf(ItemName);
          item_container.splice(getIndex,1);
          //console.log(item_container);

         document.getElementById('placeAmountValue').innerHTML = "৳  "+ total_amount;
          
          CatchParent.remove();

         
         if(row_content.children.length == 0)
         {
             showCard();
             value = 0;
             document.getElementById('placeBtn').style.display = "none";
             document.getElementById('place-id-amount').style.display = "none";

            //  document.getElementById('placeAmountHead').style.display = "none";
            //  document.getElementById('placeAmountValue').style.display = "none";
             
         }else
         {
            
         }
     }

     col_delete_buck.appendChild(dustBin);

     const borderDiv = document.createElement('div');
     borderDiv.className = "borderLine";



   

 
    row_items.style.padding = "5px";
    row_items.style.margin = "10px 0px 0px 0px";
    

    
    
    
    
    
    row_items.append(col_quantity);
    row_items.append(col_details);
    row_items.append(col_amount);
    row_items.append(col_delete_buck);
    row_items.append(borderDiv);

    
    
    
    row_content.appendChild(row_items);

    

    //console.log(row_items);

    


}

function close_login()
{
    document.getElementById("profile_section_popup").style.display = "none";
}

function ConfirmOrder()
{

   
       
            let Data = row_content.querySelectorAll('.child-content');
            let ArrData = [...Data];
            
            
           
        
        
             for(let i=0;i<ArrData.length;i++)
             {
                let ChildreenPart1 = ArrData[i].children;
                let x1 = ChildreenPart1[0].children;
        
                let y1 = x1[0].innerText.replace("+ -","");
                let S_quantity = y1;
        
                let ChildreenPart2 = ArrData[i].children;
                let x2 = ChildreenPart2[1].children;
        
                let y2 = x2[0].innerHTML
                let S_name = y2;
        
                let ChildreenPart3 = ArrData[i].children;
                let x3 = ChildreenPart3[2].children;
        
                let y3 = x3[0].innerHTML.replace("৳ ","");
                let S_prize = y3;

                
                Arr.push(Append_obj(S_name,S_quantity,S_prize));
                
                // + user.uid
                

                
                alert('Thank you for order.Please check the order history for your product status');
               
                // console.log(`${S_name} | ${S_prize} | ${S_quantity}`)
        
        }
        database_ref.child("OrderList/"+user.uid ).push(Arr);
            

        //   alert(" Go To Order Page and Pay the Bill to Confirm Order ");
            
            row_content.innerHTML = ""
            item_container = [];
            
            total_amount = 0;
            console.log(Arr)
            // showCard();
            
            
           
           
            // window.location = "../user_order.html";

        


   

    
}


function OpenPayment()
{

    firebase.auth().onAuthStateChanged(user => {

    if (!user) {

        alert("You need To Sign In First");
        window.location = "./index.html";
        
    }else{
           

            let v = document.getElementById('placeAmountValue').innerHTML
            document.getElementById('price_amount_total').innerHTML =v;

            document.getElementById('product_card_id').style.display = "none";

            document.getElementById('payment').style.display = "block";

    }

});

            
            

}




