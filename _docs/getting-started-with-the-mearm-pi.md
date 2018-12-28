---
title: Getting Started with the MeArm Pi
summary: Start right by setting up your Raspberry Pi first!
layout: doc
tags:
  - Getting Started
  - Guide
  - Software
  - Raspberry Pi
hardware: mearm-pi
type: instruction
level: core
---

To build the MeArm Robot Kit for Raspberry Pi you should first set up your Raspberry Pi and calibrate your servo motors. This guide will help you to do that.

![](/assets/docs/getting-started-with-the-mearm-pi/Blue with tone.png)

## Plug in your MeArm Robot Kit Raspberry Pi Hat

This is the control board that comes with your MeArm Robot Kit for Raspberry Pi. Push it down onto the "GPIO" pins on the Raspberry Pi, these are the two rows of pins along one edge of the Raspberry Pi. The pins should match up with the socket on the MeArm Raspberry Pi Hat. When powering the Raspberry Pi and Hat please use the USB Power socket on the MeArm Raspberry Pi Hat. This will power the Raspberry Pi too.

## Set up your Raspberry Pi

For best results start with a clean install of Raspbian with Desktop, a keyboard, mouse, and monitor. See [raspberrypi.org](https://www.raspberrypi.org/documentation/setup) for more information. If you have purchased a Raspberry Pi with NOOBS, select the recommended Raspbian operating system.

Connect to the internet, using either WIFI or a network cable.

## Install the MeArm Robot Kit for Raspberry Pi software

This is where it might start to feel like you are entering the matrix, for some the "command line" is a scary place, for others it feels like /home. We need to open a terminal, which on Raspbian is on the top shortcuts menu.

First we will update your system, it may have already been done as you set up the system, so this could be quite quick or take a while. In terminal type:

`sudo apt-get update`

`sudo apt-get upgrade`

`sudo apt-get dist-upgrade`

Now we will install some required software...

`sudo apt-get install -y git pigpio nodejs npm`

Install the MeArm software.

`git clone http://github.com/mimeindustries/mearm-js.git`

Move into the mearm repository

`cd mearm-js`

Install some more modules

`npm install`

Enable I2C, this is how the joysticks communicate with the Raspberry Pi. This is pronounced (the letter) I Squared (the letter) C

`sudo raspi-config`

Select "Interfacing Options" then select "I2C" and enable the interface

Now run the server

`sudo nodejs ./server.js`

Use the 6 pin ribbon cable from your MeArm Robot for Raspberry Pi kit to attach to the MeArm Base Board (also in the kit) and attach your Servo Motors to the pin headers provided. With the Orange wire closest to the Y (or O on later boards).

Using the Joysticks you should be able control the servo motors manually.

Now open web browser on your raspberry pi and go to "http://localhost:80"

This will bring up the web interface, where you can pick a coding language app.  Once you've clicked through, click on the wifi logo and place the address "http://localhost:80" into the pop up box. Now you should be able to control the servo motors with the selected app, and use the sliders at the top to be able to set the positions of the servo motors.

## Setting the Servo Motors

Using the slider controllers, set the Base Servo to 0, the Lower Servo to 90, the Upper Servo to 70, and the Grip Servo to 90. Once they have moved to position place the servo horns (the black plastic parts that come with the servo motors) on top as shown in the following image.

![](/assets/docs/getting-started-with-the-mearm-pi/Servoset.png)

## Build your MeArm Robot Arm

Once calibrated, disconnect the servo motors and MeArm Base Board and follow the build instructions for your [model of the MeArm](https://learn.mime.co.uk).
