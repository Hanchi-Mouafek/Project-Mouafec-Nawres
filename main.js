// $(document).ready(function () {
    



// });
const data=[{
    src:"/image-project/0.jfif",
    title:"white t-shirt ",
    price:25,
},{ src:"/image-project/1.jfif",
title:"high heels",
price:42,

},{ src:"/image-project/2.jfif",
title:"shoes",
price:30,

},{ src:"/image-project/3.jfif",
title:"channel sunglasses",
price:150,

},{ src:"/image-project/4.jfif",
title:"gris t-shirt",
price:24,

},{ src:"/image-project/5.jfif",
title:" Black Men's shoes",
price:35,

},
{ src:"/image-project/6.jfif",
title:"black t-shirt",
price:22,

},
{ src:"/image-project/7.jfif",
title:"men's sunglasses",
price:80,

},
{ src:"/image-project/8.jfif",
title:"Black cap",
price:15,

},
{ src:"/image-project/9.png",
title:"white t-shirt",
price:20,

},
{ src:"/image-project/10.jfif",
title:"metallic sunglasses",
price:95,

},
{ src:"/image-project/11.jfif",
title:"nike shoes",
price:250,

},
{ src:"/image-project/12.jfif",
title:"pink sunglasses",
price:140,

},
{ src:"/image-project/13.jfif",
title:"black and modern sunglasses",
price:135,

},
{ src:"/image-project/14.jfif",
title:"glowing cap",
price:24,

},
{ src:"/image-project/15.jfif",
title:"shoes for classy women",
price:45,

},
{ src:"/image-project/16.jfif",
title:"T-shirt for men ",
price:32,

},{ src:"/image-project/17.jfif",
title:"simple dress ",
price:70,

},{ src:"/image-project/18.jfif",
title:"white dress",
price:95,

},{ src:"/image-project/19.jfif",
title:"men's sunglasses",
price:100,

},{ src:"/image-project/20.jfif",
title:"white high heels",
price:115,

},{ src:"/image-project/21.jfif",
title:"nike sneakers",
price:350,

},{ src:"/image-project/22.jfif",
title:"Prada sunglasses",
price:125,

},{ src:"/image-project/23.jfif",
title:"white dress",
price:89,

},{ src:"/image-project/24.jfif",
title:"scarpain",
price:900,

},{ src:"/image-project/25.png",
title:"red dress",
price:50,

},{ src:"/image-project/26.jfif",
title:"Ray-ban sunglasses ",
price:83,

},{ src:"/image-project/27.jfif",
title:"black shoes for men",
price:70,

},{ src:"/image-project/28.png",
title:"brown sunglasses",
price:110,

},{ src:"/image-project/29.jfif",
title:"bleu cap",
price:15,

},{ src:"/image-project/30.jfif",
title:"black sunglasses",
price:21,

}
]
var each=function(arr,fn){
    if(Array.isArray(arr)){
        for(var i=0;i<arr.length;i++){
            fn(arr[i])
        }
    }else if(!Array.isArray(arr)&&typeof(arr)==="object"){
        for(var j in arr){
            fn(arr[j])
        }
    }
}
//display articles

each(data,function(a){
    var product_box=$("<div class='product-box'></div>")
    var product_img=$(`<img src=${a.src} alt='' class='product-img'>`)
    var product_title=$(`<h2 class="product-title">${a.title}</h2>`)
    var price=$(`<span class="price"><span>${a.price}<i class='bx bx-dollar'></i></span></span>`)
    var tag=$(`<i class='bx bx-cart-add add-cart'></i>`)
    $(".shop-content").append(product_box);
    product_box.append(product_img)
    product_box.append(product_title)
    product_box.append(price)
    product_box.append(tag) 
})

var  cartIcon=$("#cart-icon")
var  cart=$(".cart")
var  closeCart=$("#close-cart")


cartIcon.click(function (e) { 
    e.preventDefault();
    cart.addClass("active");
});

closeCart.click(function (e) { 
    e.preventDefault();
    cart.removeClass("active");
});


$(".add-cart").click(function (e) { 
    e.preventDefault();


var table=[]
for(var i of $(".cart-product-title")){
    table.push(i.textContent)
}

var query=$(e.target).parent().find(".product-title")
if(!table.includes(query.text())){

    var cart_box=$(`<div class="cart-box"></div>`)
    $(".cart-content").prepend(cart_box)
    var cart_image=$(`<img src=${e.target.parentNode.children[0].src} alt="" class="cart-img">`)
    var detail_box=$(`<div class="detail-box"></div>`)
    var cart_title=$(`<div class="cart-product-title">${e.target.parentNode.children[1].textContent}</div>`)
    var cart_price=(`<div class="cart-price"><span>${e.target.parentNode.children[2].textContent}<i class='bx bx-dollar'></i></div>`)
    var inpt=$(`<input type="number" value="1" class="cart-quantity">`)
    var trash=$("<i class='bx bxs-trash cart-remove' ></i>")
    
    cart_box.append(cart_image)
    cart_box.append(detail_box)
    detail_box.append(cart_title)
    detail_box.append(cart_price)
    detail_box.append(inpt)
    cart_box.append(trash)
    updateTotal()
    $(".cart-remove").on("click",function (e) { 
        $(this).parent().remove()
        updateTotal()
    
    });
    $(".cart-quantity").change(function (e) { 
        updateTotal()
    });
}/*else{
    for (var i=0;i<$(".cart-box").length;i++){
        if (query.text()===$(".cart-box")[i])
    }
}*/


   
    
});



function updateTotal(){
    var cartBoxes=$(".cart-box")
    var total =0
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i]; 
        var PriceElement= +cartBox.children[1].children[1].textContent
        var quantity= cartBox.children[1].children[2].value
        total=total+(PriceElement*quantity)
    }
    var PriceTag=$(`<span>${total}<i class='bx bx-dollar'></i></span>`)
        $(".total-price span").replaceWith(PriceTag);
}















