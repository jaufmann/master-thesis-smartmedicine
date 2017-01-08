

$(document).ready(function() {			
	
	$("#btnMedicineOptionChoice").click(function(event){
	      window.location = ' medicineOptionChoice.html';
	});
	
	$('#btnAcoustical').click(function(){
		window.location = 'acoustical.html';
	})
	
	$('#btnVisual').click(function(){
		window.location = 'visual.html';
	})
  
	$('#btnManageNotification').click(function(){
		window.location = 'manageNotification.html';
	})
	
	$('#btnManageContactPerson').click(function(){
		window.location = 'manageContactPerson.html';
	})
	
	$('#btnBackToFirstAddMedicine').click(function(){
		localStorage.setItem("note", $("#txtNote").val());
		localStorage.setItem("stock", $("#txtStock").val());
		localStorage.setItem("destination","addMedicine");
		window.location = 'addMedicine.html';
	})
	
	$("#btnAddMedicineForwardFirst").click(function(event){
	    window.location = 'addMedicine2.html';
	});
	
	$("#btnAddMedicineForwardSecond").click(function(event){
	    window.location = 'addIntakeTime.html';
	});
	
	/**
   * Navigation links for managenotification.html
   * 
   */
   $("#btnConfiguration").click(function(event){
	   window.localStorage.clear(); 
	   window.location='configuration.html';
  });
   
   $("#btnVisual").click(function(event){
	   window.localStorage.clear(); 
	   window.location='visual.html';
  });
   
   $("#btnAcoustical").click(function(event){
	   window.localStorage.clear(); 
	   window.location='acoustical.html';
  });	
	
	
 /**
 * Navigation links for addTypeSelection.html 
 */
	
  $("#btnAddMedicine").click(function(event){
	  localStorage.setItem("destination", "addMedicine");
	  window.location='addMedicine.html';
  });
  
  $("#btnIntakeTimeOverview").click(function(event){
	  localStorage.setItem("destination", "addIntakeTimeOverview");
	  window.location='addIntakeTimeOverview.html';
  });
	
 /**
  * Navigation links for start.html
  */
  $('#btnConfiguration').click(function(){
	  window.localStorage.clear(); 
      window.location='configuration.html'
  });
 
 $("#btnManageMedicine").click(function(event){
	 window.localStorage.clear(); 
	 window.location='manageMedicine.html';
 });
 
 
 $("#btnNo").click(function(event){
	 window.localStorage.clear(); 
	 window.location='start.html';
 });
 
 
 
 /**
  *  Navigation links for manageMedicine.html
  */ 
 $("#btnAddTypeSelection").click(function(event){
	 window.localStorage.clear(); 
	 window.location='addTypeSelection.html';
 });
 
 $("#btnEditMedicine").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "editMedicine");
	 window.location='editMedicine.html';
 });
 
 $("#btnDeleteMedicine").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "deleteMedicine");
	 window.location='deleteMedicine.html';
 });
 
 $("#btnMedicineOverview").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "medicineOverview");
	 window.location='medicineOverview.html';
 });
 
 $("#btnStart").click(function(event){
	  window.localStorage.clear(); 
	  window.location='start.html';
 });
 
});