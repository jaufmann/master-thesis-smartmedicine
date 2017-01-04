package rest;

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

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jettison.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import classes.IntakeTime;
import classes.Medicine;
import classes.NotificationConfiguration;
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
	  
	  @GET
	  @Path("/getNotificationConfiguration")
	  @Produces("application/json")
	  public NotificationConfiguration getNotificationConfiguration() throws JSONException, ClassNotFoundException, SQLException, IOException, ParseException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
		jsonObject.put("notificationConfiguration", dbstatement.getNotificationConfiguration().toString());
		return dbstatement.getNotificationConfiguration();
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
	  @Path("/getIntakeTimeByIntakeTimeID/{intakeTimeID}")
	  @Produces("application/json")
	  public Response getIntakeTimeByIntakeTimeID(@PathParam("intakeTimeID") int intakeTimeID) throws JSONException, ClassNotFoundException, SQLException, IOException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	
		jsonObject.put("intaketime", dbstatement.getIntakeTimeByIntakeTimeID(intakeTimeID));
		return Response.status(200).entity(jsonObject.toString()).build();
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

	  	Medicine medicine = null;
	  	
		for (int i=0; i<arr.length(); i++){
			medicine = new Medicine();
			org.codehaus.jettison.json.JSONObject jsonMedicineObject = arr.getJSONObject(i);
			
			medicine.setNote(jsonMedicineObject.getString("note"));
			medicine.setDisease(jsonMedicineObject.getString("disease"));
			medicine.setMedicineName(jsonMedicineObject.getString("medicineName"));
			medicine.setStock(jsonMedicineObject.getInt("stock"));
			
			dbstatement.createMedicine(medicine);
		}	
	  }
	 
	  @POST
	  @Path("/editIntakeTime")
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
	  
	  
	  
	  
	  @POST
	  @Path("/createIntakeTimeInformation")
	  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	  public void createIntakeTimeInformation(Object objIntakeTimeInformation) throws JSONException, ClassNotFoundException, SQLException, ParseException, IOException, org.codehaus.jettison.json.JSONException {
	  	jsonObject = new JSONObject();
	  	dbstatement = new DBStatements();
	  	IntakeTime intakeTime = null;
	  	ArrayList<Integer> listIntegerIntakeTime =  new ArrayList<Integer>();
	  	  	
	  	JSONArray arr = new JSONArray(objIntakeTimeInformation.toString());
	  	
	  	for(int i=0;i<arr.length();i++){
	  		intakeTime = new IntakeTime();
	  		org.codehaus.jettison.json.JSONObject jsonIntakeTime = arr.getJSONObject(i);
	  		
	  		for(int k=0; k<jsonIntakeTime.getJSONArray("intakeTime").length();k++){
	  			listIntegerIntakeTime.add(jsonIntakeTime.getJSONArray("intakeTime").getInt(k));
	  		}
	  		
		  	intakeTime.setMedicineID(jsonIntakeTime.getInt("medicineID"));
		  	intakeTime.setListIntakteTimeUnix(listIntegerIntakeTime);
	  	}

  		dbstatement.createIntakeTimeInformation(intakeTime);
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