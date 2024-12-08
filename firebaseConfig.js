
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDfUEc7Q8tmObnxvzZ-tLgPmy5oxEJCrok",
	authDomain: "sportapp-52109.firebaseapp.com",
	projectId: "sportapp-52109",
	storageBucket: "sportapp-52109.firebasestorage.app",
	messagingSenderId: "83551039571",
	appId: "1:83551039571:web:75220ee9053f494f4d16a6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

