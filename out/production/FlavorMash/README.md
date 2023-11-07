# FlavorMatch
CS151 Food Tinder Project

Team #4, William Qiao, Marlon Burog, Anne Mai, Lucas Maldonado

Problem: It's hard to find good restaurants nowdays. People don't know where to eat.

Functionality: We will help people find restaurants that they will enjoy by making an app similar to Tinder, but with restaurants instead of people. 

High Level Description: By using traits of the restaurant such as genre of food, price, and popularity, we will create a stack that users can scroll through based on their preferences. The most compatible restaurants will be at the top of the stack, while the least compatible will be at the bottom. We will continually update the stack based on a user's preferences, and if they swipe left or right on certain restaurants. We will create a database and quantify different traits of restaurants, and assign a weighted score to each trait. By adding up the score, we can create a back-end compatibility rating that we will use to create and update the stack for the user. The stack that we will be using will be the built in Stack from Java JDK. We will create a custom class "Restaurant" and fill the stack with instances of this class. Every time the user swipes, we will pop the top of the stack, and if the stack is empty, then the user will have to wait or let the algorithm run again to repopulate the stack.


Directory Structure:

FlavorMash
	- JFrame
		- (holds frame classes to be extended)
	- frames
		- (will hold different pages we must route to)
	- components
		- (will hold components that we can reuse i.e. buttons)
	- public
		- (will hold all styling and images used)
	- index.java
		- main function that will run application
