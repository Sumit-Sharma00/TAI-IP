function complete_payment(){
    if ((document.getElementById("username").innerText !== "") || (isNaN(document.getElementById("username").value))){
        if ((document.getElementById("email").value !== "")) {
            if ((document.getElementById("user_address").value !== "")) {
                if ((document.getElementById("state").value !== "")) {
                    if ((document.getElementById("country").value !== "")) {
                        if ((document.getElementById("pin").value !== "")) {
                            if ((document.getElementById("card_name").innerText !== "") || (isNaN(document.getElementById("card_name").value))){
                                if ((document.getElementById("card_number").value !== "")) {
                                    if ((document.getElementById("month").innerText !== "") || (isNaN(document.getElementById("month").value))){
                                        if ((document.getElementById("year").value !== "")){
                                            if ((document.getElementById("cvv").value !== "")){
                                                document.getElementById("after_btn_click").style.display="block";
                                                document.getElementById("main_div").style.display="none";
                                            }
                                            else{
                                                window.alert("invalid CVV entered");
                                            }
                                        }
                                        else{
                                            window.alert("invalid Exp Year entered");
                                        }
                                    }
                                    else{
                                        window.alert("invalid Exp Month entered");
                                    }
                                }
                                else{
                                    window.alert("invalid Card Number entered");
                                }
                            }
                            else{
                                window.alert("invalid Name on Card entered");
                            }
                        }
                        else{
                            window.alert("invalid Pin Code entered");
                        }
                    }
                    else{
                        window.alert("invalid Country entered");
                    }
                }
                else{
                    window.alert("invalid state entered");
                }
            }
            else{
                window.alert("invalid address entered");
            }
        }
        else{
            window.alert("Invalid email entered")
        }
    }
    else{
        window.alert("invalid name entered");
    }
}