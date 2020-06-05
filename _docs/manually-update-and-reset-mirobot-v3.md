---
title: Manually Update and Reset Mirobot v3.
summary: Update your firmware and rebuild your mirobot software with Arduino.
layout: doc
tags:
  - Guide
  - Build
  - Arduino
hardware: mirobot-v3
type: instruction
level: advanced
---

The Mirobot v3 uses a microcontroller called an ESP8266, using open source software from the Arduino company. The Mirobot v3 Board comes pre-installed with basic software so you can control the Mirobot, but this can be upgraded to the latest software and reset to its original state using these instructions.

The first stage of the process is to install and set up the open source [Arduino](https://arduino.cc/en/Guide/Introduction) software. It is available to download from [the Arduino website](https://arduino.cc/en/Main/Software). Select your operating system and follow the instructions given to install. This software is called the Arduino IDE, which stands for Integrated Development Environment.

Next we add support for the ESP8266 microcontroller and our own libraries. To do this:

Launch the Arduino IDE and click on "File-> Preferences".

In "Additional Boards Manager URLs" add "http://arduino.esp8266.com/stable/package_esp8266com_indes.json" and click on "OK"

Go to "Tools->Board->Boards Manager", type "ESP8266" and install the support package.

Now we add two lots of software, the first is called Marceau and the second is called MeArm.

Go to "Sketch->Include Library->Manage Libraries", type "Marceau" and install the package.

Go to "Sketch->Include Library->Manage Libraries", type "Mirobot" and install the package.

Go to "File->Examples" and scroll all the way down. Select "Mirobot->firmware v3". 

Go to "Tools->Board->NodeMCU 1.0 (ESP-12E Module)" which will set the board type to the correct board.

Now click the "tick button" in the top left to verify the code. All being well it should compile. If not check that you've not missed any of the steps outlined above. Since we have not yet connected the Mirobot to your computer you won't be able to upload the code - we are checking that the software install is correct before we introduce any hardware.

Once you've verified the code, go to "File->Save as" and save "firmware v3", it should save in the Arduino folder in your documents folder.

Connect your Mirobot v3 Board to your PC or Mac via a micro-USB cable and click upload once it recognised the device and assigns it a COM port. You may need to select the COM port within the "Tools->Boards->Port" menu in the IDE.

Once the code has uploaded you will have the latest version of the Mirobot software installed. Next we need to add the apps softare so you can learn to code in more languages (or just use your favourite).

To do this we need to add another tool to the Arduino IDE which allows us to add apps to the Mirobot, giving us access to Blockly, Javascript, Python, and more.

Download the latest version of the plugin on [this website](https://github.com/esp8266/arduino-esp8266fs-plugin/releases). 

Unzip the contents and place it in the tools folder of your Arduino directory (for most this is in your Documents directory). You may need to create a new folder called "tools". The final path will look something like this:

`home directory\Arduino\tools\ESP8266FS\tool\esp8266fs.jar`

Restart the Arduino IDE by closing and opening the application.

On reopening your firmare v3 example you will see a new option under "Tools->ESP8266 Sketch Data Upload"

With your Mirobot v3 Board connected to your computer you will be able to click this new option and sit back while it uploads the contents of the data folder to your ESP8266.

Once this has finished loading you can close your Arduino IDE.

Open your Wifi Networks and you will see a new network named "Mirobot-xxxx" where xxxx represents numbers and letters, for example "Mirobot-129C". Join this new network. 

Open your web browser and go to local.mirobot.io

You can now operate and program your Mirobot via the languages shown when you click the four black squares on the top of the screen.

Finally add the Mirobot to your wireless network. Click on the black gear logo in the top right corner. Select your network and input your password. Once connected go back to the black gear logo and note down the IP address that has been assigned by your network to the Mirobot (eg 192.168.1.15).

Disconnect from the Mirobot network and rejoin your wireless network. Open a browser and type the IP address you've just noted down into it. This should take you to the Mirobot control panel where you can experiment with coding your Mirobot.
