---
title: Updating the Arduino Over Serial
summary: Replace the Arduino firmware at the heart of Mirobot with your own custom version
layout: doc
tags:
  - Arduino
  - Updating
  - Firmware
  - Serial
type: instruction
hardware:
  - mirobot-v1
  - mirobot-v2
level: intermediate
---

This tutorial will explain how to change the firmware running on the Arduino on board Mirobot. This could be to replace it with your own firmware which does something different or to update the firmware to the latest version for new features.

Get a USB to Serial Converter
-----------------------------
In order to communicate with the Arduino Pro Mini that's on board Mirobot, you will need a serial converter. The most widely supported of these is from FTDI, but any should work. Some examples of suitable converters are:

 * [FTDI Friend](https://www.adafruit.com/products/284) from Adafruit. These are pretty well distributed so check if they're available locally
 * [FTDI Cable](https://www.adafruit.com/products/70). Search locally for "TTL-232R-3V3" to find one of these closer to you

It's best to get a 3.3V version of these because it will also let you update the WiFi module on the V2 Mirobot if you need to. If you're just reprogramming the Arduino you can use either a 5V or a 3.3V cable. If you're looking for a much cheaper option then you should search for "CP2102 USB Serial" on eBay to find a converter for a few dollars, though there are so many variants of these that it's difficult to recommend a specific one.

Install the Arduino IDE
-----------------------

Make sure you've got the Arduino IDE installed on your computer. If you haven't, [download it](http://arduino.cc/en/main/software) and install it. You'll need version 1.6 or greater.

Install the Mirobot library
---------------------------

To install the Mirobot library you should:

 * Open the Arduino IDE
 * Select *Sketch >> Include Library >> Manage Libraries* from the menu
   ![Include Libraries](/assets/docs/update-arduino-serial/1.png)
 * Type in "mirobot" to the search box at the top of the library manager and select the Mirobot library when it shows up. Click the "Install" button.
   ![Library Manager](/assets/docs/update-arduino-serial/2.png)
 
Open the firmware sketch
------------------------

At the bottom of your *File >> Examples* menu, you should have a menu item for Mirobot (if you haven't, then the library is not installed properly).

![The examples menu](/assets/docs/update-arduino-serial/3.png)

If you want to update the stock firmware on your Mirobot, then choose either the "firmware-v1" if you have the first version of Mirobot (bought prior to August 2015) or "firmware-v2" if you have the later version.

If you want to modify the firmware yourself, then you can choose one of the other sketches as an example and get started.

Upload the firmware
-------------------

 - Remove the Arduino during programming to make sure you don't accidentally damage the WiFI module
 - Plug the Arduino into your computer using your USB <-> Serial adapter
 - In the *Tools* menu, select the following:
    - __Board__: Arduino Pro or Pro Mini
    - __Processor__: ATmega328 (3.3V, 8MHz)
    - __Port__: *select your USB to serial converter*
 - Click on the upload icon or choose *File >> Upload* from the menu. You should see a success message saying that the firmware has been successfully compiled and uploaded to Mirobot