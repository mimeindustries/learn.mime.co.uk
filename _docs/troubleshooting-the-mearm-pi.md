---
title: Troubleshooting the MeArm Pi
summary: If you've built your MeArm Pi and it's not working, here's some help
layout: doc
tags:
  - Troubleshooting
  - Help
hardware: mearm-pi
type: troubleshooting
level: core
---

## Mechanical issues
If your arm is responding to joystick movements but not moving very well, try these tips to get it working properly.

### Overtightened screws
One of the common causes of the arm not moving properly is that the screws are overtightened. When tightening a screw, the parts it is holding in place should be able to move freely around it with no force. If you lift a part up it should drop back down with gravity.

### Undertightened screws
Equally, if you undertighten the screws the arm will have a lot of play on it and be inaccurate. The best thing is to tighten the screw until it just stops the joint moving and then undo it slightly until it loosens off.

### Is the base too tight?
If the arm is having problems rotating around the base then the base servo may be too tight. This is due to the variation in thickness of the Perspex. The best thing to do in this situation is to slightly undo the screw holding the servo horn in place so that it takes the pressure off this joint.


## Software issues
The Raspberry Pi Zero can take up to 90 seconds to boot for the first time, so the first tip is to be patient.

There are a few signs that the Raspberry Pi has booted correctly:
 - You can see the headlessPi wireless network
 - The LED on the HAT should light up red initially and then go green once it has joined your WiFi network
 - The joysticks should make the arm move

If it hasn't booted correctly, one useful tip to diagnose what's going on is to plug in an HDMI monitor to the Pi and see if it boots up properly.

The disk image should boot up properly so make sure you've done that step correctly.