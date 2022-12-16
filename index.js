
cal.addEventListener('click', mainfunc)
reset.addEventListener('click', resetfunc)

function resetfunc() {
   document.getElementById('resultFrom').innerHTML = ""
   document.getElementById('insertData').innerHTML = ""
   document.getElementById('resulTo').innerHTML = ""
   document.getElementById('Result').innerHTML = ""
   data.value = ''
}

function mainfunc() {

   var from = document.getElementById('from');
   var to = document.getElementById('to');
   var data = document.getElementById('data');
   var fromVal = from.value
   var toVal = to.value
   var dataVal = data.value
   if (fromVal && toVal && dataVal) {
      switch (true) {
         // Kilogram to ...
         case (fromVal === 'kilogram') && (toVal === 'gram'):
            document.getElementById('resultFrom').innerHTML = "Kilogram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "Gram"
            document.getElementById('Result').innerHTML = dataVal * 1000
            break;
         case (fromVal === 'kilogram') && (toVal === 'milligram'):
            document.getElementById('resultFrom').innerHTML = "Kilogram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "Milligram"
            document.getElementById('Result').innerHTML = dataVal * 1000000
            break;
         case (fromVal === 'kilogram') && (toVal === 'kilogram'):
            document.getElementById('resultFrom').innerHTML = ""
            document.getElementById('insertData').innerHTML = ""
            document.getElementById('resulTo').innerHTML = ""
            document.getElementById('Result').innerHTML = 'Both are same units'
            break;



         // gram to...
         case (fromVal === 'gram') && (toVal === 'kilogram'):
            document.getElementById('resultFrom').innerHTML = "Gram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "kilogram"
            document.getElementById('Result').innerHTML = dataVal * 0.001
            break;
         case (fromVal === 'gram') && (toVal === 'milligram'):
            document.getElementById('resultFrom').innerHTML = "Gram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "Milligram"
            document.getElementById('Result').innerHTML = dataVal * 1000
            break;
         case (fromVal === 'gram') && (toVal === 'gram'):
            document.getElementById('resultFrom').innerHTML = ""
            document.getElementById('insertData').innerHTML = ""
            document.getElementById('resulTo').innerHTML = ""
            document.getElementById('Result').innerHTML = "Both are same units!"
            break;



         //  milligram  to ...
         case (fromVal === 'milligram') && (toVal === 'kilogram'):
            document.getElementById('resultFrom').innerHTML = "Milligram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "kilogram"
            document.getElementById('Result').innerHTML = dataVal * 0.000001
            break;

         case (fromVal === 'milligram') && (toVal === 'gram'):
            document.getElementById('resultFrom').innerHTML = "milligram"
            document.getElementById('insertData').innerHTML = dataVal
            document.getElementById('resulTo').innerHTML = "Gram"
            document.getElementById('Result').innerHTML = dataVal * 0.001
            break;
         case (fromVal === 'milligram') && (toVal === 'milligram'):
            document.getElementById('resultFrom').innerHTML = ""
            document.getElementById('insertData').innerHTML = ""
            document.getElementById('resulTo').innerHTML = ""
            document.getElementById('Result').innerHTML = "Both are are"
            break;


      


         default:
            error.value = "Something went wrong"

      }
   } else {
      alert("please enter data")
   }


}
