# firebase
firebase test

#Guide-

        * ionic start firebase blank --v2
        * cd firebase

####Install all the required packages-

            * npm install @ionic/app-scripts@beta
            * npm install firebase --save

####Setting up
        # Import firebase into your app.component

            * import * as firebase from 'firebase';

        # firebase config:

            var config = {
                apiKey: <your-apiKey>,
                authDomain: <your-authDomain>,
                databaseURL: <your-databaseURL>,
                messagingSenderID: <your-messagingSenderID>
            };
            firebase.initializeApp(config);

            "You can get your config settings from your firebase console."