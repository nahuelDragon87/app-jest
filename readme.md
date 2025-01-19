# README #

This README documents the necessary steps to set up and run your application locally using Expo.

### What is this repository for? ###

- A mobile application built with React Native and Expo.
- Version: 1.0.0
- [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

---

### How do I get set up? ###

#### 1. Clone the Repository

git clone https://github.com/nahuelDragon87/app-jest
cd https://github.com/nahuelDragon87/app-jest

#### 2. Install the Correct Version of Node.js (v22.13.0) ###

This project requires Node.js v22.13.0. Follow these steps to install the correct version.

If you use nvm (Node Version Manager):
Install nvm if you haven’t already. Follow the instructions in the official nvm documentation.

Install Node.js v22.13.0 using the following command:

nvm install 22.13.0
Once installed, select Node.js v22.13.0:

nvm use 22.13.0
Verify the installation by checking the Node.js version:

node -v
The output should be:


v22.13.0
If you don’t use nvm:
Go to the Node.js downloads page and download v22.13.0.

Follow the installation instructions based on your operating system.

Verify the installation by checking the Node.js version:


node -v
You should see:


v22.13.0

#### 3. Install Dependencies
Once you have the correct version of Node.js installed, run the following command to install the project dependencies:


npm install
This will install all necessary packages listed in the package.json file.

#### 4. Run the Project
With the dependencies installed, you can now run the project locally using Expo. To start the project, use the following command:


npm start
This will launch the Expo development server. After running this command, a new page will open in your browser or a QR code will appear in the terminal. You can scan the QR code using the Expo Go app on your phone to view the app on your device.