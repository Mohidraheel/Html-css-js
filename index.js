let bagitems=[];
load();
function load()
{
  let bagitemsstr = localStorage.getItem("bagitems");

  bagitems=bagitemsstr ? JSON.parse(bagitemsstr) : [];
  displayonhome();
  displaybag();
  

}


function displayonhome()
{
  let itemscontainerElement = document.querySelector('.items-container');

 if(!itemscontainerElement)
 {
  return;
 }
let item1={
  id:'001',
  item_image:'1.jpg',
  company_name:'Adidas',
  rating:
  {
    stars:4.5,
    reviews:'1.4K',
  },
  item_name:'Rodium Plated CZ Floral Stud',
  
    current:1200,
    original:2500,
    discount:'35%',
  
}
let item1html= `
  <div class="item-container">
    <img class="item-image" src="${item1.item_image}" alt="item image">
    <div class="rating">
      ${item1.rating.stars} ⭐ | ${item1.rating.reviews}
    </div>
    <div class="company-name">
      ${item1.company_name}
    </div>
    <div class="item-name">
      ${item1.item_name}
    </div>
    <div class="price">
      <span class="current-price">RS ${item1.current}</span>
      <span class="original-price">RS ${item1.original}</span>
      <span class="discount">( ${item1.discount} OFF)</span>
    </div>
    <button class="btn-addtocart"onclick="addtobag('${item1.id}')">Add to Bag</button>
  </div>
`;

let item2=
{
  id:'002',
        item_image: '2.jpg',
        company_name: 'CUKOO',

        item_name: 'Women Padded Halter Neck Swimming Dress',
 
        original: 2599,
        current: 1507,
        discount: '42%',

        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            reviews: '2.4k',
        },
}

let item2html=`<div class="item-container">
    <img class="item-image" src="${item2.item_image}" alt="item image">
    <div class="rating">
      ${item2.rating.stars} ⭐ | ${item2.rating.reviews}
    </div>
    <div class="company-name">
      ${item2.company_name}
    </div>
    <div class="item-name">
      ${item2.item_name}
    </div>
    <div class="price">
      <span class="current-price">RS ${item2.current}</span>
      <span class="original-price">RS ${item2.original}</span>
      <span class="discount">( ${item2.discount} OFF)</span>
    </div>
    <button class="btn-addtocart"onclick="addtobag('${item2.id}')">Add to Bag</button>
  </div>`;



  let item3=
  {       id:'003',
        item_image: '3.jpg',
        company_name: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        
          original: 1599,
          current: 495,
          discount:'69%',
        
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            reviews: 249,
        },
  }

  let item3html=
  `<div class="item-container">
    <img class="item-image" src="${item3.item_image}" alt="item image">
    <div class="rating">
      ${item3.rating.stars} ⭐ | ${item3.rating.reviews}
    </div>
    <div class="company-name">
      ${item3.company_name}
    </div>
    <div class="item-name">
      ${item3.item_name}
    </div>
    <div class="price">
      <span class="current-price">RS ${item3.current}</span>
      <span class="original-price">RS ${item3.original}</span>
      <span class="discount">( ${item3.discount} OFF)</span>
    </div>
    <button class="btn-addtocart"onclick="addtobag('${item3.id}')">Add to Bag</button>
  </div>`;


  let item4=
  {
    id:'004',
    item_image: '4.jpg',
    company_name: 'HBL',
    item_name: 'Pakistan Cricket ODI Jersey',
    
      original: 3999,
      current: 1999,
      discount:'45%',
    
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        reviews: 1500,
    },
  }

  let item4html=
  `<div class="item-container">
    <img class="item-image" src="${item4.item_image}" alt="item image">
    <div class="rating">
      ${item4.rating.stars} ⭐ | ${item4.rating.reviews}
    </div>
    <div class="company-name">
      ${item4.company_name}
    </div>
    <div class="item-name">
      ${item4.item_name}
    </div>
    <div class="price">
      <span class="current-price">RS ${item4.current}</span>
      <span class="original-price">RS ${item4.original}</span>
      <span class="discount">( ${item4.discount} OFF)</span>
    </div>
    <button class="btn-addtocart"onclick="addtobag('${item4.id}')">Add to Bag</button>
  </div>`;

  let item5=
  {
    id:'005',
    item_image: '5.jpg',
    company_name: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    
      original: 1299,
      current: 699,
      discount:'50%',
    
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.4,
        reviews: 2000,
    },
  }

   let item5html=
   `<div class="item-container">
   <img class="item-image" src="${item5.item_image}" alt="item image">
   <div class="rating">
     ${item5.rating.stars} ⭐ | ${item5.rating.reviews}
   </div>
   <div class="company-name">
     ${item5.company_name}
   </div>
   <div class="item-name">
     ${item5.item_name}
   </div>
   <div class="price">
     <span class="current-price">RS ${item5.current}</span>
     <span class="original-price">RS ${item5.original}</span>
     <span class="discount">( ${item5.discount} OFF)</span>
   </div>
   <button class="btn-addtocart"onclick="addtobag('${item5.id}')">Add to Bag</button>
 </div>`;

 let item6=
 {
  id:'006',
   item_image: '6.jpg',
   company_name: 'Adidas',
   item_name: 'Nike Air Zoom Pegasus 37',
   
     original: 1999,
     current: 1099,
     discount:'45%',
   
   return_period: 14,
   delivery_date: '10 Oct 2023',
   rating: {
       stars: 4.3,
       reviews: 1800,
   },
 }

  let item6html=
  `<div class="item-container">
   <img class="item-image" src="${item6.item_image}" alt="item image">
   <div class="rating">
     ${item6.rating.stars} ⭐ | ${item6.rating.reviews}
   </div>
   <div class="company-name">
     ${item6.company_name}
   </div>
   <div class="item-name">
     ${item6.item_name}
   </div>
   <div class="price">
     <span class="current-price">RS ${item6.current}</span>
     <span class="original-price">RS ${item6.original}</span>
     <span class="discount">( ${item6.discount} OFF)</span>
   </div>
   <button class="btn-addtocart"onclick="addtobag('${item6.id}')">Add to Bag</button>
 </div>`;  


 let item7=
 {
  id:'007',
   item_image: '7.jpg',
   company_name: 'The Pakistan Garage Co',
   item_name: 'Nike Air Zoom Flyknit 2',
   
     original: 2499,
     current: 1299,
     discount:'50%',
   
   return_period: 14,
   delivery_date: '10 Oct 2023',
   rating: {
       stars: 4.4,
       reviews: 1900,
   },
 }

 let item7html=
 `<div class="item-container">
 <img class="item-image" src="${item7.item_image}" alt="item image">
 <div class="rating">
   ${item7.rating.stars} ⭐ | ${item7.rating.reviews}
 </div>
 <div class="company-name">
   ${item7.company_name}
 </div>
 <div class="item-name">
   ${item7.item_name}
 </div>
 <div class="price">
   <span class="current-price">RS ${item7.current}</span>
   <span class="original-price">RS ${item7.original}</span>
   <span class="discount">( ${item7.discount} OFF)</span>
 </div>
 <button class="btn-addtocart"onclick="addtobag('${item7.id}')">Add to Bag</button>
</div>`;   


let item8=
{
  id:'008',
  item_image: '8.jpg',
  company_name: 'Nivea',
  item_name: 'Men Fresh Deodrant 150ml',
  
    original: 1999,
    current: 1099,
    discount:'45%',
  
  return_period: 14,
  delivery_date: '10 Oct 2023',
  rating: {
      stars: 4.3,
      reviews: 1800,
  },
}

 let item8html=
 `<div class="item-container">
 <img class="item-image" src="${item8.item_image}" alt="item image">
 <div class="rating">
   ${item8.rating.stars} ⭐ | ${item8.rating.reviews}
 </div>
 <div class="company-name">
   ${item8.company_name}
 </div>
 <div class="item-name">
   ${item8.item_name}
 </div>
 <div class="price">
   <span class="current-price">RS ${item8.current}</span>
   <span class="original-price">RS ${item8.original}</span>
   <span class="discount">( ${item8.discount} OFF)</span>
 </div>
 <button class="btn-addtocart"onclick="addtobag('${item8.id}')">Add to Bag</button>
</div>`; 


  itemscontainerElement.innerHTML = item1html + item2html+item3html+item4html+item5html+item6html+item7html+item8html;

}


 function displaybag()
 {
  if(bagitems.length > 0)
  {
    let bagcontainerElement = document.querySelector('.bag-item-count');
    bagcontainerElement.innerText = bagitems.length;

  }
  else
  {
    let bagcontainerElement = document.querySelector('.bag-item-count');
    bagcontainerElement.innerText = ' '

  }

 }
function addtobag(itemID)
{
  bagitems.push(itemID);
  displaybag();
  localStorage.setItem("bagitems",JSON.stringify(bagitems));


}



