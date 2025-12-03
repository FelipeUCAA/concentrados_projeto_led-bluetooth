🕹️ Projeto Fácil: Controle de Brilho de LED com Joystick

✨ O que este projeto faz?

Este é um projeto simples para quem está começando com Arduino. Ele permite que você controle quatro LEDs (um para cima, um para baixo, um para a esquerda e um para a direita) usando um módulo joystick.

Movimento: Quanto mais você empurra o joystick em uma direção, mais brilhante o LED daquela direção fica.

Botão: Se você apertar o botão no topo do joystick, todos os LEDs acendem no máximo.

O objetivo principal é aprender a usar a função analogRead() para ler os movimentos do joystick e a função analogWrite() (PWM) para controlar o brilho dos LEDs.

🔌 Você vai precisar de:

1x Arduino Uno: A placa principal.

1x Módulo Joystick: Com os pinos VRx, VRy e SW (Botão).

4x LEDs: De cores diferentes.

4x Resistores de 220 Ohm (Ω): Para proteger os LEDs.

Fios Jumper e Protoboard.

📌 Como ligar (Montagem do Circuito)

Você precisa conectar o Joystick e os LEDs nos pinos certos do Arduino:

Conexão do Joystick - Pino do Arduino

VRx (Eixo Horizontal) -  A0 (Analógico)

VRy (Eixo Vertical) - A1 (Analógico)

SW (Botão) -  D2 (Digital)

VCC e GND -  5V e GND

Conexão dos LEDs (PWM) - Pino do Arduino (Digital PWM)

LED Esquerda  -  D11

LED Cima  -  D10

LED Baixo -  D9

LED Direita - D6

Lembre-se: Cada LED precisa de um resistor de $220 \Omega$ para não queimar!

💻 Código Arduino Simples

Copie e cole este código no seu Arduino IDE:

// Mapeamento dos pinos do Joystick e dos LEDs
int xPin = A0;
int yPin = A1;
int buttonPin = 2;

int upLed = 10;
int downLed = 9;
int leftLed = 11;
int rightLed = 6;

// Variáveis de Leitura e Brilho (iniciam em 0)
int xVal, yVal, buttonState;
int upBrightness, downBrightness, leftBrightness, rightBrightness;

// =================================================================

void setup() {
  Serial.begin(9600);
  
  // Define os pinos do Joystick como entrada
  pinMode(xPin, INPUT);
  pinMode(yPin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP); // Usa o resistor interno para o botão

  // Define os pinos dos LEDs como saída
  pinMode(upLed, OUTPUT);
  pinMode(downLed, OUTPUT);
  pinMode(leftLed, OUTPUT);
  pinMode(rightLed, OUTPUT);
}

// =================================================================

void loop() {
  // 1. Leitura dos valores do Joystick
  xVal = analogRead(xPin);
  yVal = analogRead(yPin);
  buttonState = digitalRead(buttonPin);

  // 2. Mapeamento dos valores (0-1023) para o brilho (0-255)
  // Os números 489 e 511 são os valores centrais do joystick em repouso.
  
  // Eixo Y
  upBrightness = map(yVal, 489, 0, 0, 255);    
  downBrightness = map(yVal, 489, 1023, 0, 255); 
  
  // Eixo X
  leftBrightness = map(xVal, 511, 0, 0, 255);   
  rightBrightness = map(xVal, 511, 1023, 0, 255);  

  // 3. Controle de Brilho (PWM)

  // Liga o LED de CIMA se o joystick for empurrado para cima
  if (yVal <= 489) { 
    analogWrite(upLed, upBrightness);
  }

  // Liga o LED de BAIXO se o joystick for empurrado para baixo
  if (yVal >= 489) { 
    analogWrite(downLed, downBrightness);
  }

  // Liga o LED de ESQUERDA se o joystick for empurrado para a esquerda
  if (xVal <= 511) { 
    analogWrite(leftLed, leftBrightness);
  }

  // Liga o LED de DIREITA se o joystick for empurrado para a direita
  if (xVal >= 511) { 
    analogWrite(rightLed, rightBrightness);
  }

  // 4. Controle do Botão (liga todos os LEDs no máximo)
  if (buttonState == LOW) { // LOW significa que o botão foi pressionado
    digitalWrite(upLed, HIGH);
    digitalWrite(downLed, HIGH);
    digitalWrite(leftLed, HIGH);
    digitalWrite(rightLed, HIGH);
  }
}
