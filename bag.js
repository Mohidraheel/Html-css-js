

let bagitemobject;
loadpage();
function loadpage()
{
  loadbagitem();
  displayonhomepage();
}
function loadbagitem()
{
  console.log(bagitems);
  bagitemobject=bagitems.map(itemID=>
  {
    for(let i=0;i<items.length;i++)
    {
      if(itemID==items[i].id)
      {
        return items[i];

      }
    }
  }
  )
  console.log(bagitemobject);

 


}
function displayonhomepage()
{
  let element=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagitemobject.forEach(bagitems => {
    innerHTML+=generatehtml(bagitems);
    
  });
  element.innerHTML = innerHTML
  // element.innerHTML
   
}

function removefrombag(itemid)
{
  bagitems=bagitems.filter(bagitemid=>bagitemid!=itemid)
  localStorage.setItem("bagitems",JSON.stringify(bagitems));
  loadbagitem();
  displayonhomepage();

}



function generatehtml(item)
{
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">${item.current}</span>
      <span class="original-price">${item.original}</span>
      <span class="discount-percentage">${item.discount}</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period}</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart"onclick="removefrombag(${item.id})">X</div>
</div>
`;

}
function displaybagsummary()
{
  let totalgst=0;
  totaldiscount=0; total=0;
  let Conveniencefee=99;
  let itemamount;

  for(let i=0;i<bagitemobject.length;i++)
  {
  itemamount=bagitemobject[i].original
    totalgst+=bagitemobject[i].current;
    totaldiscount+=bagitemobject[i].discount;
    total=totalgst;
  }
  let totalamount;
  total=total+Conveniencefee;
  let bagsummaryitem=document.querySelector('.bag-summary');
  bagsummaryitem.innerHTML=`
  <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagitemobject.length}) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">${itemamount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount</span>
              <span class="price-item-value priceDetail-base-discount">${totaldiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">${total}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
          `;


}

displaybagsummary();