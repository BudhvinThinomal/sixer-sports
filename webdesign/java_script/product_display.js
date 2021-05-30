document.getElementById("btn01").addEventListener("click", function(event){
    event.preventDefault();
});

//disable checkbox counntry 
document.getElementById("country_select").disabled = true;
function popup() {
    var nettotal = 0;
    //Check checkbox values
    var ck_box01 = document.getElementById('checkbox01').checked;
    var ck_box02 = document.getElementById('checkbox02').checked;
    var ck_box03 = document.getElementById('checkbox03').checked;
    var ck_box04 = document.getElementById('checkbox04').checked;
    var ck_box05 = document.getElementById('checkbox05').checked;
    var ck_box06 = document.getElementById('checkbox06').checked;
    
    

    //Form valic=dation
    var validateFname = document.getElementById("f_name").value;
    var validateLname = document.getElementById("l_name").value;
    var validateEmail = document.getElementById("email").value;
    var validateSaddress = document.getElementById("st01").value;
    var validateSaddress02 = document.getElementById("st02").value;
    var validateCity = document.getElementById("city").value;

    if(validateFname && validateLname && validateEmail && validateSaddress && validateSaddress02 && validateCity != null ){
        document.getElementById("star01").style.visibility = "hidden";
        document.getElementById("star02").style.visibility = "hidden";
        document.getElementById("star03").style.visibility = "hidden";
        document.getElementById("star04").style.visibility = "hidden";
        document.getElementById("star05").style.visibility = "hidden";
        document.getElementById("star06").style.visibility = "hidden";

        //Main java starts here
        if (ck_box01 == true) {
            var Wtquantity = document.getElementById('Wt_quantity').value;
            var wtshirt_price = document.getElementById("wt_price").textContent;

            var total01 = wtshirt_price * Wtquantity;
            nettotal += total01;
        }
        if(ck_box02 == true) {
            var bhquantity = document.getElementById('bh_quantity').value;
            var bhPrice  = document.getElementById("bh_price").textContent;
    
            var total02 = bhPrice * bhquantity;
            nettotal += total02;
            //var promt02 = confirm(total02); //for testing purpose
        }
        if(ck_box03 == true) {
            var whquantity = document.getElementById('wh_quantity').value;
            var whPrice  = document.getElementById("wh_price").textContent;
    
            var total03 = whPrice * whquantity;
            nettotal += total03;
        }
        if(ck_box04 == true) {
            var ptquantity = document.getElementById('pt_quantity').value;
            var ptPrice  = document.getElementById("pt_price").textContent;
    
            var total04 = ptPrice * ptquantity;
            nettotal += total04;
        }
        if(ck_box05 == true) {
            var bh2quantity = document.getElementById('bh2_quantity').value;
            var bh2price  = document.getElementById("bh2_price").textContent;
    
            var total05 = bh2price * bh2quantity;
            nettotal += total05;
        }
        if(ck_box06 == true) {
            var DCquantity = document.getElementById('DC_quantity').value;
            var DCprice  = document.getElementById("DC_price").textContent;
    
            var total05 = DCprice * DCquantity;
            nettotal += total05;
        }
        

        //Confirm box edit
        var fName = document.getElementById('f_name').value;
        var lName = document.getElementById('l_name').value;

        if(ck_box01 == true) {
            var check_name01 = document.getElementById('checkbox01').value;
            var WtQuantity = document.getElementById('Wt_quantity').value;
            var WtSize = document.getElementById('Wt_size').value;
            var display01 = (" "+ WtQuantity + " " + check_name01 + " and in size " + WtSize);
        }
        else {
            display01 = (" ");
        } 

        if(ck_box02 == true) {
            var check_name02 = document.getElementById('checkbox02').value;
            var bhQuantity = document.getElementById('bh_quantity').value;
            var bhSize = document.getElementById('bh_size').value;
            var display02 = (" "+ bhQuantity + " " + check_name02 + " and in size " + bhSize);
        }
        else {
            display02 = (" ");
        } 
        
        if(ck_box03 == true) {
            var check_name03 = document.getElementById('checkbox03').value;
            var whQuantity = document.getElementById('wh_quantity').value;
            var whSize = document.getElementById('wh_size').value;
            var display03 = (" "+ whQuantity + " " + check_name03 + " and in size " + whSize);
        }
        else {
            display03 = (" ");
        } 

        if(ck_box04 == true) {
            var check_name04 = document.getElementById('checkbox04').value;
            var ptQuantity = document.getElementById('pt_quantity').value;
            var ptSize = document.getElementById('pt_size').value;
            var display04 = (" "+ ptQuantity + " " + check_name04 + " and in size " + ptSize);
        }
        else {
            display04 = (" ");
        }

        if(ck_box05 == true) {
            var check_name05 = document.getElementById('checkbox05').value;
            var bh2Quantity = document.getElementById('bh2_quantity').value;
            var bh2Size = document.getElementById('bh2_size').value;
            var display05 = (" "+ bh2Quantity + " " + check_name05 + " in size " + bh2Size);
        }
        else {
            display05 = (" ");
        } 

        if(ck_box06 == true) {
            var check_name06 = document.getElementById('checkbox06').value;
            var DCQuantity = document.getElementById('DC_quantity').value;
            var DCSize = document.getElementById('DC_size').value;
            var display06 = (" "+ DCQuantity + " " + check_name06 + " in size " + DCSize);
        }
        else {
            display05 = (" ");
        } 

        var output = (display01 + display02 +  display03 + display04 + display05 + display06);
        confirm("Dear " + fName + " " + lName + " you have orderd :" + output + " and your net total is $" + nettotal + ",00");
    }
    else {
        confirm("Required firlds are not filled");
        document.getElementById("star01").style.visibility = "visible";
        document.getElementById("star02").style.visibility = "visible";
        document.getElementById("star03").style.visibility = "visible";
        document.getElementById("star04").style.visibility = "visible";
        document.getElementById("star05").style.visibility = "visible";
        document.getElementById("star06").style.visibility = "visible";
        
    }
}