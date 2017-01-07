var objLightSettings = new Object();
var jsonArrayLightSettings = [];

$(document).ready(function() {
	/*$("#lighSelection").show();*/
	$("#lighSelection").show();
	
	loadVisualSettings();
	/*if($('#toggle-event').is(':checked')==true){
		$("#lighSelection").show();
	} else {
		$("#lighSelection").hide(); 
	}*/
});

/*This class is used to change the visibility of the light selection div. If the toggle selection is true then 
the div with the light selection will be visible*/


$('#toggle-event').change(function() {
	localStorage.setItem("useLight", $(this).prop('checked'));
    if($(this).prop('checked')==true){
  	  $("#lighSelection").show();
    } else {
  	  $("#lighSelection").hide();
    } 	
})


/*This Events are used to change images visibility by click a event.
if a violette bulb is clicked than the other bulbs will be not visible this is also working otherwise for the other colors*/

$("#aViolette").click(function(){  
	localStorage.setItem('selectedLight', "violette");

    document.getElementById("aBlue").style.opacity = 0.3;
    document.getElementById("aGreen").style.opacity = 0.3;
    document.getElementById("aRed").style.opacity = 0.3;
    
	$("#aViolette").empty();
	$("#aViolette").append( "<img class='myImage' src='img/violette_3.png' width='130' height='130'/>" );
	
	$("#aRed").empty();
	$("#aRed").append( "<img onmouseover='bigImg(this)' name='red' onmouseout='normalImg(this)' class='myImage' src='img/red_3.png' width='130' height='130'/>" );
	
	$("#aBlue").empty();
	$("#aBlue").append( "<img id='aBlue' name='red' onmouseover='blueHover(this)' onmouseout='blueNormal(this)' class='myImage' src='img/blue_3.png' width='130' height='130'/>" );
	
	$("#aGreen").empty();
	$("#aGreen").append("<a id='aGreen'><img id='aGreen' onmouseover='greenHover(this)' onmouseout='greenNormal(this)' class='myImage' src='img/green_3.png' width='130' height='130'/>");
	
	$("#tdRed").empty();
	$("#tdBlue").empty();
	$("#tdGreen").empty();
	$("#tdViolette").empty();
	$("#tdViolette").append("<font size='4'><button id='btnViolette' type='button' class='btn btn-primary btn-lg'>Test</button></font>");
	
	$('#btnViolette').click(function(){
		testLightColor();
	})
	
    document.getElementById("aViolette").style.opacity = 1;
});

$("#aRed").click(function(){  
	localStorage.setItem('selectedLight', "red");
	
    document.getElementById("aBlue").style.opacity = 0.3;
    document.getElementById("aGreen").style.opacity = 0.3;
    document.getElementById("aViolette").style.opacity = 0.3;
    
	$("#aViolette").empty();
	$("#aViolette").append( "<img onmouseover='violetteHover(this)' id='aViolette' onmouseout='violetteNormal(this)' class='myImage' src='img/violette_3.png' width='130' height='130'/>" );
    
	$("#aRed").empty();
	$("#aRed").append( "<img class='myImage' src='img/red_3.png' width='130' height='130'/>" );
	
	$("#aBlue").empty();
	$("#aBlue").append( "<img id='aBlue' name='red' onmouseover='blueHover(this)' onmouseout='blueNormal(this)' class='myImage' src='img/blue_3.png' width='130' height='130'/>" );
	
	$("#aGreen").empty();
	$("#aGreen").append("<a id='aGreen'><img id='aGreen' onmouseover='greenHover(this)' onmouseout='greenNormal(this)' class='myImage' src='img/green_3.png' width='130' height='130'/>");
	
	$("#tdRed").empty();
	$("#tdBlue").empty();
	$("#tdGreen").empty();
	$("#tdViolette").empty();
	$("#tdRed").append("<button id='btnRed' type='button' class='btn btn-primary btn-lg'>Test</button>");
	
	$('#btnRed').click(function(){
		testLightColor();
	})
    document.getElementById("aRed").style.opacity = 1;
});


$("#aGreen").click(function(){
	localStorage.setItem('selectedLight', "green");
    document.getElementById("aRed").style.opacity = 0.3;    
    document.getElementById("aBlue").style.opacity = 0.3;
    document.getElementById("aViolette").style.opacity = 0.3;
    
	$("#aViolette").empty();
	$("#aViolette").append( "<img onmouseover='violetteHover(this)' id='aViolette' onmouseout='violetteNormal(this)' class='myImage' src='img/violette_3.png' width='130' height='130'/>" );
    
	$("#aRed").empty();
	$("#aRed").append( "<img onmouseover='bigImg(this)' name='red' onmouseout='normalImg(this)' class='myImage' src='img/red_3.png' width='130' height='130'/>" );
	
	$("#aBlue").empty();
	$("#aBlue").append( "<img id='aBlue' name='red' onmouseover='blueHover(this)' onmouseout='blueNormal(this)' class='myImage' src='img/blue_3.png' width='130' height='130'/>" );

	$("#aGreen").empty();
	$("#aGreen").append("<a id='aGreen'><img id='aGreen' class='myImage' src='img/green_3.png' width='130' height='130'/>");
	
	$("#tdRed").empty();
	$("#tdBlue").empty();
	$("#tdGreen").empty();
	$("#tdViolette").empty();
	$("#tdGreen").append("<font size='4'><button id='btnGreen' type='button' class='btn btn-primary btn-lg'>Test</button></font>");
	
	$('#btnGreen').click(function(){
		testLightColor();
	})
	
    document.getElementById("aGreen").style.opacity = 1;
});	

$("#aBlue").click(function(){
	localStorage.setItem('selectedLight', "blue");
    document.getElementById("aRed").style.opacity = 0.3;    
    document.getElementById("aGreen").style.opacity = 0.3;
    document.getElementById("aViolette").style.opacity = 0.3;
    
	$("#aViolette").empty();
	$("#aViolette").append( "<img onmouseover='violetteHover(this)' id='aViolette' onmouseout='violetteNormal(this)' class='myImage' src='img/violette_3.png' width='130' height='130'/>" );
    
	$("#aRed").empty();
	$("#aRed").append( "<img onmouseover='bigImg(this)' onmouseout='normalImg(this)' class='myImage' src='img/red_3.png' width='130' height='130'/>" );
	
	$("#aBlue").empty();
	$("#aBlue").append( "<img class='myImage' src='img/blue_3.png' width='130' height='130'/>" );
	
	$("#aGreen").empty();
	$("#aGreen").append("<a id='aGreen'><img id='aGreen' onmouseover='greenHover(this)' onmouseout='greenNormal(this)' class='myImage' src='img/green_3.png' width='130' height='130'/>");
	
	$("#tdRed").empty();
	$("#tdBlue").empty();
	$("#tdGreen").empty();
	$("#tdViolette").empty();
	$("#tdBlue").append("<font size='4'><button id='btnBlue' type='button' class='btn btn-primary btn-lg'>Test</button></font>");
	
	$('#btnBlue').click(function(){
		testLightColor();
	})
	
    document.getElementById("aBlue").style.opacity = 1;
});


function bigImg(x) {
	document.getElementById("aRed").style.opacity = 1; 
	$("#tdRed").empty();
	$("#tdRed").append("<font size='4'><b>Rot</b></font>");
}

function normalImg(x) {
	document.getElementById("aRed").style.opacity = 0.3;
	$("#tdRed").empty();
}

function blueHover(x) {
	document.getElementById("aBlue").style.opacity = 1;
	$("#tdBlue").empty();
	$("#tdBlue").append("<font size='4'><b>Blau</b></font>");
}

function blueNormal(x) {
	document.getElementById("aBlue").style.opacity = 0.3;
	$("#tdBlue").empty();
}

function greenHover(x) {
	document.getElementById("aGreen").style.opacity = 1;
	$("#tdGreen").empty();
	$("#tdGreen").append("<font size='4'><b>Grün</b></font>");
}

function greenNormal(x) {
	document.getElementById("aGreen").style.opacity = 0.3;	
	$("#tdGreen").empty();
}

function violetteHover(x) {
	document.getElementById("aViolette").style.opacity = 1;
	$("#tdViolette").empty();
	$("#tdViolette").append("<font size='4'><b>Magenta</b></font>");
}

function violetteNormal(x) {
	$("#tdViolette").empty();
	document.getElementById("aViolette").style.opacity = 0.3;	
}

function loadVisualSettings() {
	  $.ajax({
		    dataType: 'json',
		    async:false,
		    success: function(data) {
		    	
		    	if(data.useLight==true){
		    		$('#toggle-event').bootstrapToggle('on')
		    		$("#lighSelection").show();
		    		$("#toggle-event").prop('checked');
		    	} else {
		    		$('#toggle-event').bootstrapToggle('off')
		    		$("#lighSelection").hide();
		    	}
		    	
		    	if(data.lightColor == "blue"){
		    		$( "#aBlue" ).trigger( "click" );
		    	} 
		    	
		    	else if(data.lightColor == "red"){
		    		$( "#aRed" ).trigger( "click" );
		    	} 
		    	
		    	else if(data.lightColor == "green") {
		    		$( "#aGreen" ).trigger( "click" );
		    	} 
		    	
		    	else if(data.lightColor == "violette") {
		    		$( "#aViolette" ).trigger( "click" );
		    	}
		    	
			   },
		    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getNotificationConfiguration'
		});
};

    
function testLightColor() {
	  $.ajax({
		  	
		    type:"POST",
		    dataType: 'xml',
		    url: 'http://192.168.0.108:8080/CMD?Light_scene='+localStorage.getItem('selectedLight')
		});
};

$("#btnSaveVisualConfiguration").click(function(){ 
	objLightSettings.lightColor = localStorage.getItem('selectedLight');
	objLightSettings.useLight = localStorage.getItem('useLight');
	jsonArrayLightSettings.push(objLightSettings);
	saveVisualSettings();
});



function saveVisualSettings() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://localhost:8080/smartmedicine/rest/medicineinformation/saveVisualSettings",
        dataType: "json",
        data: JSON.stringify(jsonArrayLightSettings),
        success: function(data, textStatus, jqXHR){
        	$('#btnSaveVisualNotification').trigger("click"); 
        	
        	
        	setTimeout(function () {
        		$('#btnCloseModal').trigger("click");
            }, 2000);
        	
        	/*  	
        	
        	window.location = 'manageNotification.html';*/
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('addWine error: ' + textStatus);
        }
    });
}



$('#btnCloseModal').click(function(){
	window.location = "manageNotification.html";
})


function saveVisualConfigurationData(){
	/*check toggle event if it is checked or not
	if($('#toggle-event').is(':checked')==true){
		alert("hi")
	} else {
		alert($("#toggle-event").prop('checked'))
		 
	}*/
}