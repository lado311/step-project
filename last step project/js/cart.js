// start navbar //

let hamburger = document.querySelector('.hamburger');
let navmenu = document.querySelector('.nav-menu');




hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

// end navbar //


// start increment decrement on products //



let number = document.querySelectorAll('.incr-decr-box h3');
         
somenumber = 0;

let price = document.querySelector('.price-box h2');






// for (let i = 0; i < increment.length; i++) {
    
// const incre = increment[i];
//     incre.addEventListener('click' , function(){
             
//         if (incre) {
//             for (let i = 0; i < number.length; i++) {
            
            
//             }
//         }
//     })
    
// }
let increment = document.querySelectorAll('.incr-decr-box .increment ');

for (const btn of increment) {
    btn.addEventListener('click', async function(){
         let id = this.getAttribute('data-cartid');
         let oper = this.getAttribute('data-operator');
         let Count  = this.parentElement.children[1].innerText;
         let CountCart  = oper == '+' ? Number(Count) - 1 : Number(Count) +1;

         this.parentElement.children[1].innerText = CountCart;
         
    })
   }


   let decrmenet = document.querySelectorAll('.incr-decr-box .decrement');

   

   for (const btn of decrmenet) {
    btn.addEventListener('click', async function(){
         let id = this.getAttribute('data-cartid');
         let oper = this.getAttribute('data-operator');
         let Count  = this.parentElement.children[1].innerText;
         let CountCart  = oper != '+'  && Number(Count) != 0 ? Number(Count)  - 1 : Number(Count) = 0;

         this.parentElement.children[1].innerText = CountCart;
        //  if (CountCart != 0) {
        //     CountCart--;
        //  }
         
    })
   }






// decrement.forEach(decre => {
//     decre.addEventListener('click' , function(){
//         if(somenumber != 0){
//             somenumber--;

//         }
//         number.textContent = somenumber;
//     })
// });






// start increment decrement on products //
