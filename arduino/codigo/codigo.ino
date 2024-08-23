#define RED 11
#define GREEN 10
#define BLUE 9
#define BTN 5 //el boton está conectado con un pull_down en la proto

#define BAUD 9600

int red = 255;
int green = 255;
int blue = 255;
bool on = true;

void setup() {
  pinMode(RED, OUTPUT);
  analogWrite(RED, 255);
  pinMode(GREEN, OUTPUT);
  analogWrite(GREEN, 255);
  pinMode(BLUE, OUTPUT);
  analogWrite(BLUE, 255);

  Serial.begin(BAUD);

  pinMode(BTN, INPUT);  
  
}

void turnOff() {
  on = false;
  analogWrite(RED, 255);
  analogWrite(GREEN, 255);
  analogWrite(BLUE, 255);
}

void updateColor(){
  analogWrite(RED, 255 - red);
  analogWrite(GREEN, 255 - green);
  analogWrite(BLUE, 255 - blue);
}

void turnOn() {
  on = true;
  updateColor();
}



void loop() {
  
  while (Serial.available() > 1) { 
    // La trama que serice debe ser el valor de cada color separado con comas. 0 <= valor <= 255
    red = Serial.parseInt();
    green = Serial.parseInt();
    blue = Serial.parseInt();
    if(on) updateColor();
    //if(Serial.read() == '\n')
      //Leo el último caracter para que no vuelva a entrar en el while
    //serialFlag = true;
  }
  //El LED es de ánodo común por lo que invierto el valor 0 totalmente prendido, 255 apagado
  

  if(digitalRead(BTN)){
    delay(250);
    if(on){
      turnOff();
      Serial.println("off");
    } else {
      turnOn();
      Serial.println("on");
    }
    
  }
  /*if(serialFlag){
    Serial.print("RED ");
    Serial.println(red);
    Serial.print("GREEN ");
    Serial.println(green);
    Serial.print("BLUE ");
    Serial.println(blue);
    serialFlag = false;
  }*/
}
