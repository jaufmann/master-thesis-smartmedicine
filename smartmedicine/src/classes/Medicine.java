package classes;

import java.util.ArrayList;

public class Medicine {
	private int medicineID;
	private String medicineName;
	private String note;
	private int stock;
	private int savetyStock;
	private String disease;
	private String pertinence;
	private ArrayList<Integer> listIntakeTimeIDs;

	public int getId() {
		return medicineID;
	}

	public void setId(int id) {
		this.medicineID = id;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public ArrayList<Integer> getListIntakeTimeIDs() {
		return listIntakeTimeIDs;
	}

	public void setListIntakeTimeIDs(ArrayList<Integer> newList) {
		this.listIntakeTimeIDs = newList;
	}

	public String getPertinence() {
		return pertinence;
	}

	public void setPertinence(String pertinence) {
		this.pertinence = pertinence;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "pertinence";
	}

	public int getSavetyStock() {
		return savetyStock;
	}

	public void setSavetyStock(int savetyStock) {
		this.savetyStock = savetyStock;
	}

}
