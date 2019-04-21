#include <FirebaseArduino.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <Servo.h>


#define WIFI_SSID "your_network_name"
#define WIFI_PASSWORD "your_network_password"


#define FIREBASE_HOST "your_database_url"
#define FIREBASE_AUTH "your_database_secret_key"


Servo myservo_red;  // create servo object to control a servo
Servo myservo_green;  // create servo object to control a servo
Servo myservo_yellow;  // create servo object to control a servo

    
// counting the red balls 
void count_red(int num){
 int angle = 70;
  for(int i=0; i<num; i++){
    Serial.println("the current ball is red "  );
    for (int pos = 0; pos <= angle; pos += 1) { 
      delay(20);
      myservo_red.write(pos);             
                            
    }
    for (int pos = angle; pos <= 0; pos -= 1) {  
      myservo_red.write(pos);             
      delay(20);                      
    }
    delay(1000);
  }
}
//---------------------------------------------------------------------------------------------------------------------------------
// counting the green balls 
void count_green(int num){
 
int angle = 70;
  for(int i=0; i<num; i++){
    Serial.println("the current ball is green "  );
    for (int pos = 0; pos <= angle; pos += 1) { 
      delay(20);
      myservo_green.write(pos);             
                            
    }
    for (int pos = angle; pos <= 0; pos -= 1) {  
      myservo_green.write(pos);             
      delay(20);                      
    }
    delay(1000);
  }
}


//---------------------------------------------------------------------------------------------------------------------------------
// counting the yellow balls 
void count_yellow(int num){
  
 int angle = 70;
  for(int i=0; i<num; i++){
    Serial.println("the current ball is yellow "  );
    for (int pos = 0; pos <= angle; pos += 1) { 
      delay(20);
      myservo_yellow.write(pos);             
                            
    }
    for (int pos = angle; pos <= 0; pos -= 1) {  
      myservo_yellow.write(pos);             
      delay(20);                      
    }
    delay(1000);
  }
}

void setup() {
  
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  
}


void loop() {
  //get data red_balls
  int red = Firebase.getInt("node/red");
  count_red(red);
  Serial.print("RED :  ");
  Serial.print(red);
  
  //get data green_balls
  int green = Firebase.getInt("node/green");
   count_green(green);
  Serial.print("  GREEN :  ");
  Serial.print(green);

  //get data yellow_balls
  int yellow = Firebase.getInt("node/yellow");
  count_yellow(yellow);
  Serial.print("  YELLOW :  ");
  Serial.println(yellow);
 
 
}
