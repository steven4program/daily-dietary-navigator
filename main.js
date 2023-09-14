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


