---
title: Understanding the Mirobot Protocol
summary: Learn how Mirobot communicates under the hood
layout: doc
tags:
  - Protocol
  - Guide
hardware:
  - mirobot-v2
  - mirobot-v3
type: documentation
level: advanced
---

Mirobot uses standard data formats and protocols to enable it to be controlled from any programming language, including directly from the browser. Here's how it works...

High Level Protocol Description
===============================
All communication with Mirobot is done by sending and receiving JSON packets over a WebSocket. Because Mirobot is asynchronous (i.e. it doesn't execute a command immediately) there can be multiple responses to a message that is sent. It can also broadcast notifications for events such as bumping into an obstacle. The JSON message from the client to Mirobot has three parameters:

 - cmd : the command to be executed
 - arg : any arguments to the command
 - id : a string that is used to identify which command a response is for

A response from Mirobot has the following parameter:

 - status : a word describing the status for the command that was sent, e.g. complete
 - msg : a descriptive piece of text or piece of data
 - id : the id of the message that this response is for

For example:

    {"cmd":"forward", "arg":100, "id":"abc123"}

will tell Mirobot to move forward by 100mm. When this is sent, Mirobot will immediately respond with a message saying that this command has been accepted:

    {"status":"accepted", "id":"abc123"}

and once the command has completed, another response will be transmitted

    {"status":"complete", "id":"abc123"}

There are two types of commands that can be sent to Mirobot"
 - short commands which complete immediately
 - long commands which complete after a period of time. There can only be one of these running at a time.

Short commands can be sent at any time, regardless of other commands being sent. If you try to send a long command before another long command has completed you will receive an error response:

    {"status":"error", "msg":"Previous command not finished", "id":"abc321"}

Other errors include sending a command which is not recognised:

    {"status":"error", "msg":"Command not recognised", "id":"abc321"}

or sending badly formed JSON:

    {"status":"error", "msg":"JSON parse error", "id":"abc321"}


Notifications
=============

If you enable notifications for a particular event you will receive occasional messages when the event happens. For example, if you enable notifications for collision, you will receive notification messages which look like this:

    {"status":"notify", "msg":"left", "id":"collide"}

Because this notification is not in response to a particular message that you sent, the id is set to the id of the event that occurred, in this case "collide".


Mirobot Commands
================

Quick reference:

Command          | Argument                                | Type
-----------------|-----------------------------------------|--------
version          | none                                    | short
ping             | none                                    | short
uptime           | none                                    | short
pause            | none                                    | short
resume           | none                                    | short
stop             | none                                    | short
forward          | mm to move                              | long
back             | mm to move                              | long
right            | degrees to turn                         | long
left             | degrees to turn                         | long
penup            | none                                    | long
pendown          | none                                    | long
beep             | milliseconds to beep for                | long
collide          | a floating point scaling factor         | short
collideState     | none                                    | short
collideNotify    | true/false                              | short
follow           | none                                    | short
followState      | none                                    | short
followNotify     | true/false                              | short
slackCalibration | none                                    | short
calibrateSlack   | the number of steps for the calibration | short
moveCalibration  | none                                    | short
calibrateMove    | a floating point scaling factor         | short
turnCalibration  | none                                    | short
calibrateTurn    | a floating point scaling factor         | short



Version
-------
Used to determine which version of the firmware is running. The msg parameter of the response contains the version string.

    {"cmd":"version", "id":"54321"}

response:

    {"status":"complete", "msg":"2.0.10", "id":"54321"}


Ping
-------
Used to make sure the communications are still active. No side effects.

    {"cmd":"ping", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


Uptime
-------
Used to check how long the Arduino has been running since boot. Returns the number of milliseconds as the message.

    {"cmd":"uptime", "id":"54321"}

response:

    {"status":"complete", "msg":"12643", "id":"54321"}


Pause
-------
Pauses the currently operating command.

    {"cmd":"pause", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


Resume
-------
Resumes a paused command.

    {"cmd":"resume", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


Stop
-------
Stops the current command.

    {"cmd":"stop", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


Forward
-------
Moves Mirobot forward by the specified amount of mm

    {"cmd":"forward", "msg":100, "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Back
-------
Moves Mirobot back by the specified amount of mm

    {"cmd":"back", "msg":100, "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Right
-------
Turns Mirobot right by the specified amount of degrees

    {"cmd":"right", "msg":90, "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Left
-------
Turns Mirobot left by the specified amount of degrees

    {"cmd":"left", "msg":90, "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Penup
-------
Moves the pen arm into the up position

    {"cmd":"penup", "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Pendown
-------
Moves the pen arm into the down position

    {"cmd":"pendown", "id":"54321"}

response:

    {"status":"accepted", "id":"54321"}

    {"status":"complete", "id":"54321"}


Collide
------------
Enables built-in collision detection. To stop, send the "stop" command.

    {"cmd":"collide", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


CollideState
------------
Returns the state of the collision sensors. Can be either "none", "left", "right" or "both" depending on the state of the sensors.

    {"cmd":"collideState", "id":"54321"}

response:

    {"status":"complete", "msg":"left", "id":"54321"}


CollideNotify
------------
Enables or disables collision notifications by sending either true or false as the argument.

    {"cmd":"collideNotify", "arg":true, "id":"54321"}

response:

    {"status":"complete", "id":"54321"}

Once enabled, notifications will be emitted when the relevant events happen, e.g.

    {"status":"notify", "msg":"left", "id":"collide"}


Follow
------------
Enables built-in line following. To stop, send the "stop" command.

    {"cmd":"follow", "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


FollowState
------------
Returns the state of the line follower sensors. This is a number that represents the difference in analogue readings for each sensor. When negative it means that the left sensor is over white and the right is over black and the opposite for positive. 

    {"cmd":"followState", "id":"54321"}

response:

    {"status":"complete", "msg":-62, "id":"54321"}


FollowNotify
------------
Enables or disables line follower notifications by sending either true or false as the argument.

    {"cmd":"followNotify", "arg":true, "id":"54321"}

response:

    {"status":"complete", "id":"54321"}

Once enabled, notifications will be emitted when the value as described above changes. This can result in quite a lot of messages and this is quite normal.

    {"status":"notify", "msg":-63, "id":"follow"}


SlackCalibration
----------------
Returns the number of steps that Mirobot moves to pick up the slack in the gearing mechanism of the stepper motors.

    {"cmd":"slackCalibration", "id":"54321"}

response:

    {"status":"complete", "msg":12, "id":"54321"}


CalibrateSlack
--------------
Sets the number of steps that Mirobot moves to pick up the slack in the gearing mechanism of the stepper motors. This also puts it into a mode which tests the calibration by moving backwards and forwards by the amount specified. To stop this send the "stop" command.

    {"cmd":"slackCalibration", "arg":12, "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


moveCalibration
----------------
Returns the scaling factor that Mirobot applies to every move. This is also applied to the turning movements.

    {"cmd":"moveCalibration", "id":"54321"}

response:

    {"status":"complete", "msg":0.997, "id":"54321"}


CalibrateMove
--------------
Sets the scaling factor that Mirobot applies to every move. This is also applied to the turning movements.

    {"cmd":"slackCalibration", "arg":0.997, "id":"54321"}

response:

    {"status":"complete", "id":"54321"}


turnCalibration
----------------
Returns the scaling factor that Mirobot applies to every turn. This is applied after the move calibration has been applied.

    {"cmd":"turnCalibration", "id":"54321"}

response:

    {"status":"complete", "msg":0.997, "id":"54321"}


CalibrateTurn
--------------
Sets the scaling factor that Mirobot applies to every turn. This is applied after the move calibration has been applied.

    {"cmd":"turnCalibration", "arg":0.997, "id":"54321"}

response:

    {"status":"complete", "id":"54321"}
