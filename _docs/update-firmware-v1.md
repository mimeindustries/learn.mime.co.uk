---
title: Updating the firmware on v1
summary: Use the updater to get the latest code running on Mirobot
layout: doc
tags:
  - WiFi
  - Firmware
  - Updating
hardware: mirobot-v1
type: instruction
level: core
---

Download the app
----------------

First, you'll need to download the updater application:

 - [Mac Version](https://github.com/bjpirt/mirobot-updater/releases/download/v1.2.0/mirobot_updater_1.2.0_mac.zip)
 - [Windows Version](https://github.com/bjpirt/mirobot-updater/releases/download/v1.2.0/mirobot_updater_1.2.0_win.zip)
 - Linux Version ([32 bit](https://github.com/bjpirt/mirobot-updater/releases/download/v1.2.0/mirobot_updater_1.2.0_linux32.zip), [64 bit](https://github.com/bjpirt/mirobot-updater/releases/download/v1.2.0/mirobot_updater_1.2.0_linux64.zip)) - tested on Ubuntu

Unzip the folder and run the application

If you're on a mac you may need to right click on it and select "Open" if you're using a recent version of Mac OS X. See [this page](http://support.apple.com/en-gb/HT202491) for more details if you're interested why.


Connect to Mirobot
------------------

You'll need to know Mirobot's IP address in order to update it. If you're on the mirobot network, its IP address will be 10.10.100.254.

![The updater](/assets/docs/update-firmware-v1/firmware_update.png)

If you're updating over the mirobot network, make sure you start the application while you have a connection to the internet so that it can download the latest versions.

Enter the IP address and click connect. You should see the app update with the current versions (in green) or out of date versions (in red)


Update
------

You can click the "Update" button next to the firmware you want to update. If the firmware looks up to date but didn't install properly you can still force update it to try again.


Updating the Arduino firmware
=============================
It is no longer possible to update the Arduino firmware over the WiFi network because it has proven itself to have too great a risk of leaving it in a broken state. To update the Arduino firmware, you will need a USB to Serial converter compatible with the 6 pin header that's available on the Arduino. There are many different models of these converters, but I have found that those based on an FTDI chip are the best supported in general. Some examples of suitable converters are:

 * [FTDI Friend](https://www.adafruit.com/products/284) from Adafruit. These are pretty well distributed so check if they're available locally
 * [FTDI Cable](https://www.adafruit.com/products/70). Search locally for "TTL-232R-3V3" to find one of these closer to you

If you're looking for a much cheaper option then you should search for "CP2102 USB Serial" on eBay to find a converter for a few dollars, though there are so many variants of these that it's difficult to recommend a specific one. Once you've got your converter, then you should follow [the instructions](../update-arduino-serial/) to update the firmware using the Arduino IDE over serial.