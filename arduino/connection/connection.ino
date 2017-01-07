/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position
int usbRead = 0;

//leds
int led_chamber_1 = 2;
int led_chamber_2 = 3;

//lichtbarrieren
const int irBrriere = 8;

void setup(){
  Serial.begin(9600);
  pinMode(led_chamber_1, OUTPUT);
  pinMode(led_chamber_2, OUTPUT);
  pinMode(irBrriere, INPUT);
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object  
}

void loop(){  
  if(Serial.available()){
    usbRead = Serial.read() - '0';
    
    if(usbRead == 1){
      
        for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
            // in steps of 1 degree
            myservo.write(pos);
            if(digitalRead(irBrriere)==1){
             Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
            }
            delay(15);
            if(digitalRead(irBrriere)==1){
                 Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
            }
        }

         if(digitalRead(irBrriere)==1){
             Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
         }

         
        for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
            myservo.write(pos);              // tell servo to go to position in variable 'pos'
           if(digitalRead(irBrriere)==1){
             Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
            }
            delay(15);
            if(digitalRead(irBrriere)==1){
               Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
            }
        }

         if(digitalRead(irBrriere)==1){
             Serial.println(digitalRead(irBrriere)); // put your main code here, to run repeatedly: 
         }
    } else if(usbRead == 2){
        digitalWrite(led_chamber_1, LOW);   // turn the LED on (HIGH is the voltage level)
        delay(1000);
    } else if(usbRead == 3){
        digitalWrite(led_chamber_2, HIGH);   // turn the LED on (HIGH is the voltage level)
        delay(1000);  
    } else if(usbRead == 4){
        digitalWrite(led_chamber_2, LOW);   // turn the LED on (HIGH is the voltage level)
        delay(1000);
    }
  }
} 
