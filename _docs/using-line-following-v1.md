---
title: Using Line Following on v1
summary: Use this addon to get Mirobot following lines
layout: doc
tags:
  - Line Following
  - Addons
hardware: mirobot-v1
type: instruction
level: intermediate
frontpage: false
---

First you'll need to solder the line following addon together, then you'll be able to start Mirobot following lines.

The parts
---------

You'll need to find the parts below to build the line following addon:

![The parts](/assets/docs/using-line-following-v1/01.jpg)

The tools you'll need are:

 - A soldering iron
 - Solder (60/40 tin/lead solder is the easiest to use. Lead free is harder)
 - Small wire cutters (snips)


Step one
--------

Solder in the two resistors that are the same into positions R2 and R3. They should have stripes matching those in the picture; orange, orange, red, gold.

![Step one](/assets/docs/using-line-following-v1/02.jpg)


Step two
--------

Solder in the remaining resistor into position R1. It should have stripes matching those in the picture; orange, orange, black, gold.

![Step two](/assets/docs/using-line-following-v1/03.jpg)

Clip off all of the long resistor legs once you've soldered all of the resistors in.


Step three
----------

The line follower uses infrared to detect the line, but because infrared light is invisible, it's difficult to know if you've got this part right or not so you'll need to take extra care over this step.

The clear LED and the black receivers need soldering in. Look carefully at them and you will see that one side of their body is flat and that they have one long leg (on the opposite side). We will use these to make sure we get them in the right way round.

![Step three](/assets/docs/using-line-following-v1/05.jpg)

We'll also be soldering them on the opposite side to the resistors so the first thing to do is turn it over so you are looking at the side with no black lettering on it.

Now you should put the clear LEDs on the end of the arms and the black receivers next to them, like in the photo. The flat side should be on the left and the long leg should be in the right hand hole.

![Step three](/assets/docs/using-line-following-v1/04.jpg)

Check again that they are all facing the right way, solder them in and clip off the legs.

If you heat these LEDs too much they can break, so be careful to only use enough heat to melt the solder and not more


Step four
---------

Solder the pin header in place on the top of the board. The short part of the pins should go through the hole and the long part should stick up (see the next photo if you're unsure)

![Step four](/assets/docs/using-line-following-v1/07.jpg)


Step five
---------

Now you've finished soldering, the line follower addon should look like this:

![Step five](/assets/docs/using-line-following-v1/08.jpg)


Step six
--------

Slide the line follower addon in to the slot at the front of Mirobot and push on the cable so the yellow wire is on the left (with the robot facing forward). Take a look at this photo if you are unsure:

![Step six](/assets/docs/using-line-following-v1/09.jpg)


Step seven
----------

Connect the other end of this long cable on to the main PCB in the position marked "line", making sure that the yellow wire is on the side marked GND (nearest the switch at the edge of the PCB).

![Step seven](/assets/docs/using-line-following-v1/10.jpg)


Step eight
----------

Draw a line approximately 1cm thick in a black pen on white paper, then press the button in the web UI marked "Line Following" and watch as Mirobot follows the line you have just drawn. You may need to [update](/docs/update-firmware-v1/) the UI firmware in order to do this.
