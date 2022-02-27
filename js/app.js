const getapi=()=>{
   fetch('https://fakestoreapi.com/products/')
   .then(res=>res.json())
   .then(data=>allData(data))
}
getapi();

// show all data
const allData =(data) =>{
   let allPost=document.getElementById('allPost');
   data.forEach(show => {
      // console.log(show)
      const col=document.createElement('div');
      col.classList.add('col-sm-12');
      col.classList.add('col-md-6');
      col.classList.add('col-lg-4');
      col.classList.add('col-xl-3');
      col.classList.add('gap-4');
      col.classList.add('pt-4');
      col.innerHTML=`
      <div id="card-bg">
      <img style="width:100%; height:350px;" class="img-fluid" src="${show.image}">
      <div class="card-body">
         <h5 class="card-title">${show.title.slice(0,10)}..</h5>
         <strong>$<span>${show.price}</span></strong>
         <p class="card-text">${show.description.slice(0,100)}..</p>
         <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
      </div>
      `;
      allPost.appendChild(col);
   });
}
// add electronics
const cliked = (nenuName)=>{
   // document.getElementById(nenuName);
   console.log(nenuName);
   const url=`https://fakestoreapi.com/products/category/${nenuName}`;
   fetch(url)
   .then(res=>res.json())
   .then(catData=>showCatData(catData))
}
const showCatData=(data)=>{
   // console.log(data)
   let allPost=document.getElementById('allPost');
   allPost.textContent='';
      data.forEach(catItems => {
      // console.log(show)
      const Catcol=document.createElement('div') ;
      Catcol.classList.add('col-sm-12');
      Catcol.classList.add('col-md-6');
      Catcol.classList.add('col-lg-4');
      Catcol.classList.add('col-xl-3');
      Catcol.classList.add('gap-4');
      Catcol.classList.add('pt-4');
      Catcol.innerHTML=`
      <div id="card-bg">
         <img style="width:100%; height:350px;" class="img-fluid" src="${catItems.image}">
         <div class="card-body">
            <h5 class="card-title">${catItems.title.slice(0,10)}..</h5>
            <strong>$<span>${catItems.price}</span></strong>
            <p class="card-text">${catItems.description.slice(0,100)}..</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
         </div>
      </div>
         `;
      allPost.appendChild(Catcol);
   });
}
let electronics=document.getElementById('electronics');
let jewelery=document.getElementById('jewelery');
let men=document.getElementById('men');
let women=document.getElementById('women');

electronics.addEventListener('click',()=>{
   let headerCat=document.getElementById('headerCat');
   headerCat.innerText='Electronics';
   cliked("electronics");
   electronics.style.color='#4649e7';
   jewelery.style.color='rgb(142, 142, 143)';
   men.style.color='rgb(142, 142, 143)';
   women.style.color='rgb(142, 142, 143)';

});
jewelery.addEventListener('click',()=>{
   let headerCat=document.getElementById('headerCat');
   headerCat.innerText='Jewelery';
   cliked("jewelery");
   jewelery.style.color='#4649e7';
   electronics.style.color='rgb(142, 142, 143)';
   men.style.color='rgb(142, 142, 143)';
   women.style.color='rgb(142, 142, 143)';

});
men.addEventListener('click',()=>{
   let headerCat=document.getElementById('headerCat');
   headerCat.innerText="Men's clothing";
   cliked("men's clothing");
   men.style.color='#4649e7';
   electronics.style.color='rgb(142, 142, 143)';
   jewelery.style.color='rgb(142, 142, 143)';
   women.style.color='rgb(142, 142, 143)';


});
women.addEventListener('click',()=>{
   let headerCat=document.getElementById('headerCat');
   headerCat.innerText="Women's clothing";
   cliked("women's clothing");
   women.style.color='#4649e7';
   electronics.style.color='rgb(142, 142, 143)';
   jewelery.style.color='rgb(142, 142, 143)';
   men.style.color='rgb(142, 142, 143)';
});


function loding(){
   document.getElementById('load').style.display='none';
}
loding();