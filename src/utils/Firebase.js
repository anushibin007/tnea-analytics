import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

class Firebase {
	init = () => {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyDuRcfFEeHtu0UrrAcPSvyVBpjhedTLAZc",
				authDomain: "tnea-analytics.firebaseapp.com",
				projectId: "tnea-analytics",
				storageBucket: "tnea-analytics.appspot.com",
				messagingSenderId: "643149911937",
				appId: "1:643149911937:web:ef6488be97ff3312933a80",
				measurementId: "G-1DKW2R5R82",
			});
		} else {
			firebase.app();
		}
		firebase.analytics();
		firebase.performance();
	};
}

export default new Firebase();
