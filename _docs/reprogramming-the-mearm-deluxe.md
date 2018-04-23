---
title: Reprogramming the MeArm Deluxe
summary: Here's how to reprogram the Brains Board in you MeArm Deluxe
layout: doc
tags:
  - Build
  - Guide
  - Calibration
  - Programming
  - Arduino
hardware: mearm-v1
type: instruction
level: core
---

Introduction
-------------

This guide is intended for those wishing to reprogram their [MeArm Deluxe Kit Brains Board](https://shop.mime.co.uk/collections/mearm/products/mearm-brains-board-with-lcd-and-joysticks). It can also be used as a source for programming the MeArm with any Arduino, with some changes to the files provided.


Identify Your Arduino
---------------------

Over time we've adjusted the MeArm Deluxe kit to improve the experience for our users. This has resulted in us using three types of Arduino clone boards. These are:
- Pro Micro Clone 3V
- Pro Micro Clone 5V
- Pro Mini Clone 5V 

Pro Micros have an onboard USB Micro socket, and should be (in theory) the easiet to interface with. However due to the development of the Arduino ecosystem they ended up in an evolutionary cul-de-sac and are now not as well supported as perhaps they should be.

You can tell whether you have a 3V or 5V from the image below. 

![](/assets/docs/reprogramming-the-mearm-deluxe/01.jpg)

The Pro Mini Clone ships with another piece of hardware called a [CP2102](https://www.silabs.com/documents/public/data-sheets/CP2102-9.pdf), which is actually a really handy tool for your electronics hacking toolbox. It's a little programmer module.

![](/assets/docs/reprogramming-the-mearm-deluxe/02.jpg)

From here we'll divide the programming methods starting with the Pro Mini and CP2102 hardware, since that's the most recent revision of the MeArm Brains Board.


Programming the Pro Mini with CP2102
-------------


At first glance this will seem the more complex of the two methods, but it is the best supported and most robust. 

First connect the Pro Mini and CP2102.

DTR --- DTR
TX0 --- RXD
RX1 --- TXD
VCC --- +5V
GND --- GND


![](/assets/docs/reprogramming-the-mearm-deluxe/03.jpg)

We're operating at 5V so leave the last pin unconnected. On the Pro Mini this is another GND (Ground) pin and on the CP2102 it's a 3V3 (+3.3V). 

Download and install the latest version of the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

Plug your CP2102 into a USB port on your computer and it should find the correct driver from Arduino. As a starting point (or if you've messed things up) the default code for the Brains Board can be cut and pasted from [here](https://raw.githubusercontent.com/mimeindustries/mearm-brains-arduino/master/DeluxeDefault/DeluxeDefault.ino). You'll need to add two 'libraries' to get this to work, these are Adafruit GFX and Adafruit PCD8544.

You can add these libraries in Arduino going to 

Sketch > Include Library > Manage Libraries

![](/assets/docs/reprogramming-the-mearm-deluxe/04.jpg)

Then search GFX, click install, then PCD8544, click install.

Select your board from

Tools > Board "Arduino Pro or Pro Mini"

Then

Processor "ATmega328P (5V, 16 MHz)"

![](/assets/docs/reprogramming-the-mearm-deluxe/05.jpg)

Click Verify, to make sure all is right with the code before it tries to upload.

Then Click Upload

All being well you will have uploaded the code on the screen to your awaiting Brains Board!


Programming with the Pro Micro
-------------

Download **version 1.6.5** of the [Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases#previous). There are problems with the later versions and the chip that we use.
Install the Arduino IDE file following the onscreen prompts. 
Once installed start the Arduino IDE and go to

File > Preferences

and under

Additional Boards Manager URLs:

paste the following link:

https://raw.githubusercontent.com/sparkfun/Arduino_Boards/master/IDE_Board_Manager/package_sparkfun_index.json

Click OK

Then go to

Tools > Board: > Boards Manager

Type Sparkfun and click to install Sparkfun AVR Boards

Close then go to

Tools > Board:

and select Pro Micro.

Go to Tools > Processor

and select "ATMega32u4 (3.3V, 8MHz)" or "ATMega32u4 (5.0V, 16MHz)" depending on your board.

Plugging in your Pro Micro Clone via USB should now install the correct driver. If it fails, please use this driver file (right click and save file as).

You are now ready to start programming your Pro Micro Clone (MeArm Brains Board)


What next?
-------------

Now you can start experimenting. The MeArm Brains board comes with a controller and LCD and we have examples of how to get these running. But the controls aren't perfect for a reason, so you can make them how you like them! Check out the code and our Pin Out diagram so you can get started. This pinout is the same for the Pro Mini, with the exception of one of the GNDs shown below is a Reset pin, this will have been removed on your Pro Mini!  

![](/assets/docs/reprogramming-the-mearm-deluxe/06.jpg)

A great way to experiment is to use a visual programming language like Snap (similar to Scratch) and our next tutorial will show you how to do that in a very quick and simple way!

If you have any problems, please get in touch at [support.mime.co.uk](https://support.mime.co.uk)
