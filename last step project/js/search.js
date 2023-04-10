// start navbar //

let hamburger = document.querySelector('.hamburger');
let navmenu = document.querySelector('.nav-menu');




hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

// end navbar //






// start fetch for categories //
const get_category_name = async () => {
    let category_id = document.querySelectorAll('.id1'); 
    const url = await fetch ('https://stepprojects.ge/rest/categories' ,{
      method:'GET',
    }).then (data => data.json())
        for (let i = 0; i <url.length; i++) {
          category_id[i].innerText = url[i].name; 
          
        }
      }
    
    
      get_category_name()
        
    
    
    // end fetch for categories // 







// start fetch for categories sub //




let instruments_subCategory = document.querySelectorAll('.instrument');
const get_product_name = async () => {
    const name = await fetch('https://stepprojects.ge/rest/subCategories',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < name.length; i++) {
      
      instruments_subCategory[i].innerText = name[i].name;
      
    }

}

 get_product_name();


// end fetch for categories sub //


// start fetch for products //





let price2 = document.querySelectorAll('.price2');
const get_price2 = async () => {
    const price = await fetch('https://stepprojects.ge/rest/products',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < price.length; i++) {
      
        price2[i].innerText = price[i].price +  `GEL`;
      
          // console.log(name[i].name);
    }

}
get_price2();


let products = document.querySelectorAll('.products');
const get_products_name = async () => {
    const name = await fetch('https://stepprojects.ge/rest/products',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < name.length; i++) {
      
        products[i].innerText = name[i].name;
      
          // console.log(name[i].name);
    }

}
get_products_name();


// end fetch for products //




// start fetch for brands //


let brands = document.querySelectorAll('.brands');
const get_brands_name = async () => {
    const name = await fetch('https://stepprojects.ge/rest/brands',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < name.length; i++) {
      
      brands[i].innerText = name[i].name;
      
          // console.log(name[i].name);
    }

}
get_brands_name();


// end fetch for brands //















// start price range //




const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// end price range //







// start filter products fuction //









// end filter products fuction //






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let increment = document.querySelectorAll('.incr-decr-box .increment ');
let num = 2000;
   let pricee = document.querySelectorAll('.pricee');
   
   console.log(typeof parseInt (pricee) );
for (const btn of increment) {
    btn.addEventListener('click', async function(){
         let id = this.getAttribute('data-cartid');
         let oper = this.getAttribute('data-operator');
         let Count  = this.parentElement.children[1].innerText;
         let CountCart  = oper == '+' ? Number(Count) - 1 : Number(Count) +1;

         this.parentElement.children[1].innerText = CountCart;
         let ragac = get_price2();
         let sum;
         if (CountCart) {
           for (let i = 0; i < pricee.length; i++) {
            price[i].innerText += sum;
            
            console.log(sum);

        // let pluss =  parseInt(pricee) + parseInt(pricee)
        // pricee[i].textContent = pluss;

           }

         }     

    })
   }


   let decrmenet = document.querySelectorAll('.incr-decr-box .decrement ');
   for (const btn of decrmenet) {
    btn.addEventListener('click', async function(){
         let id = this.getAttribute('data-cartid');
         let oper = this.getAttribute('data-operator');
         let Count  = this.parentElement.children[1].innerText;
         let CountCart  = oper != '+'  && Number(Count) != 0 ? Number(Count)  - 1 : Number(Count) = 0;

         this.parentElement.children[1].innerText = CountCart;
        
         
    })
   }











// add production in cart    end code //





