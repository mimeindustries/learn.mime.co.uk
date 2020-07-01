---
title: Troubleshooting the Mirobot
summary: If you're having problems with your Mirobot, look here for help
layout: doc
tags:
  - Help
  - Troubleshooting
hardware:
  - mirobot-v2
type: troubleshooting
level: core
---

General Problems
---------------------------

### Losing Connection
When first setting up your Mirobot you might find your PC leaves the Mirobot network in favour of another local network with internet connectivity. To prevent this simply uncheck the "Connect Automatically" option whilst working on your Mirobot.

Updating to the latest firmware can also solve many minor connection issues.

v2 Hardware Troubleshooting
---------------------------

### My Mirobot runs backwards
A number of units were sent out with badly wired motors before we realised there was an issue. Fortunately the fix for this can be easily done in software. [Go to this page for more details](../flipping-motors/).

### I can't connect to the Mirobot WiFi network
Early versions of the firmware had a problem with connecting to the Mirobot access point for some devices. If you have access to a Windows or Android device please try using that to access it and then make it join your network. Once you've got it on your network you can update the firmware which should solve this problem. If you are unable to get it on your network, please email [support@mime.co.uk](mailto:support@mime.co.uk) to arrange for a replacement.

### I'm having problems updating the firmware
If the firmware update doesn't seem to be doing anything, please try using the Chrome browser. If it still doesn't seem to be working, email [support@mime.co.uk](mailto:support@mime.co.uk) for help.

### What do the flashing lights mean?
There are three lights on the v2 Mirobot:

 - A red LED on the Arduino which should be constantly on - this means there is power to the board
 - A red LED which should give a double flash that means the Arduino is running
 - A blue LED on the WiFi module which should flash briefly when the power is turned on and then occasionally after that

### Mirobot is not turning by the correct angle
There was a bug in the initial version of the firmware that caused this. Update to the latest version of the Arduino firmware and this should be fixed.

v1 Hardware Troubleshooting
---------------------------

### The wheels turn but get stuck
If one of the wheels is getting stuck on the chassis, first try to take off the wheel cover and see if that stops it catching. If it does then it might be that the wheel is not on quite straight, in which case look down the wheel and see if it needs aligning. If it is still catching, then take the wheel off the motor and make sure the motor can turn fully. If it can't it might be faulty and need replacing.

### The pen arm is stuck
Sometimes the MDF can swell slightly if it is in a humid or damp environment. If this happens, the arms can stick in the slots. The quickest fix for this is to lightly sand the arm on the uncoated MDF side with some fine sandpaper until it moves smoothly again.

### The antenna mount is broken
The antenna mount can be a little fragile, as the instructions say. If you have damaged it during assembly then most of the time it won't affect performance, but if it comes too loose you can use a little glue to stick it back together again (that's the joy of using MDF!).

### The wheels don't move at all but the servo goes up and down
If this happens it's normally because the stepper driver chip has been put in the wrong way round. The small notch on the end of the chip should be on the side that's towards the centre of the board. If in doubt, check the instructions.

### Whenever I try to make it move the LED starts flashing
This means that the voltage is dropping too low and the WiFi module is resetting and is usually just because the batteries are running down. Replace the batteries and try again.

### The web page won't load
Make sure that the second red LED on the Arduino stops flashing before trying to join the network. Once it has stopped flashing then it means the WiFi module is ready and should be working fine. If it doesn't stop flashing, this normally indicates a problem with the soldering.

### The web page can't connect to Mirobot
This means that the WiFI module is working but can't communicate with the Arduino. The normal cause of this is faulty soldering on the Arduino itself so take a magnifying glass and make sure all of the pins are well soldered with no small pieces bridging two of the pins.

### One of the wheels doesn't work properly
First rule out problems with the stepper motors by trying them in reversed position. If the same stepper still has problems then it must be faulty.

If the same problem happens with the other stepper motor then the motors are fine and there must be a problem with the PCB. The most likely culprit is a bad connection on one of the solder joints on the Arduino so check that first. If they all look fine then check all of the other joints. It's very rare for the stepper driver to be faulty.

### When I draw a shape I get bumps at the line corners
This is because the screws on the pen arm have not been adjusted so that the pen is at the centre of the wheels.

Screw them in or out until the tip of the pen is aligned - there are "crosshairs" in the hole in the base to help with this.

### I tried to update the Arduino firmware and now it's broken
You can keep trying to update the firmware using the updater and pressing the reset button on the Arduino manually until it succeeds. If this doesn't work, then you can use a USB to serial converter to connect to the Arduino and reprogram it using that. See these instructions for more details.

### I tried to update the UI and now it's broken
If the UI update fails, then you can keep trying to update using the updater until it succeeds. Alternatively, if this is not working you can visit the firmware update page on the module and use the second input to upload the latest file from github. This seems to work best from a PC using Internet Explorer, but trying other browsers won't harm the module.

### I can't get it to follow a line
First double-check that you've got the LEDs the right way round (look for the flat side) and the resistors in the right place (R1 should have a black line on it, R2 & R3 should have mostly red). Next make sure the cable is plugged in the right way round

Draw a black line around 1cm thick on a white background and place the LEDs on either side of it, then click "start line following" in the UI and it should start following.

It will work best in a room with less sunlight as you'll get more contrast from the IR LEDs
