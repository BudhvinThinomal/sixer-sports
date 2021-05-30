function checkForm(form){
    var document;
    var name = documment.forms.namedItem("from1").innerHTML;

    if(name[0]  = ""){
        Window.alert("input feild name is compulsory");
        name.focus();
    }               

    if(documment.forms.getElementsById('improve').checked){
        //pass
    }
    else if(documment.forms.getElementsById('ok').checked){
        //pass				 
    }
    else if(document.forms.getElementsById('Gd').checked){
        //pass
    }
    else if(document.form.getElementsById('Ex').checked){
        //pass
    }
    else{
        alert("input feild Rating is compulsory")
    }                   
}