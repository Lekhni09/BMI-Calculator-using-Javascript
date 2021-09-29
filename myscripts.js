
           
        function getbmivalue(){
            var weight = document.getElementById('weight').value;
            var height = document.getElementById('height').value;

            height= height * 12; //converted into inches 1ft=12 inches
            height= height * 0.025 //height in metres 

           // var newbmivalue = weight / (height * height) ;
            var newbmivalue = weight / (Math.pow(height, 2) );


            newbmivalue = Math.round(newbmivalue);
            document.getElementById('BMIvalue').value = newbmivalue;

        }

