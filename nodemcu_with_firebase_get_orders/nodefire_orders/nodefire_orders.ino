#include <FirebaseArduino.h>
#include <ESP8266WiFi.h>

#define WIFI_SSID "TE-Data"
#define WIFI_PASSWORD "36445678@"


#define FIREBASE_HOST "realtime-23d22.firebaseio.com"
#define FIREBASE_AUTH "Zx2X81BrWtnscIvfaqY2E2VLgEtq9YfzievaOnln"



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
  Serial.print("RED :  ");
  Serial.print(red);
  
  //get data green_balls
  int green = Firebase.getInt("node/green");
  Serial.print("  GREEN :  ");
  Serial.print(green);

  //get data yellow_balls
  int yellow = Firebase.getInt("node/yellow");
  Serial.print("  YELLOW :  ");
  Serial.println(yellow);
 
 
}
