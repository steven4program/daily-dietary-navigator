import './assets/scss/all.scss'
import 'bootstrap/dist/js/bootstrap.min.js'

$(document).ready(function(){
    $('#myselection').on('change', function(){
    	var demovalue = $(this).val(); 
        $("img.option-list").hide();
        $("img.option-first").hide();
        $("#show"+demovalue).show();
    });
});
$(document).ready(function(){
    $('#myselection-lunch').on('change', function(){
    	var demovalue = $(this).val(); 
        $("img.option-list-lunch").hide();
        $("img.option-first-lunch").hide();
        $("#show"+demovalue).show();
    });
});
$(document).ready(function(){
    $('#myselection-dinner').on('change', function(){
    	var demovalue = $(this).val(); 
        $("img.option-list-dinner").hide();
        $("img.option-first-dinner").hide();
        $("#show"+demovalue).show();
    });
});

//const kcalConvenienceStore = document.querySelector('#convenienceStore-1');

//console.log(kcalConvenienceStore.value);
//function decide(){
    let kcal = 0;
    kcal += document.querySelector('#convenienceStore-1').checked == true ? document.querySelector('#convenienceStore-1').value :0; 
    kcal += document.querySelector('#convenienceStore-2').checked == true ? document.querySelector('#convenienceStore-2').value :0; 
    document.querySelector('.kcalTotal').innerHTML= kcal;
//}





