#this is assuming you are running on windows subsystem for linux

@echo off

sudo apt-get update
sudo apt-get full-upgrade -y

sudo apt-get install npm maven -y

sudo npm install yarn --global

sudo yarn install

echo "use sudo yarn start or yarn start to initiate frontend dev environment"