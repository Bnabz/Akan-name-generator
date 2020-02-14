function formAnalysis(){
  event.preventDefault();
  var gender = document.getElementsByName('gender').value;

  var yearInput = parseInt ( document.getElementById('year').value);
  var monthInput =  document.getElementById('month').value;
  var dayInput = parseInt (document.getElementById('date').value);
  var inputDate = new Date(yearInput+" "+monthInput+" "+dayInput);
  var weekday = inputDate.getDay();
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

}
