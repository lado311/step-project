// start navbar //

let hamburger = document.querySelector('.hamburger');
let navmenu = document.querySelector('.nav-menu');




hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

// end navbar //



// start carusel //


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carusel");
  let dots = document.getElementsByClassName("dot");


  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// end carusel //







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



// start product name  //



let pc = document.querySelectorAll('.pc');
const get_pc_name = async () => {
    const name = await fetch('https://stepprojects.ge/rest/products',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < name.length; i++) {
      
      pc[i].innerText = name[i].name;
      
          // console.log(name[i].name);
    }

}
get_pc_name();


// end product name  //





// start product price //


let product_price = document.querySelectorAll('.price');
const get_price = async () => {
    const price = await fetch('https://stepprojects.ge/rest/products',{
      method:'GET',
    }).then(response => response.json());
    for (let i = 0; i < price.length; i++) {
      
      product_price[i].innerText = price[i].price += `  ` +`GEL`;
      
          // console.log(price[i].price);
    }

}
get_price();




// end product price //



// start product image //



// let productImage = document.querySelectorAll ('.laptop-div img');

// const getImage = async function () {
//   const prodimage = await fetch ('https://stepprojects.ge/rest/products' , {
//     method:'GET',
//   }).then (data => data.json())
//     .then (data => {
//        let imgdiv = document.querySelector('laptop-div');

//   let newimg = new Image ();

//   let src = data.pic != null ? 'data:image/png;base64,'+ data.pic : 'products/placeholder.png';
//   newimg.src =  src;

//   for (let i = 0; i < imgdiv.length; i++) {
//     const element = array[i];
//       element.appendChild(newimg);

//   }

//     })  
 

  

// }





// end product image //





// end fetch for products //




