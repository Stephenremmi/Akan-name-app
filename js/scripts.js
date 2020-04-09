function buttonClick(){
    var birthDate = document.getElementById("birthDate").value;
    var date = new Date(birthDate).getDay();

    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if(male.checked==true){
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const result = maleNames[date];
        swal("Congratulations!","Your Akan name is " + result)
        
    }
        

    else if(female.checked==true){
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        const result = femaleNames[date];
        swal("congratulations!","Your Akan name is " + result)
    }

    else{
        swal({
            title:"Oops!!",
            text: "Enter the empty fields",
            icon: "warning",
          });
    }
    
};
        swal({        
            title:"Welcome!!",
            text: "AKAN WEB APP (2020)",
            icon: "success",
        })
