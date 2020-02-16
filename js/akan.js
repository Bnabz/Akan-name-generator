
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var yearInput = parseInt ( document.getElementById('year').value);
var monthInput =  document.getElementById('month').value;
var dayInput = parseInt (document.getElementById('date').value);
var inputDate = new Date(yearInput+" "+monthInput+" "+dayInput);
var weekday = inputDate.getDay();
var i = weekday;
var gender = document.getElementsByName('gender').value;









function formAnalysis(){
  event.preventDefault();



  console.log(weekday);

  function assignDay(){

    if (weekday === 0){
      dayOfWeek = "sunday"
    }
    else if (weekday=== 1){
      dayOfWeek = "monday"
    }
    else if (weekday === 2){
      dayOfWeek = "tuesday"
    }
    else if (weekday=== 3){
      dayOfWeek = "wednesday"
    }
    else if (weekday === 4){
      dayOfWeek = "thursday"
    }
    else if (weekday === 5){
      dayOfWeek = "friday"
    }
    else if (weekday=== 6){
      dayOfWeek = "saturday"
    }

  }
  assignDay();
  confirmGender();



  if (gender === "male"){
  console.log(maleNames[i]);
document.getElementById("printDay").innerHTML = dayOfWeek;
  }
  else if(gender === "female"){

  }
}


function confirmGender(){
   var sex = document.getElementsByName('gender');
    i = weekday;
   if(sex[0].checked == true){
      gender = "male";
  document.getElementById("printName").innerHTML = maleNames[i];

  }else if(sex[1].checked == true ){
      gender = "female";
  }


}
