## Running on the dev enevironment
- Open Terminal and make sure you have github installed
- use the command ```git clone git@github.com:10234567Z/TPG-Management.git``` in any of the directory in which you want to store the cloned project
- use command ```cd TPG-Management && npm i``` and then let it install packages
- To run the project on **dev** environment simply use command ```npm run dev``` and open the URL terminal displays
- To run the project on **production** environment , use
   - ```npm run build```
   - ```npm run start```
   - Open the url terminal displays

## To have a working Email Sending form on your Local Host
- Make file ```.env.local``` in the project directory (if you cloned it should be just TPG-Management folder)
- Now go [here](https://myaccount.google.com/apppasswords) and make a new app and copy the app password you get also note down the gmail-id through which you accessed that page
- Then copy-paste the following code in ```env.local```  
  ```js
    NEXT_SMTP_PASSWORD =<your app password here>
    NEXT_SMTP_EMAIL =<your email here>
  ```
