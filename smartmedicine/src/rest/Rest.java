package rest;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.concurrent.ArrayBlockingQueue;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jettison.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import classes.ContactPerson;
import classes.IntakeTime;
import classes.Medicine;
import classes.NotificationSetting;
import database.DBStatements;

@Path("/medicineinformation")
public class Rest {
	  private DBStatements dbstatement = null;
	  private JSONObject jsonObject = null;
	  
	  @GET
	  @Path("/getMedicineInformation")
	  @Produces("application/json")
	  public Response getMedicineInformation() throws JSONException, ClassNotFoundException, SQLException, IOException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
		jsonObject.put("medicine", dbstatement.getMedicineInformation());
		return Response.status(200).entity(jsonObject.toString()).build();
	  }
	  
	  
	  
	  @GET @Path("/getNotificationConfiguration") 
	  @Produces("application/json")
	  public NotificationSetting getNotificationConfiguration() throws JSONException, ClassNotFoundException, SQLException, IOException, ParseException {
	  	dbstatement = new DBStatements();
	  	
		return dbstatement.getNotificationConfiguration();
	  }
	  
	  @GET @Path("/getContactPerson") 
	  @Produces("application/json")
	  public Response getContactPerson() throws JSONException, ClassNotFoundException, SQLException, IOException, ParseException {
	  	dbstatement = new DBStatements();
		jsonObject = new JSONObject();
	  	
		jsonObject.put("psychologicalParent", dbstatement.getContactPerson());
		return Response.status(200).entity(jsonObject.toString()).build();
	  }
	  
	  @GET
	  @Path("/getIntakeTimeByMedicineID/{medicineID}")
	  @Produces("application/json")
	  public Response getIntakeTimeByMedicineID(@PathParam("medicineID") int medicineID) throws JSONException, ClassNotFoundException, SQLException, IOException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
		jsonObject.put("intaketime", dbstatement.getIntakeTimeByMedicineID(medicineID));
		return Response.status(200).entity(jsonObject.toString()).build();
	  }
	  
	  @GET
	  @Path("/getPsychologicalParentByPsychologicalParentID/{psychologicalParentID}")
	  @Produces("application/json")
	  public ContactPerson getPsychologicalParentByPsychologicalParentID(@PathParam("psychologicalParentID") int psychologicalParentID) throws JSONException, ClassNotFoundException, SQLException, IOException {
	  	dbstatement = new DBStatements();
	  	
	  	System.out.println(psychologicalParentID);
		return dbstatement.getPsychologicalParentByPsychologicalParentID(psychologicalParentID);
	  }
	  
	  
	  @GET
	  @Path("/getIntakeTimeByIntakeTimeID/{intakeTimeID}")
	  @Produces("application/json")
	  public Response getIntakeTimeByIntakeTimeID(@PathParam("intakeTimeID") int intakeTimeID) throws JSONException, ClassNotFoundException, SQLException, IOException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
		jsonObject.put("intaketime", dbstatement.getIntakeTimeByIntakeTimeID(intakeTimeID));
		return Response.status(200).entity(jsonObject.toString()).build();
	  }
	  
	  
	  @GET
	  @Path("/getMedicineInformationByMedicineID/{medicineID}")
	  @Produces("application/json")
	  public Medicine getMedicineInformationByMedicineID(@PathParam("medicineID") int medicineID) throws JSONException, ClassNotFoundException, SQLException, IOException {

	  	dbstatement = new DBStatements();

		return  dbstatement.getMedicineInformationByMedicineID(medicineID);
	  }
	  
	  
	  @GET
	  @Path("/getIntakeTimeInformation")
	  @Produces("application/json")
	  public Response getIntakeTimeInformation() throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	ArrayList<IntakeTime> listIntakeTime = new ArrayList<IntakeTime>(dbstatement.getIntakeTimeInformation());
	  	
		jsonObject.put("intaketime", listIntakeTime);
		jsonObject.put("numberIntakeTimes", listIntakeTime.size());
		return Response.status(200).entity(jsonObject.toString()).build();
	  }
	  
	  
	  @DELETE @Path("/deletePsychologicalPerson/{psychologicalParentID}")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void deletePsychologicalPerson(@PathParam("psychologicalParentID") int psychologicalParentID) throws JSONException, SQLException {
		    dbstatement = new DBStatements();
			
		    dbstatement.deletePsychologicalParent(psychologicalParentID);
	  }
	  
	  @DELETE @Path("/deleteMedicineInformation/{medicineID}")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void deleteMedicineInformation(@PathParam("medicineID") int medicineID) throws JSONException, SQLException {
		    dbstatement = new DBStatements();
			
		    dbstatement.deleteMedicineInformation(medicineID);
	  }
	  
	  
	  @DELETE @Path("/deleteIntakeTimeInformation/{intakeTimeID}")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void deleteIntakeTimeInformation(@PathParam("intakeTimeID") int intakeTimeID) throws JSONException, SQLException {
		    dbstatement = new DBStatements();
			
		    dbstatement.deleteIntakeTimeInformation(intakeTimeID);
	  }
	    
	  /*  @POST @Path("/createMedicineInformation")
	    @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	    public void create(Object objMedicineInformation) {
	       System.out.println(objMedicineInformation.toString());
	    }
	  */
	  
	  @POST
	  @Path("/createMedicineInformation")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void createMedicineInformation(Object objMedicineInformation) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
	  	JSONArray arr = new JSONArray(objMedicineInformation.toString());
	  	System.out.println(objMedicineInformation);
	  	Medicine medicine = null;
	  	
		for (int i=0; i<arr.length(); i++){
			medicine = new Medicine();
			org.codehaus.jettison.json.JSONObject jsonMedicineObject = arr.getJSONObject(i);
			
			medicine.setNote(jsonMedicineObject.getString("note"));
			medicine.setDisease(jsonMedicineObject.getString("disease"));
			medicine.setMedicineName(jsonMedicineObject.getString("medicineName"));
			medicine.setStock(jsonMedicineObject.getInt("stock"));
			medicine.setPertinence(jsonMedicineObject.getString("pertinence"));
			medicine.setPertinence(jsonMedicineObject.getString("pertinence"));
			medicine.setSavetyStock(jsonMedicineObject.getInt("savetyStock"));
			medicine.setContactType(jsonMedicineObject.getString("contactType"));
			
			dbstatement.createMedicine(medicine);
		}	
	  }
	 
	  @POST @Path("/editIntakeTime")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void editIntakeTime(Object objIntakeTimeInformation) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();

	  	JSONArray arr = new JSONArray(objIntakeTimeInformation.toString());
	  	IntakeTime intakeTime = null;
	  	
		for (int i=0; i<arr.length(); i++){
			intakeTime = new IntakeTime();
			org.codehaus.jettison.json.JSONObject jsonObjIntakeTimeInformation = arr.getJSONObject(i);
			intakeTime.setIntakeTimeUnix(jsonObjIntakeTimeInformation.getInt("intakeTime"));
			intakeTime.setIntakeTimeID(jsonObjIntakeTimeInformation.getInt("intakeTimeID"));
		}

		dbstatement.editIntakeTime(intakeTime);
	  }
	  
	  @POST @Path("/editPsychologicalParent")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void editPsychologicalParent(Object objEditPsychologicalParent) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {

	    dbstatement = new DBStatements();
		ObjectMapper mapper = new ObjectMapper();
		  	
		String jsonInString = mapper.writeValueAsString(objEditPsychologicalParent);
		ContactPerson contactPerson = mapper.readValue(jsonInString, ContactPerson.class);

		dbstatement.editPsychologicalParent(contactPerson);
	  }
	  
	  
	  
	  
	  @POST
	  @Path("/createIntakeTimeInformation")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void createIntakeTimeInformation(Object objIntakeTimeInformation) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject(objIntakeTimeInformation.toString());
	  	JSONObject objSingleIntkaeTime = null; 
	  	
	  	dbstatement = new DBStatements();
	  	
	  	IntakeTime intakeTime = null;
	  	ArrayList<IntakeTime> listIntakeTimes =  new ArrayList<IntakeTime>();
	  	
	  	int medicineID = jsonObject.getInt("medicineID");
	  	
	  	for(int i=0; i<jsonObject.getJSONArray("intakeTime").length();i++){
	  		intakeTime = new IntakeTime();
	  		objSingleIntkaeTime = jsonObject.getJSONArray("intakeTime").getJSONObject(i);
	  		intakeTime.setIntakeTimeUnix(objSingleIntkaeTime.getInt("unixTimeStamp"));
	  		intakeTime.setPillQuantity(objSingleIntkaeTime.getInt("pillQuantity"));
	  		listIntakeTimes.add(intakeTime);
	  	}
	  	  	
	  	dbstatement.createIntakeTimeInformation(listIntakeTimes, medicineID);

	  	
	  	//JSONArray arr = new JSONArray(objIntakeTimeInformation.toString());
	  	
	  //	[{"medicineID":"3","intakeTime":[{"unixTimeStamp":1484665800,"pillQuantity":"3"}]}]
	  			

	  	
	  /*	for(int i=0;i<arr.length();i++){
	  		intakeTime = new IntakeTime();
	  		org.codehaus.jettison.json.JSONObject jsonIntakeTime = arr.getJSONObject(i);
	  		
	  		for(int k=0; k<jsonIntakeTime.getJSONArray("intakeTime").length();k++){
	  			
	  			org.codehaus.jettison.json.JSONObject jsonSingleIntakeTime = jsonIntakeTime.getJSONArray("intakeTime").getJSONObject(k);
	  			System.out.println(jsonSingleIntakeTime.getInt("unixTimeStamp"));
	  			/*
	  			listIntegerIntakeTime.add(jsonIntakeTime.getJSONArray("intakeTime").getInt(k));
	  		*//*}
	  		/*
		  	intakeTime.setMedicineID(jsonIntakeTime.getInt("medicineID"));
		  	intakeTime.setListIntakteTimeUnix(listIntegerIntakeTime);
	  	}*/

  		/*dbstatement.createIntakeTimeInformation(intakeTime);*/
	  }
	  
	  
	  @POST
	  @Path("/createContactPerson")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void createContactPerson(Object objCreateContactPerson) throws JsonGenerationException, JsonMappingException, IOException  {
	  	dbstatement = new DBStatements();
	  	ObjectMapper mapper = new ObjectMapper();
	  	
	  	String jsonInString = mapper.writeValueAsString(objCreateContactPerson);
	  	ContactPerson contactPerson = mapper.readValue(jsonInString, ContactPerson.class);
	 
  		dbstatement.createContactPerson(contactPerson);
	  }
	  
	  
	  
	  @POST @Path("/saveAccousticalSettings")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void saveAccousticalSettings(Object objAccousticalSettings) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	NotificationSetting notificationSettings = null;
	  	  	
	  	JSONArray arr = new JSONArray(objAccousticalSettings.toString());
	  	
	  	for(int i=0;i<arr.length();i++){
	  		notificationSettings = new NotificationSetting();
	  		org.codehaus.jettison.json.JSONObject jsonAccousticalSettings = arr.getJSONObject(i);
	  		notificationSettings.setUseSpeaker(jsonAccousticalSettings.getBoolean("useSpeaker"));
	  		notificationSettings.setNotificationSoundName(jsonAccousticalSettings.getString("notificationSoundName"));
	  
	  	}

  		dbstatement.saveAccousticalSettings(notificationSettings);
	  }
	  
	  
	  @POST @Path("/saveVisualSettings")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void saveVisualSettings(Object objVisualSettings) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	NotificationSetting notificationSettings = null;
	  	  	
	  	JSONArray arr = new JSONArray(objVisualSettings.toString());
	  	
	  	for(int i=0;i<arr.length();i++){
	  		notificationSettings = new NotificationSetting();
	  		org.codehaus.jettison.json.JSONObject jsonVisualSettings = arr.getJSONObject(i);
	  		notificationSettings.setLightColor(jsonVisualSettings.getString("lightColor"));
	  		notificationSettings.setUseLight(jsonVisualSettings.getBoolean("useLight"));
	  
	  	}

  		dbstatement.saveVisualSettings(notificationSettings);
	  }
	  
	  
	  
	  public static Timestamp convertStringToTimestamp(String str_date) {
		    try {
		      DateFormat formatter;
		      formatter = new SimpleDateFormat("");
		       // you can change format of date
		      Date date = formatter.parse(str_date);
		      java.sql.Timestamp timeStampDate = new Timestamp(date.getTime());

		      return timeStampDate;
		    } catch (ParseException e) {
		      System.out.println("Exception :" + e);
		      return null;
		    }
		  }
	  
}