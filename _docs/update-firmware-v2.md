---
title: Updating the firmware on Mirobot v2
summary: This guide will help you get the firmware on Mirobot up to date
layout: doc
tags:
  - Firmware
hardware: mirobot-v2
type: instructions
level: beginner
---

The first thing you need to do before updating your firmware is to [get Mirobot on your WiFi network](/docs/get-mirobot-on-the-network/). Once you've done that you should access it via its IP address to load the control web page. At the bottom of the page will be a list of the current firmware versions:

![](/assets/docs/update-firmware-v2/versions.png)

Click on this to bring up the firmware upgrade box:

![](/assets/docs/update-firmware-v2/upgrade.png)

There are three parts to the firmware; the firmware that runs on the Arduino, the firmware that runs on the WiFi module and the web pages that are served from the WiFi module. Their colour will tell you whether they need updating or not. Click on the "Update" button to update each one (do this one at a time). Once it is complete, reload the page to see the new versions at the bottom of the screen.

If you have been directed to try out a pre-release version of the firmware you can check "Use Prereleases" to show this.