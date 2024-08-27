import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyC6uW5DHFVhzxe617AREqQf5OGUV711Ahc",
  authDomain: "portafolio-alberto-gongora.firebaseapp.com",
  projectId: "portafolio-alberto-gongora",
  storageBucket: "portafolio-alberto-gongora.appspot.com",
  messagingSenderId: "818117801770",
  appId: "1:818117801770:web:0d092c6d05ab682d3bd053",
  measurementId: "G-63FW1VFKEK"
};

// Inicializa Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Inicializa Firestore para la base de datos
const db = getFirestore(app);

// Exporta db y analytics para que puedas usarlos en otros componentes
export { db };
