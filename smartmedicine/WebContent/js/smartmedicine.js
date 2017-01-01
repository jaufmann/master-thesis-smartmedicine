

$(document).ready(function() {
	//addMedicine variables
	var arrayObjectMedicineInformation = [];
	var arrayEditedIntakeTime = [];
	
	var jsonObjMedicineInformation = "";
	
	
	var objMedicineInformation = new Object();
	var objEditedIntakeTime = new Object();
	
	//addIntakeTime variables
	var clickedInterval = "";
	
	
	$('#bootstrap-table').ready(function() {
		var destination = localStorage.getItem("destination");
		if(destination=="deleteMedicine"){
			loadDeleteMedicineInformationTable();
		} else if(destination=="editMedicine"){
			loadEditMedicineInformationTable();
		} else if(destination=="medicineOverview"){
			loadMedicineOverviewTable();
	 	} else if(destination=="medicineOverviewIntakeTime"){
	 		loadIntakeTimeOverview2();
	 		
	 		$('#tdBack').empty();
			$("<button id='btnBackMedicineOverview' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBack']");
			$('#btnBackMedicineOverview').click(function(){
				localStorage.setItem("destination", "medicineOverview");
				window.location = 'medicineOverview.html';
			})
	 	} else if(destination=="addOnlyIntakeTimeOverview"){
	 		$('#tdBack').empty();
			$("<button id='btnBackToAddIntakeTimeOverview' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBack']");
			$('#btnBackToAddIntakeTimeOverview').click(function(){
				localStorage.setItem("destination", "addIntakeTimeOverview");
				window.location ='addIntakeTimeOverview.html';
			})	
			
			loadIntakeTimeOverview2();
	 	} else if(destination=="medicineIntakeTimeOverview"){
	 		$('#tdBack').empty();
			$("<button id='btnBackToMedicineOverview' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBack']");
			$('#btnBackToMedicineOverview').click(function(){
				localStorage.setItem("destination", "medicineOverview");
				window.location='medicineOverview.html';
			})	
			
			loadIntakeTimeOverview2();
	 	}
		
		else if(destination=="addOnlyIntakeTime"){
			setDateInput();
			setTimeInput();
			$('#txtIteration').attr('disabled', true);
			
			$('#tdBackAddIntakeTime').empty();
			$("<button id='btnBackToAddIntakeTimeOverview' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBackAddIntakeTime']");
			$('#btnBackToAddIntakeTimeOverview').click(function(){
				localStorage.setItem("destination", "addIntakeTimeOverview");
				window.location = 'addIntakeTimeOverview.html';
			})	
		} 
		
		
		else if(destination=="addIntakeTimeOverview"){
			loadAddIntakeTimeOverviewTable();
		} else if(destination=="deleteIntakeTime"){
			loadDeleteIntakeTimeTable();
		} else if(destination=="editIntakeTimeOverview"){
			loadEditIntakeTimeOverviewTable();
		} else if(destination=="intakeTimeOverview"){
			loadDeleteIntakeTimeTable();
		} else if(destination=="editIntakeItem"){
			$('#txtIteration').attr('disabled', true);
			var newObjIntakeTime = getIntakeTimeByIntakeTimeID(localStorage.getItem("intakeTimeID"));
			var date = new Date();	
			

			$('#tdBackAddIntakeTime').empty();
			$("<button id='btnBackToEditIntakeItemOverview' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBackAddIntakeTime']");
			$('#btnBackToEditIntakeItemOverview').click(function(){
				localStorage.setItem("destination", "editIntakeTimeOverview");
				window.location = 'editIntakeTimeOverview.html';

			})	
			
			date.setTime(newObjIntakeTime.intakeTime*1000);

			var time = parseHour(date.getHours())+":"+parseMinute(date.getMinutes());
			var day = ("0" + date.getDate()).slice(-2);
			var month = ("0" + (date.getMonth() + 1)).slice(-2);
			var dateTime = date.getFullYear()+"-"+(month)+"-"+(day);
			
			
			setTimeInput();
			$('#txtStartDate').val(dateTime);
			$('#alarm').val(time);
			
		} 
		
		else if(destination=="addMedicine"){
			$('#txtMedicineName').val(localStorage.getItem("medicineName"));
			$('#txtDisease').val(localStorage.getItem("disease"));
		} else if(destination=="addMedicine2"){
			$("#txtNote").val(localStorage.getItem("note"));
			$("#txtStock").val(localStorage.getItem("stock"));
		} else if(destination=="addIntakeTime"){
			
			$('#tblHeaderOverview').empty();
			$("<tr><td><img class='transparent' src='img/pills-blue.png'><font class='transparent'><b>Allgemein</b></font></h4></td>" +
			  "<td><img class='transparent'  src='img/Information_icon.png'><font class='transparent'><b>Zeitpunkt</b></font></td>" +
			  "<td><img   src='img/clock.png'><font><b>Zeitpunkt</b></font></h4></td></tr>").appendTo("table[id='tblHeaderOverview']");
			
			
			
			if(localStorage.getItem("iteration")!=null){
				$('#txtIteration').val(localStorage.getItem("iteration"));
			}  
			
			if(localStorage.getItem("startDate")!=null){
				$('#txtStartDate').val(localStorage.getItem("startDate"));
			} else {
				setDateInput();
			} 
			
			if(localStorage.getItem("alarm")!=null){
				setTimeInput();
				$('#alarm').val(localStorage.getItem("alarm"));
			} else {
				setTimeInput();
			}
			
			$('#txtIteration').attr('disabled', true);
			
			$('#tdBackAddIntakeTime').empty();
			$("<button id='btnBackToAddMedicine' class='btn btn-primary'><font class='white'>zur&uuml;ck</font></button>").appendTo("td[id='tdBackAddIntakeTime']");
			$('#btnBackToAddMedicine').click(function(){
				localStorage.setItem("iteration", $('#txtIteration').val());
				localStorage.setItem("startDate", $('#txtStartDate').val());
				localStorage.setItem("alarm", $('#alarm').val());
				localStorage.setItem("destination", "addMedicine2");
				window.location = 'addMedicine2.html';
			})	
		}
		
		
		if(destination=="deleteMedicine" || destination=="editMedicine" || destination=="medicineOverview"
			|| destination=="deleteIntakeTime" || destination=="editIntakeTimeOverview" || destination=="intakeTimeOverview"
			|| destination =="addIntakeTimeOverview" || destination=="addOnlyIntakeTimeOverview" || destination=="medicineIntakeTimeOverview"
			|| destination == "medicineOverviewIntakeTime"){
	
		    $('#example').DataTable( {	
		    	
		    	"lengthChange": false,
		    	 columnDefs: [
		             {
		                 targets: [0, 1, 2],
		                 className: 'mdl-data-table__cell--non-numeric'
		             }
		         ],
		    	"lengthMenu": [[3, 25, 50, -1], [3, 25, 50, "All"]],
		    } );	 
       }
	});
	
	/**
	 * addIntakeTimeOverview.html functions
	 */

	
	function loadIntakeTimeOverviewTable1() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		var unparsedDate = new Date();
			    		unparsedDate.setTime(data.intaketime[i].intakeTime*1000);
			    		var dayName = parseDayToDayName(unparsedDate.getDay());
			    		var monthName = parseMonthToMonthName(unparsedDate.getMonth());
			    		var date = ""+dayName+", den "+unparsedDate.getDate()+" "+monthName;
			    		var time = ""+parseHour(unparsedDate.getHours())+":"+parseMinute(unparsedDate.getMinutes());
			    		var notificationTrigegered = "";
			    		var intakeStatus = "";
			  
			    		if(data.intaketime[i].notificationTriggered==true){
			    			notificationTrigegered = "Ausgelöst";
			    			console.log(data.intaketime[i].intakeTriggered);
			    			if(data.intaketime[i].intakeTriggered==true){
			    				intakeStatus = "Eingenommen"
			    			} else {
			    				intakeStatus = "Einnahme verpasset"
			    			}
			    		} else {
			    			notificationTrigegered = "Ausstehend";
			    			intakeStatus = "Ausstehend"
			    		}
			    		
			    		$("<tr><td><font>"+date+"</font></td>" 
			    		+ "<td><font>"+time+"</font></td>" 
			    		+ "<td><font>"+notificationTrigegered+"</font></td>" 
			    		+ "<td><font>"+intakeStatus+"</font></td></tr>").appendTo("table[id='example']");
					    
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
	};
	
	function loadAddIntakeTimeOverviewTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.medicine.length;i++){
			    		var intakeTimes = countIntakeTimeIDs(data.medicine[i].id);
			    		var buttonIntakeTime ="";
			    		if(intakeTimes>0){
			    			buttonIntakeTime="<td align='center'><button width='40' heigth='40' value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;'><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		} else {
			    			buttonIntakeTime="<td align='center'><button value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;' disabled><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		}
			    		
			    		
			    		$("<tr><td><font>"+data.medicine[i].medicineName+"</font></td>"  
			            + buttonIntakeTime
			    		+ "<td align='center'><button value="+data.medicine[i].id+" id='addIntakeTime"+i+"' type='button' class='btn btn-success'><img class='btnClass' src='img/add_termin_1.png' width='40' heigth='40'/></button></td>").appendTo("table[id='example']");
					    
			    		$("#intakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('medicineID', init_value);
				    		localStorage.setItem("destination", "addOnlyIntakeTimeOverview");
				    		window.location= 'intakeTimeOverview.html';
			    		});
			    		
			    		$("#addIntakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('medicineID', init_value);
				    		localStorage.setItem('destination', "addOnlyIntakeTime");
				    		window.location = 'addIntakeTime.html';
			    		});
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getMedicineInformation'
			});
	};
	
	
	/**
	 * addIntakeTime.html functions
	 */
	
	$('#btnSaveIntakeTime').click(function(){
		var iteration = $('#txtIteration').val();
		var selectedDate = new Date($('#txtStartDate').val());
		var selectedTime = $('#alarm').val();
		var arrIntakeTimes = [];
		var hours = "";
		var minutes = "";
		
		var convertedTime = convertTo24Hour(selectedTime);
		
		var date = new Date();
		arrObjIntakeTime = [];
		
		
		if(convertedTime.charAt(1)!=":"){
			hours = convertedTime.substring(0,2);
			minutes=convertedTime.substring(3, convertedTime.length);
		} else {
			hours = convertedTime.substring(0,1);
			minutes = convertedTime.substring(2, convertedTime.length);
		}
		
		
	
		selectedDate.setHours(hours);
		selectedDate.setMinutes(minutes);
		
		if(clickedInterval=="weekly"){
			for(var i=0;i<iteration;i++){
				arrIntakeTimes.push((selectedDate.getTime()/1000)+((i+1)*604800));
			}	
		} else if(clickedInterval=="monthly"){
			for(var i=0;i<iteration;i++){
				arrIntakeTimes.push((selectedDate.getTime()/1000)+((i+1)*2629743));
			}
		} else if(clickedInterval=="daily"){
			for(var i=0;i<iteration;i++){
				arrIntakeTimes.push((selectedDate.getTime()/1000)+((i+1)*86400));
			}
		} else {
			arrIntakeTimes.push((selectedDate.getTime()/1000));
		}
		
		objIntakeTime = new Object();
		
		if(localStorage.getItem("destination")=="addIntakeTime" || localStorage.getItem("destination")=="addOnlyIntakeTime"){
			if(localStorage.getItem("destination")=="addIntakeTime"){
				objIntakeTime.medicineID=getLastMedicineID()+1;	
				saveMedicineInformation();
			} else {
				objIntakeTime.medicineID=localStorage.getItem("medicineID");
			}	
			
			objIntakeTime.intakeTime=arrIntakeTimes;

		    jsonObjectIntakeTime = JSON.stringify(objIntakeTime);		
		    arrObjIntakeTime.push(jsonObjectIntakeTime);

	    	createIntakeTimeInformation();
		} else {
	    	objEditedIntakeTime.intakeTimeID = localStorage.getItem('intakeTimeID');
	    	arrayEditedIntakeTime.push(objEditedIntakeTime);
	    	objEditedIntakeTime.intakeTime = selectedDate.getTime()/1000;
	    	
	    	editIntakeTime();
		}
	})
	
	
	function saveMedicineInformation(){
		objMedicineInformation.medicineName = localStorage.getItem("medicineName");
		objMedicineInformation.disease = localStorage.getItem("disease");
		objMedicineInformation.note = localStorage.getItem("note");
		objMedicineInformation.stock = localStorage.getItem("stock");

	    jsonObjMedicineInformation = JSON.stringify(objMedicineInformation);
		
		arrayObjectMedicineInformation.push(jsonObjMedicineInformation);
		createMedicineInformation();
	}
	
	function createIntakeTimeInformation() {
	    $.ajax({
	        type: 'POST',
	        contentType: 'application/json',
	        url: "http://localhost:8080/smartmedicine/rest/medicineinformation/createIntakeTimeInformation",
	        dataType: "json",
	        data: JSON.stringify(arrObjIntakeTime),
	        success: function(data, textStatus, jqXHR){
	        	var destination = localStorage.getItem("destination");
	        	
	        	if(destination=="addOnlyIntakeTime"){
	        		localStorage.setItem("destination", "addIntakeTimeOverview");
	        		window.location = 'addIntakeTimeOverview.html';
	        	} else {
	        		$('#saveStatusModal').click();
	        	}
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('addWine error: ' + textStatus);
	        }
	    });
	}
	
	function setTimeInput(){
		$( "#alarm" ).timeDropper();
		 var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-36251023-1']);
		  _gaq.push(['_setDomainName', 'jqueryscript.net']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
	}
	
	function setDateInput(){
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);
		var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
	
		$('#txtStartDate').val(today);
	}
	
	
	$('#btnDaily').click(function(){
		clickedInterval = "daily";
		$('#txtIteration').attr('disabled', false);
	})
	
	$('#btnWeekly').click(function(){
		clickedInterval = "weekly";
		$('#txtIteration').attr('disabled', false);
	})
	
	$('#btnMonthly').click(function(){
		clickedInterval = "monthly";
		$('#txtIteration').attr('disabled', false);
	})
	
	$('#btnNoInterval').click(function(){
		clickedInterval = "none";
		$('#txtIteration').attr('disabled', true);
	})
	
	/**
	 * addMedicineInformation.html functions for the first and second page
	 */
		
	/*$("#btnSaveMedicineInformation").click(function(){
		objMedicineInformation.medicineName = localStorage.getItem("medicineName");
		objMedicineInformation.disease = localStorage.getItem("disease");
		objMedicineInformation.note = localStorage.getItem("note");
		objMedicineInformation.stock = localStorage.getItem("stock");

	    jsonObjMedicineInformation = JSON.stringify(objMedicineInformation);
		
		arrayObjectMedicineInformation.push(jsonObjMedicineInformation);
		createMedicineInformation();
	})*/
	
	$('#btnAddMedicineForwardFirst').click(function(){
		localStorage.setItem("disease", $('#txtDisease').val());
		localStorage.setItem("medicineName", $('#txtMedicineName').val());
		localStorage.setItem("destination","addMedicine2");
		$('#divContainer').load('addMedicine2.html');
	})
	
	$('#btnAddMedicineForwardSecond').click(function(){
		localStorage.setItem("note", $("#txtNote").val());
		localStorage.setItem("stock", $("#txtStock").val());
		localStorage.setItem("destination", "addIntakeTime");
		$('#divContainer').load('addIntakeTime.html');
	})
	
	
	function createMedicineInformation() {
	    $.ajax({
	        type: 'POST',
	        contentType: 'application/json',
	        url: "http://localhost:8080/smartmedicine/rest/medicineinformation/createMedicineInformation",
	        dataType: "json",
	        data: JSON.stringify(arrayObjectMedicineInformation),
	        success: function(data, textStatus, jqXHR){

	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('addWine error: ' + textStatus);
	        }
	    });
	}
	
	/**
	 * intakeTimeOverview.html functions
	 */
	
	function loadIntakeTimeOverviewTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		var unparsedDate = new Date();
			    		unparsedDate.setTime(data.intaketime[i].intakeTime*1000);
			    		var dayName = parseDayToDayName(unparsedDate.getDay());
			    		var monthName = parseMonthToMonthName(unparsedDate.getMonth());
			    		var date = ""+dayName+", den "+unparsedDate.getDate()+" "+monthName;
			    		var time = ""+parseHour(unparsedDate.getHours())+":"+parseMinute(unparsedDate.getMinutes());
			    		
			    		
			    		var notificationTrigegered = "";
			    		var intakeStatus = "";
			  
			    		if(data.intaketime[i].notificationTriggered==true){
			    			notificationTrigegered = "Ausgelöst";
			    			console.log(data.intaketime[i].intakeTriggered);
			    			if(data.intaketime[i].intakeTriggered==true){
			    				intakeStatus = "Eingenommen"
			    			} else {
			    				intakeStatus = "Einnahme verpasset"
			    			}
			    		} else {
			    			notificationTrigegered = "Ausstehend";
			    			intakeStatus = "Ausstehend"
			    		}
			    		
			    		console.log("no"+notificationTrigegered+ " intake "+intakeStatus);
			    		
			    		
			    		
			    		$("<tr><td><font>"+date+"</font></td>" 
			    		+ "<td><font>"+time+"</font></td>" 
			    		+ "<td><font>eins</font></td>" +
			    		+ "<td><font>zwei</font></td></tr>").appendTo("table[id='example']");
			    		
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
	};
	
	/**
	 * editIntakeTime functions
	 */
	
	function editIntakeTime() {
	    $.ajax({
	        type: 'POST',
	        contentType: 'application/json',
	        url: "http://localhost:8080/smartmedicine/rest/medicineinformation/editIntakeTime",
	        dataType: "json",
	        data: JSON.stringify(arrayEditedIntakeTime),
	        success: function(data, textStatus, jqXHR){
	        	localStorage.setItem('destination', "editIntakeTimeOverview");
	        	window.location = 'editIntakeTimeOverview.html';
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('addWine error: ' + textStatus);
	        }
	    });
	}
	
	/**
	 * editIntakeTime.html function
	 */
	function loadEditIntakeTimeOverviewTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		var unparsedDate = new Date();
			    		unparsedDate.setTime(data.intaketime[i].intakeTime*1000);
			    		var dayName = parseDayToDayName(unparsedDate.getDay());
			    		var monthName = parseMonthToMonthName(unparsedDate.getMonth());
			    		var date = ""+dayName+", den "+unparsedDate.getDate()+" "+monthName;
			    		var time = ""+parseHour(unparsedDate.getHours())+":"+parseMinute(unparsedDate.getMinutes());
			    		
			    		$("<tr><td><font>"+date+"</font></td>" 
			    		+ "<td><font>"+time+"</font></td>" 
			    		+ "<td align='center'><button value="+data.intaketime[i].intakeTimeID+" id='editIntakeTime"+i+"' type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='50' heigth='50'/></button></td></tr>").appendTo("table[id='example']");
			    		
			    		$("#editIntakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('intakeTimeID', init_value);	
				    		localStorage.setItem('destination', "editIntakeItem");	
				    		window.location = 'addIntakeTime.html';
			    		});

			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
	};
	
	
	/**
	 * deleteIntakeTime.html function
	 * 
	 */
	function loadDeleteIntakeTimeTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		var unparsedDate = new Date();
			    		unparsedDate.setTime(parseInt(data.intaketime[i].intakeTime)*1000);
			    		
			    		var dayName = parseDayToDayName(unparsedDate.getDay());
			    		var monthName = parseMonthToMonthName(unparsedDate.getMonth());
			    		var date = ""+dayName+", den "+unparsedDate.getDate()+" "+monthName;
			    		var time = ""+parseHour(unparsedDate.getHours())+":"+parseMinute(unparsedDate.getMinutes());
			    		
			    		$("<tr><td><font>"+date+"</font></td>" 
			    		+ "<td><font>"+time+"</font></td>" 
			    		+ "<td align='center'><button value="+data.intaketime[i].intakeTimeID+" id='deleteIntakeTime"+i+"' type='button' class='btn btn-danger'>" +
			    				"<img src='img/delete_icon.png' width='50' heigth='50'/></button></td></tr>").appendTo("table[id='example']");
			    		
			    		$("#deleteIntakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		deleteIntakeTimeInformation(init_value);
				    		window.location = 'deleteIntakeTime.html';
			    		});
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
	};
	
	function deleteIntakeTimeInformation(intakeTimeID) {
		$.ajax({
	        type: 'DELETE',
	        async: false,
	        contentType: 'application/json',
	        url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/deleteIntakeTimeInformation/'+intakeTimeID,
	        dataType: "json",
	        success: function(data, textStatus, jqXHR){
	            
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('Intake time information could be deleted');
	        }
	    });
	}
	
	
	
	/*
	 * medicineOverview.html functions
	 */
	
	function loadMedicineOverviewTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.medicine.length;i++){
			    		var intakeTimes = countIntakeTimeIDs(data.medicine[i].id);
			    		var buttonIntakeTime ="";
			    		if(intakeTimes>0){
			    			buttonIntakeTime="<td align='center'><button width='40' heigth='40' value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;'><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		} else {
			    			buttonIntakeTime="<td align='center'><button value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;' disabled><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		}
			    		
			    		$("<tr><td><font>"+data.medicine[i].medicineName+"</font></td>"  
			            + buttonIntakeTime
			    		+ "<td align='center'><button value="+data.medicine[i].id+" id='deleteMedicine"+i+"' type='button' class='btn btn-primary'><img class='btnClass' src='img/zoom_icon.png' width='40' heigth='40'/></button></td>").appendTo("table[id='example']");
					    
			    		$("#intakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('medicineID', init_value);
				    		localStorage.setItem('destination', "medicineOverviewIntakeTime");
				    		window.location = 'intakeTimeOverview.html';
			    		});
			    		
			    		$("#deleteMedicine"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		deleteMedicineInformation(init_value);
				    		window.location = 'deleteMedicine.html';
			    		});
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getMedicineInformation'
			});
	};
	
	
	/*
	 * deleteMedicine.html functions
	 */
	function loadDeleteMedicineInformationTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.medicine.length;i++){
			    		var intakeTimes = countIntakeTimeIDs(data.medicine[i].id);
			    		var buttonIntakeTime ="";
			    		if(intakeTimes>0){
			    			buttonIntakeTime="<td align='center'><button width='40' heigth='40' value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;'><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		} else {
			    			buttonIntakeTime="<td align='center'><button value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;' disabled><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		}
			    		
			    		$("<tr><td><font>"+data.medicine[i].medicineName+"</font></td>"  
			            + buttonIntakeTime
			    		+ "<td align='center'><button value="+data.medicine[i].id+" id='deleteMedicine"+i+"' type='button' class='btn btn-danger'><img class='btnClass' src='img/delete_icon.png' width='40' heigth='40'/></button></td>").appendTo("table[id='example']");
					    
			    		$("#intakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('medicineID', init_value);
				    		localStorage.setItem('destination', "deleteIntakeTime");
				    		window.location ='deleteIntakeTime.html';
			    		});
			    		
			    		$("#deleteMedicine"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		deleteMedicineInformation(init_value);
				    		window.location ='deleteMedicine.html';
			    		});
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getMedicineInformation'
			});
	};
	
	
	
	
	
	function loadIntakeTimeOverview2() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		var unparsedDate = new Date();
			    		unparsedDate.setTime(data.intaketime[i].intakeTime*1000);
			    		var dayName = parseDayToDayName(unparsedDate.getDay());
			    		var monthName = parseMonthToMonthName(unparsedDate.getMonth());
			    		var date = ""+dayName+", den "+unparsedDate.getDate()+" "+monthName;
			    		var time = ""+parseHour(unparsedDate.getHours())+":"+parseMinute(unparsedDate.getMinutes());
			    		
			    		var nofiticationStatus = "";
			    		var intakeStatus = "";
			  
			    		if(data.intaketime[i].notificationTriggered==true){
			    			nofiticationStatus = "Ausgelöst";
			    			if(data.intaketime[i].intakeTriggered==true){
			    				intakeStatus = "Eingenommen"
			    			} else {
			    				intakeStatus = "Einnahme verpasset"
			    			}
			    		} else {
			    			nofiticationStatus = "Ausstehend";
			    			intakeStatus = "Ausstehend"
			    		}
			    		
			    		$("<tr><td>" +date+"</td>"+
			    		  "<td>"+time+"</td>" +
			    		  "<td>"+nofiticationStatus+"</td>" +
			    		  "<td>"+intakeStatus+"</td></tr>").appendTo("table[id='example']");
			    	}		    
				   },
				    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
	};
	
	
	
	function deleteMedicineInformation(medicineID) {
		$.ajax({
	        type: 'DELETE',
	        async:false,
	        contentType: 'application/json',
	        url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/deleteMedicineInformation/'+medicineID,
	        dataType: "json",
	        success: function(data, textStatus, jqXHR){
	            
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('Medicine information could be deleted');
	        }
	    });
	}
	
	
	/*
	 * editMedicine.html functions
	 */
	function loadEditMedicineInformationTable() {
		  $.ajax({
			    dataType: 'json',
			    async:false,
			    success: function(data) {	       
			    	for(var i=0;i<data.medicine.length;i++){
			    		var intakeTimes = countIntakeTimeIDs(data.medicine[i].id);
			    		var buttonIntakeTime ="";
			    		if(intakeTimes>0){
			    			buttonIntakeTime="<td align='center'><button width='40' heigth='40' value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;'><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		} else {
			    			buttonIntakeTime="<td align='center'><button value="+data.medicine[i].id+" id='intakeTime"+i+"' type='button' class='btn btn-primary custom' style='background: url(img/calendar_2.png) no-repeat;' disabled><font style='color:blue'>"+intakeTimes+"</font></button></td>";
			    		}
			    		
			    		$("<tr><td><font>"+data.medicine[i].medicineName+"</font></td>"  
			    		+ buttonIntakeTime
			    		+ "<td align='center'><button value="+data.medicine[i].id+" id='editMedicine"+i+"' type='button' class='btn btn-warning'>" +
			    				"<img class='btnClass' src='img/edit_icon.png' width='40' heigth='40'/></button></td>" +
			    				"<td>hu</td>").appendTo("table[id='example']");
					    
			    		$("#intakeTime"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
				    		localStorage.setItem('medicineID', init_value);
				    		localStorage.setItem('destination', "editIntakeTimeOverview");
				    		window.location = 'editIntakeTimeOverview.html';
			    		});
			    		
			    		$("#editMedicine"+i).unbind('click').click(function () {
				    		init_value = ($(this).val());
			    		});
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getMedicineInformation'
			});
	};
	
	
	/*
	 * General functions
	 */
	function countIntakeTimeIDs(medicineID) {
		 var result = "";
		  $.ajax({
			    async: false,  
			    dataType: 'json',
			    success: function(data) {
			    	result = data.intaketime.length;
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+medicineID
			});	  
		  return result;
	};
	
	
	function parseDayToDayName(dayNumber){
		var dayName;
		if(dayNumber==0){
			dayName="Sonntag";
		} else if(dayNumber==1){
			dayName="Montag";
		} else if (dayNumber==2) {
			dayName="Dienstag";
		} else if (dayNumber==3){
			dayName="Mittwoch";
		} else if (dayNumber==4){
			dayName="Donnestag";
		} else if (dayNumber==5){
			dayName="Freitag";
		} else if (dayNumber==6){
			dayName="Samstag";
		}
		return dayName;
	}
	
	
	function parseMonthToMonthName(monthNumber){
		var dayName;
		if(monthNumber==0){
			dayName="Januar";
		} else if(monthNumber==1){
			dayName="Februar";
		} else if (monthNumber==2) {
			dayName="März";
		} else if (monthNumber==3){
			dayName="April";
		} else if (monthNumber==4){
			dayName="Mai";
		} else if (monthNumber==5){
			dayName="Juni";
		} else if (monthNumber==6){
			dayName="Juli";
		} else if(monthNumber==1){
			dayName="Juni";
		} else if (monthNumber==7) {
			dayName="August";
		} else if (monthNumber==8){
			dayName="September";
		} else if (monthNumber==9){
			dayName="Oktober";
		} else if (monthNumber==10){
			dayName="November";
		} else if (monthNumber==11){
			dayName="Dezember";
		}
		return dayName;
	}
	
	function parseHour(hour){
		var newHour;
		if(hour<10){
			newHour = "0"+hour;
		} else {
			newHour = hour;
		}
		return newHour;
	}
	
	function parseMinute(minute){

		var newMinute;
		if(minute<10){
			newMinute = "0"+minute;
		} else {
			newMinute = minute;
		}
		return newMinute;
	}
	
	function convertTo24Hour(time) {
	    
		
		var hours = parseInt(time.substr(0, 2));
	    if(time.indexOf('am') != -1 && hours == 12) {
	        time = time.replace('12', '0');
	    }
	    if(time.indexOf('pm')  != -1 && hours < 12) {
	        time = time.replace(hours, (hours + 12));
	    }
	    return time.replace(/(am|pm)/, '').trim();
		
		
	}
	
	function getLastMedicineID() {
		var result = "";
		  $.ajax({
			    dataType: 'json',
			    async: false,  
			    success: function(data) {
			    	for(var i=0;i<data.medicine.length;i++){
			    		result = data.medicine[i].id;
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getMedicineInformation'
			});
		  return result;
	};
	
	function getIntakeTimeByIntakeTimeID() {
		  var newObjIntakeTime = new Object();
		  $.ajax({
			    dataType: 'json',
			    async: false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		newObjIntakeTime.intakeTimeID = data.intaketime[i].intakeTimeID;
			    		newObjIntakeTime.intakeTime = data.intaketime[i].intakeTime;
			    		newObjIntakeTime.medicineID = data.intaketime[i].medicineID;
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByIntakeTimeID/'+localStorage.getItem('intakeTimeID')
			});
		  return newObjIntakeTime;
	};
	
	function intakeTimeByMedicineID() {
		  var newObjIntakeTime = new Object();
		  $.ajax({
			    dataType: 'json',
			    async: false,
			    success: function(data) {
			    	for(var i=0;i<data.intaketime.length;i++){
			    		newObjIntakeTime.intakeTimeID = data.intaketime[i].intakeTimeID;
			    		newObjIntakeTime.intakeTime = data.intaketime[i].intakeTime;
			    		newObjIntakeTime.medicineID = data.intaketime[i].medicineID;
			    	}		    
				   },
			    url: 'http://localhost:8080/smartmedicine/rest/medicineinformation/getIntakeTimeByMedicineID/'+localStorage.getItem('medicineID')
			});
		  return newObjIntakeTime;
	};
});
 