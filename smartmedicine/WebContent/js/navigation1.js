

$(document).ready(function() {		
	
	/**
	* Navigation links for manageContactPerson.html
	* 
	*/

	
	
  /**
   * Navigation links for managenotification.html
   * 
   */
   $("#btnConfiguration").click(function(event){
	   window.localStorage.clear(); 
	   $('#divContainer').load('configuration.html');
  });
   
   $("#btnVisual").click(function(event){
	   window.localStorage.clear(); 
	   $('#divContainer').load('visual.html');
  });
   
   $("#btnAcoustical").click(function(event){
	   window.localStorage.clear(); 
	   $('#divContainer').load('acoustical.html');
  });	
	
	
 /**
 * Navigation links for addTypeSelection.html 
 */
	
  $("#btnAddMedicine").click(function(event){
	  localStorage.setItem("destination", "addMedicine");
	  $('#divContainer').load('addMedicine.html');
  });
  
  $("#btnIntakeTimeOverview").click(function(event){
	  localStorage.setItem("destination", "addIntakeTimeOverview");
      $('#divContainer').load('addIntakeTimeOverview.html');
  });
	
 /**
  * Navigation links for start.html
  */
 $("#btnConfiguration").click(function(event){
	 window.localStorage.clear(); 
     $('#divContainer').load('configuration.html');
 });
 
 $("#btnManageMedicine").click(function(event){
	 window.localStorage.clear(); 
     $('#divContainer').load('manageMedicine.html');
 });
 
 
 /**
  *  Navigation links for manageMedicine.html
  */ 
 $("#btnAddTypeSelection").click(function(event){
	 window.localStorage.clear(); 
     $('#divContainer').load('addTypeSelection.html');
 });
 
 $("#btnEditMedicine").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "editMedicine");
     $('#divContainer').load('editMedicine.html');
 });
 
 $("#btnDeleteMedicine").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "deleteMedicine");
     $('#divContainer').load('deleteMedicine.html');
 });
 
 $("#btnMedicineOverview").click(function(event){
	 window.localStorage.clear(); 
	 localStorage.setItem("destination", "medicineOverview");
     $('#divContainer').load('medicineOverview.html');
 });
 
 $("#btnStart").click(function(event){
	  window.localStorage.clear(); 
	  $('#divContainer').load('start.html');
});
 
});