# Connect OpenAI to Dialogflow CX
Hey everyone, if you are looking for a connection between OpenAI and Dialogflow CX, then read more. You will learn how to connect your existing Dialogflow CX agent to openAI.

![GitHub User's stars](https://img.shields.io/github/stars/RajKKapadia?style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/RajKKapadia?style=for-the-badge)
# Youtube
I have recorded a quick tutorial on this topic, you can watch it [here](https://youtu.be/_NatW2UWB5M).

### Things you will need
* Dialogflow CX agent
    > some knowledge of Dialogflow CX as well
* OpenAI account and API Key
    > create an account [here](https://openai.com/)
* NGROK for exposing our local server to internet for testing
    > get it from [here](https://ngrok.com/)
* Nodejs as a programing tool
    > install it from [here](https://nodejs.org/en/download/)

### How to use it
* install all the required packages in the project folder
    > use the command `npm install --save`
* create a `.env` file in the folder and set two variables `PORT` and `OPENAI_API_KEY`
* run the local server `npm run start`
* start NGROK engine
    > make sure the ports are same
* set the NGROK url in Webhook section
    > `YOUR NGRK URL/dialogflow` it should be something like this
* test the connection

### Deploy
* You can deploy this functionality on anywhere, for a free resource watch [this](https://youtu.be/0BeYenl5BqQ) video.

# About me
I am `Raj Kapadia`, I am passionate about `AI/ML/DL` and their use in different domains, I also love to build `chatbots` using `Google Dialogflow ES/CX`, I have backend development experience with Python[Flask], and NodeJS[Express] For any work, you can reach out to me at...

* [LinkedIn](https://www.linkedin.com/in/rajkkapadia/)
* [Fiverr](https://www.fiverr.com/rajkkapadia​)
* [Upwork](https://www.upwork.com/freelancers/~0176aeacfcff7f1fc2)
* [Youtube](https://www.youtube.com/channel/UCOT01XvBSj12xQsANtTeAcQ)
