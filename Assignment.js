
function validateform(){
    var name = document.forms["myform"]["fname"].value;
    var age = document.forms["mydform"]["age"].value;

    if(name == ""){
        alert("You must enter your name!!!");
        return false;
    }
    else if(age == ""){
        alert("You must enter your age!!!");
        return false;
    }
    else{
        alert("Submitted Successfully");
    }

}