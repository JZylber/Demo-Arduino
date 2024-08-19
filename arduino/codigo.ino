#define RED 11
#define GREEN 10
#define BLUE 9
#define BTN 5 //el boton está conectado con un pull_down en la proto

#define BAUD 9600

int red = 255;
int green = 255;
int blue = 255;
bool serialFlag = true;

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

void loop() {
  
  while (Serial.available() > 1) { 
    // La trama que serice debe ser el valor de cada color separado con comas. 0 <= valor <= 255
    red = Serial.parseInt();
    green = Serial.parseInt();
    blue = Serial.parseInt();
    //if(Serial.read() == '\n')
      //Leo el último caracter para que no vuelva a entrar en el while
    //serialFlag = true;
  }
  //El LED es de ánodo común por lo que invierto el valor 0 totalmente prendido, 255 apagado
  analogWrite(RED, 255 - red);
  analogWrite(GREEN, 255 - green);
  analogWrite(BLUE, 255 - blue);

  if(digitalRead(BTN)){
    delay(250);
    Serial.println("Hola");
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
