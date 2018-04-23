---
title: Building the v2 Mirobot
summary: Here's how to build the latest version of Mirobot
layout: doc
tags:
  - Build
  - Guide
  - Arduino
hardware: mirobot-v2
type: instruction
level: core
---

The parts
-------------

When you unpack your Mirobot, you'll find a package like this:

![](/assets/docs/building-the-v2-mirobot/01.jpg)

Unpack everything and you'll find six panels which contain the pieces we're going to use to make the chassis:

![](/assets/docs/building-the-v2-mirobot/02.jpg)

To help you figure out which piece is which look for the dots (like a dice) on each panel that help identify them which we'll refer to in these instructions.

![](/assets/docs/building-the-v2-mirobot/02b.jpg)

You should also have the other parts that you can identify below

![](/assets/docs/building-the-v2-mirobot/03.jpg)


Step one
-------------

Find the base (panel 1), the left side (panel 2) a wheel (panel 2 or 3) and a stepper motor like this:

![](/assets/docs/building-the-v2-mirobot/04.jpg)

Put the stepper into the side of the base as in the photo with the cable going down:

![](/assets/docs/building-the-v2-mirobot/05.jpg)

Hook the left side on to the front of the base and push it on fully.

![](/assets/docs/building-the-v2-mirobot/06.jpg)

Once it is in place, push a wheel on to the stepper motor which will hold the side piece in place

![](/assets/docs/building-the-v2-mirobot/07.jpg)


Step two
-------------

Now we're going to repeat step one but with the right hand side of the robot. Put the second stepper motor into the base as shown:

![](/assets/docs/building-the-v2-mirobot/08.jpg)

Hook the right side (panel 4) on to the front of the base and push it on fully.

![](/assets/docs/building-the-v2-mirobot/09.jpg)

Once it is in place, push the other wheel (panel 2 or 3) on to the stepper motor which will hold the second side piece in place

![](/assets/docs/building-the-v2-mirobot/10.jpg)


Step three
-------------

Slide the rear base (the piece with two circular holes in it from panel 5) in to the rear of both side pieces

![](/assets/docs/building-the-v2-mirobot/11.jpg)


Step four
-------------

Hook both of the wheel covers (the pieces with "Mirobot" on them on panel 6) on to the rear base piece that you put on in the previous step. Push them on so they are flat against the wheel and the small hole (the 'o' of Mirobot) goes over the centre of the stepper motor.

![](/assets/docs/building-the-v2-mirobot/12.jpg)


Step five
-------------

Push the front piece (panel 5) down so that it locks the two wheel covers in place. Make sure it is pushed down fully into the base and is properly aligned with the sides and the wheel covers.

![](/assets/docs/building-the-v2-mirobot/13.jpg)


Step six
-------------

Push the main controller board on to the front of the robot like in the photo below. There are two slots in the board which the base of the chassis pushes through. Make sure the socket for the Arduino on the board pushes through the slot in the front piece that you added in the previous step. It won't go in if you've already put the Arduino into its socket so don't do that yet.

![](/assets/docs/building-the-v2-mirobot/14.jpg)

It should be a tight fit but be careful when pushing it on not to push on any of the sharp parts.


Step seven
-------------

Fit the Arduino in to the socket on the main controller board. This should lock the front piece in to place.

![](/assets/docs/building-the-v2-mirobot/15.jpg)


Step eight
-------------

Push the back of the battery compartment (panel 3) down through the base into the lower part

![](/assets/docs/building-the-v2-mirobot/16.jpg)


Step nine
-------------

Loop one of the stepper motor cables around the two hooks in the piece you just added like in the photo below and plug the end of the cable in to the socket on the main controller board. You'll need to push quite firmly so make sure to hold the main controller board in place while you push.

![](/assets/docs/building-the-v2-mirobot/17.jpg)

Then repeat with the second stepper motor cable

![](/assets/docs/building-the-v2-mirobot/18.jpg)


Step ten
-------------

Thread the cable of the servo through the round hole on the right of the base

![](/assets/docs/building-the-v2-mirobot/18a.jpg)

Then pull it through and push the servo into the slot.

![](/assets/docs/building-the-v2-mirobot/18b.jpg)

On the underside, wind the servo wire around the hooks you wound the stepper wires around and plug the wire in to the 3 pin servo pins on the main controller board. Make sure you align the yellow wire with the "Y" mark on the board.

![](/assets/docs/building-the-v2-mirobot/19.jpg)


Step eleven
-------------

Screw the two screws into the holes in the pen arm (panel 1) as in the picture. There's a tool included (the round cog-like piece in panel 2) which you can use to turn the screws.

![](/assets/docs/building-the-v2-mirobot/20.jpg)


Step twelve
-------------

Find the pieces of the pen arm support (the remaining pieces on panel 3) and slot them together as in the photo:

![](/assets/docs/building-the-v2-mirobot/21.jpg)


Step thirteen
-------------

Push these pieces into the slots on the pen arm like in this photo. You can adjust the pen by turning these screws with the tool so it is aligned with the centre of the wheels. If it's not properly aligned you'll get bumps at the corners of your lines when you draw. Once it's in, you can put the elastic band in place like in the photo. There are two elastic bands included so you should have one spare.

![](/assets/docs/building-the-v2-mirobot/22.jpg)


Step fourteen
-------------

Slot the narrow end of the pen arm in to the left hand side of the robot

![](/assets/docs/building-the-v2-mirobot/23.jpg)

Then drop the wide end down so it fits into the slot and rests on top of the servo

![](/assets/docs/building-the-v2-mirobot/24.jpg)


Step fifteen
-------------

Push the wire of the battery holder through the hole in the base

![](/assets/docs/building-the-v2-mirobot/25.jpg)

On the underside, plug it into the power socket on the main controller board. You may need to wind it around some other cables slightly to keep it nice and neat. Don't wind it too tightly otherwise it can be hard to get it out when you chenge the batteries.

![](/assets/docs/building-the-v2-mirobot/25a.jpg)

Step sixteen
-------------

Push the rear wheel into the hole at the back of the robot from underneath then click it into place. It can be a tight fit, so if it's difficult, press it down on a table.

![](/assets/docs/building-the-v2-mirobot/26.jpg)

Congratulations! Mirobot is now fully built! There should be two pieces left; a round tool for adjusting the screws on the pen holder and an L shaped piece which you can use to align the pen in the pen holder. [See here for details on how to do this](/docs/adjusting-the-pen-v2). These both slot in next to the battery holder to keep them safe.


Step seventeen
-------------

Put 4 AA batteries into the battery holder and turn on Mirobot. You should see a network named something like Mirobot-12AB appear in your list of wireless networks.

Join this network and once it has successfully connected you can visit [http://local.mirobot.io](http://local.mirobot.io) in your web browser.

This should load a web page which lets you drag and drop commands to program Mirobot. Once you've had some fun with this, you can join it to your existing wifi network by clicking on "Configure WiFi" in red at the top right of the web page and enter the information requested. For more details on this procedure [see our guide](/docs/get-mirobot-on-the-network).

When it's on your network, take a look at [Mirobot Apps](http://apps.mirobot.io) to explore more things to do with Mirobot. Here are some [challenges](/#tags=challenge) to keep you busy!


Troubleshooting
--------------

If you have any problems with your Mirobot checkout our [troubleshooting guide](/docs/troubleshooting-guide) which covers most common issues (and a few uncommon ones too!).
