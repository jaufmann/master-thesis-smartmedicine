package database;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import classes.IntakeTime;
import classes.Medicine;
import classes.NotificationConfiguration;

public class DBStatements {
	

	
	private static DBConnection dbconnection = null;
		
	public ArrayList<Medicine> getMedicineInformation() throws ClassNotFoundException, SQLException, IOException{
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		Medicine medicine = null;
		/*String query = " SELECT medicine.medicineID, GROUP_CONCAT(DISTINCT intaketime.intakeTimeID) AS intakeTimeID, "
				+ 	   " medicine.note, stock, medicineName, disease "
				+ 	   " FROM intaketime INNER JOIN medicine "
				+      " WHERE intaketime.medicineID = medicine.medicineID "
				+      " GROUP BY medicine.medicineID, medicine.note ";
		*/
		
		String query = " SELECT medicineID, note, stock, medicineName, disease "
				+ 	   " FROM medicine "
				+      " GROUP BY medicineID ";
		ArrayList<Medicine> listMedicine = new ArrayList<Medicine>();
		
		try{
			con = dbconnection.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			while(rs.next()){
				medicine = new Medicine();
				medicine.setId(rs.getInt("medicineID"));
				medicine.setStock(rs.getInt("stock"));
				medicine.setMedicineName(rs.getString("medicineName"));
				medicine.setNote(rs.getString("note"));
				
				/*
				//convert sql output to string arraylist
				ArrayList<String> listIntakeTimeIDs = new ArrayList<String>(Arrays.asList(rs.getString("intakeTimeID").split(",")));
				//convert arraylist to integer
				ArrayList<Integer> newList = new ArrayList<Integer>(listIntakeTimeIDs.size()) ;
				for (String myInt : listIntakeTimeIDs) 
	            { 
	              newList.add(Integer.valueOf(myInt)); 
	            }
				
				medicine.setListIntakeTimeIDs(newList);
				*/
				
				medicine.setDisease(rs.getString("disease"));
				listMedicine.add(medicine);
			}
		}finally{
			if(rs != null) rs.close();
			if(stmt != null)stmt.close();			
			if(con !=null)con.close();
		}	
		return listMedicine;		
	}
	
	public ArrayList<IntakeTime> getIntakeTimeByMedicineID(int medicineID) throws SQLException, ClassNotFoundException, IOException{
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		IntakeTime intaketime = null;
		String query = "SELECT * FROM intaketime WHERE medicineID="+medicineID;
		ArrayList<IntakeTime> listIntaketimes = new ArrayList<IntakeTime>();
		
		try{
			con = dbconnection.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			while(rs.next()){
				intaketime = new IntakeTime();
				intaketime.setIntakeTimeID(rs.getInt("intakeTimeID"));
				intaketime.setMedicineID(rs.getInt("medicineID"));
				intaketime.setIntakeTime(rs.getString("intakeTime"));
				intaketime.setIntakeTriggered(rs.getBoolean("intakeStatus"));
				intaketime.setNotificationTriggered(rs.getBoolean("NotificationStatus"));
				listIntaketimes.add(intaketime);
			}
		}finally{
			if(rs != null) rs.close();
			if(stmt != null)stmt.close();			
			if(con !=null)con.close();
		}	
		return listIntaketimes;		
	}
	
	
	public ArrayList<IntakeTime> getIntakeTimeInformation() throws ClassNotFoundException, SQLException, ParseException, IOException{
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		IntakeTime intaketime = null;
		String query = "SELECT * FROM intaketime";
		ArrayList<IntakeTime> listIntaketimes = new ArrayList<IntakeTime>();
		
		try{
			con = dbconnection.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			while(rs.next()){
				intaketime = new IntakeTime();
				intaketime.setIntakeTimeID(rs.getInt("intakeTimeID"));
				intaketime.setMedicineID(rs.getInt("medicineID"));
				intaketime.setIntakeTime(rs.getString("intakeTime"));
				intaketime.setNotificationTriggered(rs.getBoolean("NotificationStatus"));
				intaketime.setIntakeTriggered(rs.getBoolean("intakeStatus"));
				listIntaketimes.add(intaketime);
			}
		}finally{
			if(rs != null) rs.close();
			if(stmt != null)stmt.close();			
			if(con !=null)con.close();
		}	
		return listIntaketimes;		
	}
	
	
	public NotificationConfiguration getNotificationConfiguration() throws ClassNotFoundException, SQLException, ParseException, IOException{
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		IntakeTime intaketime = null;
		String query = "SELECT * FROM notificationConfiguration";
		NotificationConfiguration notificationConfiguration = new NotificationConfiguration();
		
		try{
			con = dbconnection.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			while(rs.next()){
				notificationConfiguration.setNotificationConfigurationID(rs.getInt("notificationConfigurationID"));
				notificationConfiguration.setUseLight(rs.getBoolean("useLight"));
				notificationConfiguration.setUseSpeaker(rs.getBoolean("useSpeaker"));
				notificationConfiguration.setLightColor(rs.getString("lightColor"));
			}
		}finally{
			if(rs != null) rs.close();
			if(stmt != null)stmt.close();			
			if(con !=null)con.close();
		}	
		return notificationConfiguration;		
	}

	public void deleteMedicineInformation(int medicineID) throws SQLException {
		    Connection con = null;
	        Statement stmt = null;
	        try
	        {
	        	con = dbconnection.getConnection();
	             
	            stmt = con.createStatement();
	            stmt.execute("DELETE FROM medicine WHERE medicineID ="+medicineID);
	        } 
	        catch (Exception e) {
	            e.printStackTrace();
	        }finally {
	            try {   
	                stmt.close();
	                con.close();
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	        }
	 }

	public void deleteIntakeTimeInformation(int intakeTimeID) {
		 Connection con = null;
	        Statement stmt = null;
	        try
	        {
	        	con = dbconnection.getConnection();
	             
	            stmt = con.createStatement();
	            stmt.execute("DELETE FROM intakeTime WHERE intakeTimeID ="+intakeTimeID);
	        } 
	        catch (Exception e) {
	            e.printStackTrace();
	        }finally {
	            try {   
	                stmt.close();
	                con.close();
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	        }
	}	 
	
	
	public void createMedicine(Medicine medicine) throws IOException {
		 	Connection conn = null;
			PreparedStatement pstmtProduct = null;
			 
			try{					 
				  conn = dbconnection.getConnection();
				 
		    	  String sqlProduct = " insert into medicine (note, medicineName, stock, disease)"
					        + " values (?, ?, ?, ?)";
		    	  
			      pstmtProduct = conn.prepareStatement(sqlProduct);
			      pstmtProduct.setString(1, medicine.getNote());
				  pstmtProduct.setString(2, medicine.getMedicineName());
				  pstmtProduct.setInt(3, medicine.getStock());
				  pstmtProduct.setString (4, medicine.getDisease());
			      pstmtProduct.executeUpdate();
			 } catch(Exception e){
				 
			 }  finally {
		            try {   
		            	pstmtProduct.close();
		                conn.close();
		            } catch (Exception e) {
		                e.printStackTrace();
		            }
		        }
		 }

	public void createIntakeTimeInformation(IntakeTime intakeTime) {
	 	Connection conn = null;
		PreparedStatement pstmtProduct = null;
		 
		try{					 
			  conn = dbconnection.getConnection();
			 
	    	  String sqlProduct = " insert into intaketime (intakeTime, medicineID, NotificationStatus, intakeStatus)"
				        + " values (?, ?, ?, ?)";
		      for (Integer outputIntakeTime: intakeTime.getListIntakteTimeUnix()) {
			      pstmtProduct = conn.prepareStatement(sqlProduct);
			      pstmtProduct.setInt(1, outputIntakeTime);
				  pstmtProduct.setInt(2, intakeTime.getMedicineID());
				  pstmtProduct.setInt(3, 0);
				  pstmtProduct.setInt(4, 0);
			      pstmtProduct.addBatch();
			      pstmtProduct.executeBatch();
		    	}
		      
		 } catch(Exception e){
			 
		 }  finally {
	            try {   
	            	pstmtProduct.close();
	                conn.close();
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	        }
	}

	public ArrayList<IntakeTime> getIntakeTimeByIntakeTimeID(int intakeTimeID) throws ClassNotFoundException, SQLException, IOException {
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		IntakeTime intaketime = null;

		String query = "SELECT * FROM intaketime WHERE intakeTimeID="+intakeTimeID;
		ArrayList<IntakeTime> listIntaketimes = new ArrayList<IntakeTime>();
		
		try{
			con = dbconnection.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			while(rs.next()){
				intaketime = new IntakeTime();
				intaketime.setIntakeTimeID(rs.getInt("intakeTimeID"));
				intaketime.setMedicineID(rs.getInt("medicineID"));
				intaketime.setIntakeTime(rs.getString("intakeTime"));
				listIntaketimes.add(intaketime);
			}
		}finally{
			if(rs != null) rs.close();
			if(stmt != null)stmt.close();			
			if(con !=null)con.close();
		}	
		return listIntaketimes;		
	}

	public void editIntakeTime(IntakeTime intakeTime) {
		Connection conn = null;
		PreparedStatement pstmtProduct = null;

		try{					 
			  conn = dbconnection.getConnection();
			 
	    	  String sqlProduct = " UPDATE intaketime SET intakeTime = ? WHERE intakeTimeID = ?";
	    	  
		      pstmtProduct = conn.prepareStatement(sqlProduct);
		      pstmtProduct.setInt(1, intakeTime.getIntakeTimeUnix());
			  pstmtProduct.setInt(2, intakeTime.getIntakeTimeID());
		      pstmtProduct.executeUpdate();
		 } catch(Exception e){
			 
		 }  finally {
	            try {   
	            	pstmtProduct.close();
	                conn.close();
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	        }
		
	}
}
	


