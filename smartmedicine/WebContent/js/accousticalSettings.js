 $(document).ready(function(){
		 $("#divNotificationSoundSelection").hide();
		 setIcons();
		 loadAccousticalSettings();
    	 
         
     })
     
     $('#toggle-event').bootstrapToggle({
	      on: 'An',
	      off: 'Aus'
	 });
 
 
     function mouseOverNot1(x) {
			document.getElementById("aNotification1").style.opacity = 1; 
			$("#tdNameNot1").css("visibility", "visible");
	 }
     function mouseOverNot2(x) {
			document.getElementById("aNotification2").style.opacity = 1; 
			$("#tdNameNot2").css("visibility", "visible");
	 }
     function mouseOverNot3(x) {
			document.getElementById("aNotification3").style.opacity = 1; 
			$("#tdNameNot3").css("visibility", "visible");
	 }
     
     
     function mouseOutNot1(x) {
    	    $("#tdNameNot1").css("visibility", "hidden");
			document.getElementById("aNotification1").style.opacity = 0.3; 
	 }
 	 function mouseOutNot2(x) {
 			$("#tdNameNot2").css("visibility", "hidden");
			document.getElementById("aNotification2").style.opacity = 0.3; 
	 }
 	 function mouseOutNot3(x) {
 			$("#tdNameNot3").css("visibility", "hidden");
			document.getElementById("aNotification3").style.opacity = 0.3; 
	 }
 	 
 	 
    $('#aNotification1').click(function(){
    	 	localStorage.setItem('notificationSound', "notification1");
    		$("#tdNameNot2").css("visibility", "hidden");
    		$("#tdNameNot3").css("visibility", "hidden");
    		
    		$("#tdNameNot1").empty();
		 	$("#tdNameNot1").append("<button id='btnNot1' type='button' class='btn btn-primary btn-lg'>Test</button>");
		 	
		 	$("#btnNot1").click(function(){
		 		localStorage.setItem('notificationSound', "notification1");
		 		testNotificationSound();
				$('#myPleaseWait').modal('show');
		    	setTimeout(function () {
		    		$('#myPleaseWait').modal('hide');
		        }, 3000);
		 	})
		 	
		 	
		 	$("#tdNameNot2").empty();
		 	$("#tdNameNot2").append("<font size='4'>Aurora</font>");
		 	
		 	$("#tdNameNot3").empty();
		 	$("#tdNameNot3").append("<font size='4'>Chord</font>");
		
    		
			document.getElementById("aNotification1").style.opacity = 1; 
			document.getElementById("aNotification2").style.opacity = 0.3; 
			document.getElementById("aNotification3").style.opacity = 0.3; 
			$("#aNotification1").empty();
			$("#aNotification1").append("<img src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification2").empty();
			$("#aNotification2").append("<img onmouseover='mouseOverNot2(this)' onmouseout='mouseOutNot2(this)' src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification3").empty();
			$("#aNotification3").append("<img onmouseover='mouseOverNot3(this)' onmouseout='mouseOutNot3(this)' src='img/icon-audio.png' width='70' height='80'>");
    })
    
	    $('#aNotification2').click(function(){
		    localStorage.setItem('notificationSound', "notification2");
		 	$("#tdNameNot1").css("visibility", "hidden");
		 	$("#tdNameNot3").css("visibility", "hidden");
		 	
		 	$("#tdNameNot2").empty();
		 	$("#tdNameNot2").append("<button id='btnNot2' type='button' class='btn btn-primary btn-lg'>Test</button>");
		
		 	$("#btnNot2").click(function(){
		 		testNotificationSound();
				$('#myPleaseWait').modal('show');
		    	setTimeout(function () {
		    		$('#myPleaseWait').modal('hide');
		        }, 3000);
		 	})
		 	
		 	$("#tdNameNot3").empty();
		 	$("#tdNameNot3").append("<font size='4'>Chord</font>");
		 	
		 	$("#tdNameNot1").empty();
		 	$("#tdNameNot1").append("<font size='4'>SMS</font>");
		 	
			document.getElementById("aNotification2").style.opacity = 1; 
			document.getElementById("aNotification3").style.opacity = 0.3; 
			document.getElementById("aNotification1").style.opacity = 0.3; 
			$("#aNotification2").empty();
			$("#aNotification2").append("<img src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification1").empty();
			$("#aNotification1").append("<img onmouseover='mouseOverNot1(this)' onmouseout='mouseOutNot1(this)' src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification3").empty();
			$("#aNotification3").append("<img onmouseover='mouseOverNot3(this)' onmouseout='mouseOutNot3(this)' src='img/icon-audio.png' width='70' height='80'>");
			
	 })
	 
	  $('#aNotification3').click(function(){
			document.getElementById("aNotification3").style.opacity = 1; 
			document.getElementById("aNotification2").style.opacity = 0.3; 
			document.getElementById("aNotification1").style.opacity = 0.3; 
			
		    localStorage.setItem('notificationSound', "notification3");
		 	$("#tdNameNot1").css("visibility", "hidden");
		 	$("#tdNameNot2").css("visibility", "hidden");
		 	$("#tdNameNot3").empty();
		 	$("#tdNameNot3").append("<button id='btnNot3' type='button' class='btn btn-primary btn-lg'>Test</button>");
		 	
		 	$("#btnNot3").click(function(){
		 		testNotificationSound();
				$('#myPleaseWait').modal('show');
		    	setTimeout(function () {
		    		$('#myPleaseWait').modal('hide');
		        }, 3000);
		 	})
		 	
		 	$("#tdNameNot2").empty();
		 	$("#tdNameNot2").append("<font size='4'>Aurora</font>");
		 	
		 	$("#tdNameNot1").empty();
		 	$("#tdNameNot1").append("<font size='4'>SMS</font>");
		 	
			document.getElementById("aNotification3").style.opacity = 1; 
			document.getElementById("aNotification2").style.opacity = 0.3; 
			document.getElementById("aNotification1").style.opacity = 0.3; 
			$("#aNotification3").empty();
			$("#aNotification3").append("<img src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification2").empty();
			$("#aNotification2").append("<img onmouseover='mouseOverNot2(this)' onmouseout='mouseOutNot2(this)' src='img/icon-audio.png' width='70' height='80'>");
			
			$("#aNotification1").empty();
			$("#aNotification1").append("<img  onmouseover='mouseOverNot1(this)' onmouseout='mouseOutNot1(this)' src='img/icon-audio.png' width='70' height='80'>");
	 })
	 
	 
	    var jsonArrayAccousticalSettings = [];
	    var objAccousticalSettings = new Object();
		 
		 $('#toggle-event').change(function() {
			 localStorage.setItem("useSpeaker", $(this).prop('checked'));
		    if($(this).prop('checked')==true){
			  	  $("#divNotificationSoundSelection").show();
		    } else {
			  	  $("#divNotificationSoundSelection").hide();
			} 	
		})
		
		$("#btnSaveAcousticalConfiguration").click(function(){
			objAccousticalSettings.useSpeaker = localStorage.getItem("useSpeaker");
			objAccousticalSettings.notificationSoundName = localStorage.getItem('notificationSound');
			jsonArrayAccousticalSettings.push(objAccousticalSettings);
			saveAccousticalSettings();
		})
		
		function testNotificationSound() {
		  $.ajax({
			    type:"POST",
			    dataType: 'xml',
			    url: 'http://192.168.0.108:8080/CMD?AccousticalTest='+localStorage.getItem('notificationSound')
			});
		};
		
		function loadAccousticalSettings() {
			  $.ajax({
				    dataType: 'json',
				    success: function(data) {
				    	if(data.useSpeaker==true){
				    		$("#divNotificationSoundSelection").show();	
				    		$('#toggle-event').bootstrapToggle('on')
				    		
				    		if(data.notificationSoundName=="notification1"){
				    			$('#aNotification1').click();
				    		} else if(data.notificationSoundName=="notification2"){
				    			$('#aNotification2').click();
				    			
				    		} else if(data.notificationSoundName=="notification3"){
				    			$('#aNotification3').click();
				    			
				    		}
				    	} else {
				    		$("#divNotificationSoundSelection").hide();	
				    		$('#toggle-event').bootstrapToggle('off')
				    	}
				    	
					 },
				    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getNotificationConfiguration'
				});
		};
		$('#btnCloseModal').click(function(){
			window.location = "manageNotification.html";
		})
		
		function setIcons(){
			$('#aNotification1').empty();
			$('#aNotification1').append("<img onmouseover='mouseOverNot1(this)' onmouseout='mouseOutNot1(this)' src='img/icon-audio.png' width='70' height='80'>");
		
			$('#tdNameNot1').empty();
			$('#tdNameNot1').append("<font size='4'>SMS</font>");		
			
			$('#aNotification2').empty();
			$('#aNotification2').append("<img onmouseover='mouseOverNot2(this)' onmouseout='mouseOutNot2(this)' src='img/icon-audio.png' width='70' height='80'>");
			
			$('#tdNameNot2').empty();
			$('#tdNameNot2').append("<font size='4'>Aurora</font>");
			
			$('#aNotification3').empty();
			$('#aNotification3').append("<img onmouseover='mouseOverNot3(this)' onmouseout='mouseOutNot3(this)' src='img/icon-audio.png' width='70' height='80'>");
		
			$('#tdNameNot3').empty();
			$('#tdNameNot3').append("<font size='4'>Chord</font>");
		}
		
		function saveAccousticalSettings() {
		    $.ajax({
		        type: 'POST',
		        contentType: 'application/json',
		        url: "http://localhost:8080/smartmedicine/rest/medicineinformation/saveAccousticalSettings",
		        dataType: "json",
		        data: JSON.stringify(jsonArrayAccousticalSettings),
		        success: function(data, textStatus, jqXHR){
		        	$('#btnSaveAccousticalNotification').trigger("click"); 
		        	
		        	
		        	setTimeout(function () {
		        		$('#btnCloseModal').trigger("click");
		            }, 2000);
		        },
		        error: function(jqXHR, textStatus, errorThrown){
		            alert('addWine error: ' + textStatus);
		        }
		    });
		}
		
		
	  	