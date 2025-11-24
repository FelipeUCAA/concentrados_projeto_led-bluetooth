📘 PROJETO_LED-BLUETOOTH
📌 Descrição
Este projeto faz parte da disciplina de Sistemas Digitais da faculdade e tem como objetivo desenvolver um sistema capaz de controlar LEDs via comunicação Bluetooth utilizando a plataforma Arduino.

A ideia central é permitir que o usuário envie comandos através de um dispositivo móvel (smartphone ou computador) para acender, apagar ou alterar o padrão de funcionamento dos LEDs conectados ao Arduino.

🎯 Objetivos
Implementar comunicação sem fio entre Arduino e dispositivos móveis via módulo Bluetooth.

Controlar o estado de LEDs (ligar, desligar, piscar, alterar intensidade).

Aplicar conceitos de sistemas digitais e eletrônica embarcada.

Desenvolver um protótipo funcional e documentado.

🛠️ Tecnologias e Componentes
Arduino UNO/Nano (ou equivalente)

Módulo Bluetooth HC-05/HC-06

LEDs (vermelho, verde, azul, etc.)

Resistores para proteção dos LEDs

Protoboard e fios de conexão

Aplicativo de controle Bluetooth (ex.: Serial Bluetooth Terminal ou app próprio)

⚙️ Funcionamento
O usuário conecta o dispositivo móvel ao módulo Bluetooth do Arduino.

Através do aplicativo, comandos são enviados (ex.: "ON", "OFF", "BLINK").

O Arduino interpreta os comandos e altera o estado dos LEDs conforme solicitado.

🚀 Como Executar
Monte o circuito conforme o esquema proposto.

Carregue o código no Arduino via IDE Arduino.

Emparelhe o dispositivo móvel com o módulo Bluetooth.

Abra o aplicativo de controle e envie os comandos para interagir com os LEDs.

📂 Estrutura do Projeto
Código
PROJETO_LED-BLUETOOTH/
│── README.md
│── src/
│   └── projeto_led_bluetooth.ino
│── docs/
│   └── esquema_circuito.png
│── extras/
│   └── exemplos_comandos.txt
👨‍💻 Equipe
Felipe Ulisses

[Adicione os demais integrantes aqui]

📚 Licença
Este projeto está licenciado sob a Apache License 2.0. Você pode usar, modificar e distribuir este código, desde que mantenha os avisos de licença e não ofereça garantias.

Para mais detalhes, consulte o texto completo da licença em: Apache License 2.0
