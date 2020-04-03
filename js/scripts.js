function buttonClick(){
    var bdate = document.getElementById("bdate").value;
    var date = new Date(bdate).getDay();

    var male1 = document.getElementById("male1");
    var female1 = document.getElementById("female1");

    if(male1.checked==true){
        const bnames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const result = bnames[date];
        alert("Your Akan name is "+result)
    }

    else if(female1.checked==true){
        const gnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        const result = gnames[date];
        alert("Your Akan name is "+result)
    }

    else{
        alert("Gender not submitted");
    }
    
}
