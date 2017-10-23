---
title: Using your MeArm Pi
summary: Get your MeArm Pi on the network and start programming it
layout: doc
tags:
  - Guide
  - Programming
  - Raspberry Pi
hardware: mearm-pi
type: documentation
level: core
---

Once you've built your MeArm Pi, here's how to start using it. It uses a system called Headless Pi which has a built-in WiFi access point that allows you to configure the WiFi without connecting a keyboard, mouse or monitor.

## Join the built-in WiFi network
The MeArm Pi broadcasts a WiFi network called "headlessPi". Join this network using the password "raspberry" and then visit [local.headlesspi.org](http://local.headlesspi.org) in your browser. You should see an interface load with some apps for controlling the MeArm Pi.

## Join your existing WiFi network
You don't need to do anything else to start using the MeArm Pi but it's often best to join it to your existing WiFi network so that you can continue to use the internet as usual. Click on the icon that says "Connect WiFi!" and you will be able to scan for networks and enter the password for your home network. The light on the HAT should turn from red to green once it has successfully connected. Once you have done this you can rejoin your existing network and reload [local.headlesspi.org](http://local.headlesspi.org).

## Using a Raspberry Pi without WiFi
If you don't have WiFi you can still use this system. Plug your Raspberry Pi into your router using an Ethernet cable. The light on the HAT should turn blue, indicating it has connected successfully. Load [local.headlesspi.org](http://local.headlesspi.org) in your web browser and you should see the built-in interface where you can start programming the arm.

## Using a WiFi dongle
The current HeadlessPi software doesn't currently support this, but you can still easily install the software to run the MeArm Pi yourself. See the instructions [here](https://github.com/mimeindustries/mearm-js/).