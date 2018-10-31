---
title: Configure the WiFi
summary: Learn how to get your Mirobot on your network and configure the WiFi
layout: doc
tags:
  - WiFi
  - Setup
  - Using
hardware: mirobot-v1
type: instruction
level: core
frontpage: false
---

Mirobot uses WiFi to communicate, which means the first thing you need to do to use it is to set up its WiFi connection. In this article there are a couple of WiFi networks that are being used:

 - The internal WiFi network of the Mirobot. This appears as an access point that you can join your computer to. This is "Network A"
 - Your existing WIFi network at home, school or work. In the second part of this we will be configuring Mirobot to join this network. This is "Network B". It can both have its own access point running and join your network at the same time.

The first thing you'll need to do is to access the built-in web interface:

 - Turn it on. The second red LED should start flashing and should then stay on
 - Once it has stopped flashing you should be able to connect to the open wireless network called "mirobot" (Network A)
 - Once you have connected to the "mirobot" WiFi access point, visit [http://10.10.100.254](http://10.10.100.254) and you should see the mirobot interface loading in your browser

Get it on your network
----------------------

Once you've been able to use Mirobot via the built-in interface, the next step is to get it on your WiFi access point (Network B) so you can use the [apps](http://apps.mirobot.io):

 - Make sure you are able to access the built-in interface on [http://10.10.100.254](http://10.10.100.254) as in the first step
 - Click on the "Configure WiFi" link in the top right of the page
   ![The configure WiFi link](/assets/docs/configure-wifi/1.png)
 - Enter the details for your existing WiFi network (Network B). Click the scan button to find it and the encryption settings should be set automatically
   ![The WiFi setup form](/assets/docs/configure-wifi/2.png)
 - Click the "Save" button and Mirobot will restart
 - After 20 seconds, reload your browser and it should say "WiFi Connected" instead
 - To find out what its IP address is, you can click on the "WiFi Connected" link again and see it there
 - Now you should join your computer to your existing network (Network A) again and access Mirobot via this IP address