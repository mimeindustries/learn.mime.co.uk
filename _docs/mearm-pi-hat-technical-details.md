---
title: MeArm Pi HAT Technical Details
summary: If you're wanting to use the Pi HAT here's what you'll need to know
layout: doc
tags:
  - Raspberry Pi
  - HAT
hardware: mearm-pi
type: documentation
level: advanced
---

**The MeArm Pi HAT is a joystick controller board for the MeArm Pi Robotic Arm Kit**

![Pinout](/assets/docs/mearm-pi-hat-technical-details/pi-hat.jpg)

It provides the following:

 * An 8 bit I2C ADC (address 0x48) connected to two analogue joysticks
 * Access to the push buttons of the joysticks on GPIO
 * An RGB LED for output
 * A 6 pin port to connect to the servos on the arm

Power can be supplied to the Pi through the HAT or direct in to the Pi, but the servos are only supplied through the HAT to avoid strain on the Pi power supply. The pinout is as follows:

![Pinout](/assets/docs/mearm-pi-hat-technical-details/pinout.gif)

(thanks to [pinout.xyz](http://pinout.xyz) for the diagram)

The pinout of the 6 pin connector is:

![Pinout](/assets/docs/mearm-pi-hat-technical-details/pinout2.gif)

Additionally the I2C and power lines are brought out on to a header (P5) for easy expansion with the following pinout from top to bottom:

![Pinout](/assets/docs/mearm-pi-hat-technical-details/pinout3.gif)