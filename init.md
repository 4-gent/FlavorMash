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
        + public
            + images
            - different css files
        + routes
            - match.js /* What user sees after they match with a dish */ 
            - swipe.js /* The file that holds carousel and what the user will do their swiping on */
        - main.js /* Home page file */

### How to Run 
In order to start up the development environment, you need to setup the development enviroment itself

I have two different scripts in Bash that will work for Mac and a Windows Subystem for Linux or Bash shell.

- If you are on Mac
    In your teminal command line go to this directory: repo/fmash/
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