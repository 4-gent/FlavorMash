# FlavorMash
CS151 Food Tinder Project

Team #4, William Qiao, Marlon Burog, Anne Mai, Lucas Maldonado

Problem: It's hard to find good restaurants nowdays. People don't know where to eat.

Functionality: We will help people find restaurants that they will enjoy by making an app similar to Tinder, but with restaurants instead of people. Our application helps indecisive users pick a food option that is catered to what they are craving in the present moment. 

High Level Description: By using traits of the restaurant such as genre of food, price, and popularity, we will create a stack that users can scroll through based on their preferences. The most compatible restaurants will be at the top of the stack, while the least compatible will be at the bottom. We will continually update the stack based on a user's preferences, and if they swipe left or right on certain restaurants. We will create a database and quantify different traits of restaurants, and assign a weighted score to each trait. By adding up the score, we can create a back-end compatibility rating that we will use to create and update the stack for the user. The stack that we will be using will be the built in Stack from Java JDK. We will create a custom class "Restaurant" and fill the stack with instances of this class. Every time the user swipes, we will pop the top of the stack, and if the stack is empty, then the user will have to wait or let the algorithm run again to repopulate the stack.

# Repo Information

This repo is for FlavorMash running with ReactJS on 
frontend with Java running on the backend where
Maven is the package manager and dev environment
and Spring Boot is used to run the application
on port 8080

# Repo Structure
Repo /* Only marking down names you will need to know (+ is a directory, - is a file) */
 
 - README.md /* Hopefully the file you're currently reading */
 + backend /* Backend Directory */
    + src /* Source directory for all code */
        + java\com\flavormash\app /* Group ID Directory */
            - AppApplication.java /* File for the application to start and run on port 8080 */
            - Item.java /* Schema to tell ItemController what parts to do stuff with */
            - ItemController.java /* All API routes for the application */
    - pom.xml /* File stores all dependencies and relevant maven build information */

 + fmash /* Frontend Directory */
    + src
        + components
            - carousel.js /* Carousel used to mimic the swiping, right arrow will switch to match */
            - Navigation.js /* This is the navigation bar at the top */
            /* The following are buttons that help the user to move forward/backward, read the title, or customise their options*/
            - YesNoButton.js 
            - PrefMini.Button.js
            - FlavorBox.js
            - Title.js
            - SubTitle.js
            / * These helped make the columns on the pages * /
            - ColumnInfo.js
            - ColumnLeft.js
            - ColumnRight.js
            - flavors /* logo images */
        + public
            + images
            - different css files
        + routes
            - match.js /* What user sees after they match with a dish */ 
            - swipe.js /* The file that holds carousel and what the user will do their swiping on */
            - flavor.js /* the page that has all of the flavors to pick out */
            - cuisine.js /* the cusisine selection page*/
            - preferences /* users picking their preferences for the dish they will select*/
        - main.js /* Home page file */

### How to Run 
In order to start up the development environment, you need to setup the development enviroment itself

I have two different scripts in Bash that will work for Mac and a Windows Subystem for Linux or Bash shell.

- If you are on Mac
    In your teminal command line go to this directory: repo/fmash/
    run this command first to make the file executable: sudo chmod +x initMac.sh
    run this command: sudo ./initMac.sh
- If you are on Windows
    Use a linux command line not Command Prompt that isn't a Bash Shell
    then go to this directory: repo/fmash/
    run this command: sudo ./init.sh

Assuming you have no problems and all packages are installed
Run these commands on two separate terminals, both frontend and backend have to run at the same time for processes to function

These commands are assuming you already have homebrew installed (for mac users)

Run Backend first
in your terminal:
mvn clean install
mvn clean package
mvn spring-boot:run

Then run Frontend
in a separate terminal:
sudo yarn start or yarn start
