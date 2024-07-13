

// sort by category
function showcat() {
    let cat = document.getElementById('category');
    let cloth = document.querySelectorAll('.clothes');
    let books = document.querySelectorAll('.books');
    let figure = document.querySelectorAll('.figures');
    if (cat.value == "cloth") {
        cloth.forEach(function (el) {
            el.style.display = "inline";
        })

        books.forEach(function (el) {
            el.style.display = "none";
        })

        figure.forEach(function (el) {
            el.style.display = "none";
        })
    }
    else if (cat.value == "books") {
        cloth.forEach(function (el) {
            el.style.display = "none";
        })

        books.forEach(function (el) {
            el.style.display = "inline"
        })

        figure.forEach(function (el) {
            el.style.display = "none";
        })
    }
    else if (cat.value == "figures") {
        books.forEach(function (el) {
            el.style.display = "none";
        })

        figure.forEach(function (el) {
            el.style.display = "inline"
        })

        cloth.forEach(function (el) {
            el.style.display = "none";
        })
    }
    else {
        books.forEach(function (el) {
            el.style.display = "inline";
        })

        figure.forEach(function (el) {
            el.style.display = "inline"
        })

        cloth.forEach(function (el) {
            el.style.display = "inline";
        })
    }
}

// login form

function showloginform(){
    if(document.getElementById("login_form").style.display=="none"){
        document.getElementById("login_form").style.display="block";
        document.getElementById('cart_menu').style.display = "none";
        document.getElementById('within_body').style.filter="blur(8px)";
        document.getElementById('within_body').style.cursor="none";
        document.getElementById('Signup_form').style.display = "none";
    }
    else{
        document.getElementById("login_form").style.display="none";
        document.getElementById('within_body').style.filter="none";
        document.getElementById('within_body').style.cursor="unset";
    }

}

function submitted_login_form(){
    if(document.getElementById('login_username').value !="" && isNaN(document.getElementById('login_username'))){
      document.getElementById('database_error').style.display="inline";
    }

    else{
        window.alert("Fill Username First")
    }
}

function reset_login_form(){
    document.getElementById('database_error').style.display="none";
}

// Sign up form

function showsignupform(){
    if(document.getElementById("Signup_form").style.display=="none"){
        document.getElementById("Signup_form").style.display="block";
        document.getElementById('cart_menu').style.display = "none";
        document.getElementById('within_body').style.filter="blur(8px)";
        document.getElementById('within_body').style.cursor="none";
        document.getElementById('login_form').style.display = "none";
    }
    else{
        document.getElementById("Signup_form").style.display="none";
        document.getElementById('within_body').style.filter="none";
        document.getElementById('within_body').style.cursor="unset";
        document.getElementById('showLoginForm').style.display="block";
        document.getElementById('showSignupForm').style.display="block";
    }
}

function submitted_signupform(){
    if(document.getElementById('signup_username').value != "" && isNaN(document.getElementById('signup_username')))
    {
        if(document.getElementById('signup_address').value != "" && isNaN(document.getElementById('signup_address')))
        {
            if(document.getElementById('signup_pincode').value != "")
            {
                if(document.getElementById('login_captcha').value == "Sumit06" || document.getElementById('login_captcha').value == "sumit06")
                {
                    document.getElementById('within_body').style.filter="none";
                    document.getElementById('within_body').style.cursor="default";
                    document.getElementById('Signup_form').style.display="none";
                    document.getElementById('showLoginForm').style.display="none";
                    document.getElementById('showSignupForm').style.display="none";
                    document.getElementById('aftercomplition').style.display="block"
                    document.getElementById('newname').innerHTML=document.getElementById('signup_username').value.toUpperCase();
                } 
                else{
                    window.alert("Invalid Captcha")
                    document.getElementById("Signup_form").style.display="block";
                    document.getElementById('cart_menu').style.display = "none";
                    document.getElementById('within_body').style.filter="blur(8px)";
                    document.getElementById('within_body').style.cursor="none";
                    document.getElementById('login_form').style.display = "none";
                }
            }  
            else{
                window.alert("Improper PinCode")
                document.getElementById("Signup_form").style.display="block";
                document.getElementById('cart_menu').style.display = "none";
                document.getElementById('within_body').style.filter="blur(8px)";
                document.getElementById('within_body').style.cursor="none";
                document.getElementById('login_form').style.display = "none";
            }  
        }
        else{
            window.alert("Improper Address")
            document.getElementById("Signup_form").style.display="block";
            document.getElementById('cart_menu').style.display = "none";
            document.getElementById('within_body').style.filter="blur(8px)";
            document.getElementById('within_body').style.cursor="none";
            document.getElementById('login_form').style.display = "none";
        } 
    }
    else{
        window.alert("Improper User name")
        document.getElementById("Signup_form").style.display="block";
        document.getElementById('cart_menu').style.display = "none";
        document.getElementById('within_body').style.filter="blur(8px)";
        document.getElementById('within_body').style.cursor="none";
        document.getElementById('login_form').style.display = "none";
    } 
}

function complete_submitted(){
    document.getElementById('within_body').style.filter="none";
    document.getElementById('Signup_form').style.display="none";
    document.getElementById('showLoginForm').style.display="none";
    document.getElementById('showSignupForm').style.display="none";
    document.getElementById('aftercomplition').style.display="block"
    document.getElementById('newname').innerHTML=document.getElementById('signup_username').value;
    submitted_signupform();
}

// show cart

function showcart() {
    document.getElementById('login_form').style.display = "none";
    document.getElementById('Signup_form').style.display = "none";
    document.getElementById('within_body').style.filter="none";
    let show = document.getElementById('cart_menu');
    if (document.getElementById('cart_menu').style.display == "none") {
        document.getElementById('cart_menu').style.display = "block";
    }
    else if(document.getElementById('cart_menu').style.display == "block"){
        document.getElementById('cart_menu').style.display = "none";
    }

}

function addedtocart1(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-1').style.display="";
    document.getElementById('pro-qty-cart1').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart1').value)*3099);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart1').value)*3099);
    document.getElementById('cart-1').style.display="none";
    document.getElementById('pro-qty-cart1').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart2(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-2').style.display="";
    document.getElementById('pro-qty-cart2').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart2').value)*799);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart2').value)*799);
    document.getElementById('cart-2').style.display="none";
    document.getElementById('pro-qty-cart2').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart3(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-3').style.display="";
    document.getElementById('pro-qty-cart3').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart3').value)*2499);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart3').value)*2499);
    document.getElementById('cart-3').style.display="none";
    document.getElementById('pro-qty-cart3').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart4(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-4').style.display="";
    document.getElementById('pro-qty-cart4').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart4').value)*999);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart4').value)*999);
    document.getElementById('cart-4').style.display="none";
    document.getElementById('pro-qty-cart4').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart5(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-5').style.display="";
    document.getElementById('pro-qty-cart5').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart5').value)*999);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart5').value)*999);
    document.getElementById('cart-5').style.display="none";
    document.getElementById('pro-qty-cart5').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart6(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-6').style.display="";
    document.getElementById('pro-qty-cart6').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart6').value)*1799);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart6').value)*1799);
    document.getElementById('cart-6').style.display="none";
    document.getElementById('pro-qty-cart6').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart7(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-7').style.display="";
    document.getElementById('pro-qty-cart7').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart7').value)*2999);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart7').value)*2999);
    document.getElementById('cart-7').style.display="none";
    document.getElementById('pro-qty-cart7').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart8(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-8').style.display="";
    document.getElementById('pro-qty-cart8').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart8').value)*  1899);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart8').value)*1899);
    document.getElementById('cart-8').style.display="none";
    document.getElementById('pro-qty-cart8').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart9(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-9').style.display="";
    document.getElementById('pro-qty-cart9').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart9').value)*  899);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart9').value)*899);
    document.getElementById('cart-9').style.display="none";
    document.getElementById('pro-qty-cart9').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart10(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-10').style.display="";
    document.getElementById('pro-qty-cart10').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart10').value)*  2999);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart10').value)*2999);
    document.getElementById('cart-10').style.display="none";
    document.getElementById('pro-qty-cart10').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart11(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-11').style.display="";
    document.getElementById('pro-qty-cart11').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart11').value)*  3499);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart11').value)*3499);
    document.getElementById('cart-11').style.display="none";
    document.getElementById('pro-qty-cart11').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart12(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-12').style.display="";
    document.getElementById('pro-qty-cart12').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart12').value)*  1499);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart12').value)*1499);
    document.getElementById('cart-12').style.display="none";
    document.getElementById('pro-qty-cart12').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart13(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-13').style.display="";
    document.getElementById('pro-qty-cart13').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart13').value)*  599);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart13').value)*599);
    document.getElementById('cart-13').style.display="none";
    document.getElementById('pro-qty-cart13').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart14(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-14').style.display="";
    document.getElementById('pro-qty-cart14').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart14').value)* 3499);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart14').value)*3499);
    document.getElementById('cart-14').style.display="none";
    document.getElementById('pro-qty-cart14').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart15(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-15').style.display="";
    document.getElementById('pro-qty-cart15').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart15').value)* 1299);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart15').value)*1299);
    document.getElementById('cart-15').style.display="none";
    document.getElementById('pro-qty-cart15').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function addedtocart16(){
    document.getElementById('box-add').innerHTML="Remove";
    document.getElementById('box-add').id='added';
    document.getElementById('cart-16').style.display="";
    document.getElementById('pro-qty-cart16').value=document.getElementById('prdt_qty').value;
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)+1;
    document.getElementById('number').value=document.getElementById('number').value+(parseInt(document.getElementById('pro-qty-cart16').value)* 899);

    let amt=document.getElementById('number').value;

    document.getElementById('added').addEventListener('click',unadd);
    function unadd(){
    document.getElementById('added').innerHTML="Add To Cart";
    document.getElementById('added').id='box-add';
    document.getElementById('number').value=amt-(parseInt(document.getElementById('pro-qty-cart16').value)*899);
    document.getElementById('cart-16').style.display="none";
    document.getElementById('pro-qty-cart16').value="0";
    document.getElementById('items-in-cart').innerHTML=parseInt(document.getElementById('items-in-cart').innerHTML)-1;

}
}

function gotolink(){
    if(document.getElementById("items-in-cart").innerHTML == "0") {
        window.alert("No Item In Cart")
    }
    else{
        window.location.href="card_details.html";
    }

}


