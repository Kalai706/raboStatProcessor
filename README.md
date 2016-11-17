#Prerequisites

You need git to clone the raboStatProcessor repository. You can get git from https://github.com/kalaivanisooran/raboStatProcessor.git.

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

#Clone raboStatProcessor

Clone the raboStatProcessor repository using git:

git clone https://github.com/kalaivanisooran/raboStatProcessor.git

cd raboStatProcessor

If you just want to start a new project without the raboStatProcessor commit history then you can do:

git clone --depth=1 https://github.com/kalaivanisooran/raboStatProcessor.git <your-project-name>
The depth=1 tells git to only pull down one commit worth of historical data.

#Install Dependencies

npm install

#Run the Application

install: 

  npm install -g http-server
  
  After installation cd into your project folder and run http-server -o
  
  Note : -o is to open browser to the page
