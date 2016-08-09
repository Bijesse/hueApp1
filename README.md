# Color Changing App for Philips Hue

This project is being created as part of the General Assembly JavaScript Development Course.  

##Project overview 

* This project will control the Philips Hue lights found in my apartment via the Philips Hue API.
* The user will be able to adjust (turn on/off & change colors) the 3 lights in my apartment. 


## Functionality creation step-by-step
1. Create a webapp to manipulate lights within the local network
2. Manipulate lights over the web. Site can be logged into anywhere to change lights.
3. Incorporate Tessel 2 using Johnny-Five to create a wifi controlled light switch with multiple levers/switches
4. Include a functionality with the Open Weather API. Lights will be different colors depending on the temperature outside.

Numbers 1 & 2 are must haves. #3 is a priority and the following are nice-to-haves.

##Addition Libraries
* jQuery

##API Documentation
* http://www.developers.meethue.com/documentation/getting-started
* Debugger tool http://192.168.1.2/debug/clip.html


#Change Log:

#####8/2/16  
**Error:** While on Home network I am recieving the following error on my webapp 
http://i.imgur.com/KTvNTaA.png. However, when I place `https://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7/lights` straight into the browser I recieve the JSON endpoint I am looking for (http://i.imgur.com/G9Qox3j.png). This is leading me to believe that there is an issue with my .ajax call but I am unsure how.

**Solution:** the protocol was creating the error. The lights must run on http

