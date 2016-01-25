# Developer in Residence Code Challenge

## Instructions
This web application was built using the MEAN stack - specifically Mongodb, Express, and Node.  In order to get this application to run, you'll need to download node which you can do from [here](https://nodejs.org/en/).  If you have brew installed already, you can just install the pre-built package with this command:
```
brew install node
```
Once node is installed, you'll also need to get a copy of [Mongodb from here](https://www.mongodb.org/downloads#production).  Again, this can be done from brew with this command:
```
brew install mongodb
```
Once you have setup both node and mongodb, clone down the repository from github with this command:
```
git clone git@github.com:Suiname/dir_code_challenge.git
```
After the repository has been installed, start your instance of mongodb.  This can be done from the command line with this command:
```
sudo mongod
```
Once mongo is running, navigate to the directory where you cloned the github repository and run the following commands:
```
npm install
npm start
```
That will start the server.  Once you have done that, you should be able to navigate to http://localhost:3000/ with any web browser to see the application.
