Your Name, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--
-->

LINE 2: Defining "ball" as an object and declaring variables

LINE 10: ball.x and ball.y refer to the position of the object, while "delta" defines the angle it moves at, and "scale" is the speed variable dependent on mousePressed.

LINE 12: Canvas setup using the window width as the canvas width, and a black background

LINE 20: Setting incrementals with += to animate the ball. with ball.scale set to 1, it does nothing without the mousePressed function.

LINE 30: using "OR" in these conditional functions allows opposing x - y "edges" of the canvas to be conditions along x and y, which the "greater/less than or equal to" statements limit using 0 and canvas width. when the variables are true, the variable is reversed using * -1 causing it to change direction.

LINE 39: When the mouse is pressed, the ball.scale variable is changed in relation to the mouse position, which I had noticed beforehand had influenced it's movement because nothing would change if I clicked in the same spot.

## How did you alter the sketch?

First, I removed the stroke from the ellipse. Then I added size and color as changing factors in the sketch, by doing the following: I defined variables for color and initially set them to white. I added the "if" condition mouseIsPressed, and then set the color variables to choose from random values between 0 and 255. In the same statement I also used the noise function to change the width of the circle. I used modulo to keep the circle from taking over the entire screen, and by returning all the way back to 0 it allowed for a lot of variation. 
In addition to the mouseIsPressed, the circle also randomly changes width to a smaller circle every time it hits the edges of the canvas, I amended this to the other movement rules.

<!--
Please describe how and why you changed the sketch?
-->
