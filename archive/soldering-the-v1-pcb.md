---
title: Soldering the v1 PCB
summary: Follow these instructions to assemble the Mirobot control board
layout: doc
tags:
  - Building
  - PCB
  - Soldering
hardware: mirobot-v1
type: instruction
level: core
---

Unwrapping
----------

When you unwrap the package you should see a pink bag with the components in it, a white PCB and the black battery box.
Take these out and put the rest of the package to one side for now.

![Unwrapping](/assets/docs/soldering-the-v1-pcb/01.jpg)

To assemble the PCB you will need:

 - A soldering iron ([here's a good low cost one](http://www.amazon.co.uk/gp/product/B000ELJ0C4))
 - Solder ([60/40 tin/lead solder](http://www.amazon.co.uk/gp/product/B00IMM9H3Y) is the easiest to use. Lead free is harder)

It is highly recommended to watch [this soldering tutorial](https://learn.adafruit.com/adafruit-guide-excellent-soldering/) before starting if you're not used to soldering. Soldering isn't too difficult, but it's worth taking the time to make sure it's done well so it is more likely to work first time. 


Soldering tips
--------------

 - Using 60/40 tin/lead solder really is much, much easier than using lead free. If it's your first time soldering, I wouldn't even try with lead free solder.
 - Soldering is all about making the bond between the component and the PCB. After each component, make sure you can see a clear flow of solder between the two surfaces.
 - If you can't see the two surfaces being fully connected, just heat it again and add a little solder and it should flow into place.
 - Once you've soldered a pin, you shouldn't be able to see the hole it goes into because it should be fully covered by solder.
 - Don't use too much solder as this can cause short circuiting.

**WARNING: Soldering involves temperatures hot enough to melt metal, so please be careful and use appropriate safety wear**


The parts
-------------

Here are all of the parts that you will need to use for this stage. There are some other parts in the pink bag that will be used at a later stage so put these away for now.

![The parts](/assets/docs/soldering-the-v1-pcb/02.jpg)


Step one
-------------

Solder the WiFi socket in place. Be careful not to use too much solder on this part because it can 'wick' up into the socket and make it hard to get the module in.

![Step one](/assets/docs/soldering-the-v1-pcb/03.jpg)


Step two
-------------

Solder both of the chip sockets in to place. Take care to put the notches on the short end in line with the outline on the PCB. The larger one should have the notch on the left and the smaller should have the notch on the right. Sometimes the pins on these get slightly bent so make sure they are all straight before putting them in.

![Step two](/assets/docs/soldering-the-v1-pcb/04.jpg)


Step three
-------------

Solder the stepper sockets in place. You need to make sure that the side with two notches in it is at the edge of the board - check the photo. They should clip satisfyingly into place.

![Step three](/assets/docs/soldering-the-v1-pcb/05.jpg)


Step four
-------------

Solder the expansion pins in to place. These should be inserted with the small end of the pins going through the PCB from the top down.

![Step four](/assets/docs/soldering-the-v1-pcb/06.jpg)


Step five
-------------

Solder in the power switch. This can go either way around.

![Step five](/assets/docs/soldering-the-v1-pcb/07.jpg)


Step six
-------------

Now we need to solder the pins on to the Arduino board we are using. The best way of doing this is to push both rows of pins into the Arduino socket as shown in this photo.
Now is also a good time to put the stepper driver chip into its socket. You need to make sure the small notch on one end of the chip aligns with the notch on the socket. Check the photo if you're unsure.

![Step six](/assets/docs/soldering-the-v1-pcb/08.jpg)

You can then put the Arduino onto these pins and solder them in. Doing it this way makes sure they are well aligned and will fit in and out nice and easily. The pins are quite small but take your time and it shouldn't be too tricky.

![Step six](/assets/docs/soldering-the-v1-pcb/09.jpg)


Step seven
-------------

If you need to reprogram the Arduino at some point in the future, you can take it out of the socket and solder on the programming pins as shown in the photo. You don't need these on in order to use Mirobot though.

![Step seven](/assets/docs/soldering-the-v1-pcb/13.jpg)


Step eight
-------------

First, inspect your soldering. There should be no messy bits of solder bridging from the pins to other parts of the PCB. If there are, use the soldering iron to remove them. We're going to test the board before soldering the battery pack on because once it's in place it would need removing if there are any errors:

![Step eight](/assets/docs/soldering-the-v1-pcb/10.jpg)

 - Move the switch to the Off position.
 - Put the Arduino and the WiFi module in to their sockets
 - Put 4 AA batteries into the battery pack.
 - Put the battery pack pins into the two remaining holes on the board, like in this photo
 - Push gently on the bottom of the battery pack so it makes contact with the holes
 - Move the switch to the On position.
 - There should be two LEDs lit up on the Arduino. One should stay solid (the power LED) and one should flash for a few seconds before turning solid as well.

If the LEDs don't turn on then turn it off straight away because there's most likely a short circuit. Take a careful look at the back of your board to double check for any bits of solder that might be bridging between pins.
**Don't solder the battery pack on until you have successfully done this step!**
It's worth making sure at this point that you're using fully charged batteries because low batteries can cause issues that may make this step fail.


Step nine
-------------

![Step nine](/assets/docs/soldering-the-v1-pcb/11.jpg)

It's time to attach the battery holder. First, peel off the cover over the sticky pad on the battery holder. Then push the pins on the holder through the PCB from behind like in this picture. Once you've pushed it on so it sticks then you should carefuly solder it.
Put the batteries in the holder and turn the switch on again to make sure the LEDs still come on and flash correctly. If the LED starts flashing then the board is OK and you should start [building the chassis](/docs/building-the-v1-chassis/)
