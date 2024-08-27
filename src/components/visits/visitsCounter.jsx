import { useEffect, useState } from 'react';
import { db } from '../../db/firebaseConfig.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const updateVisitCount = async () => {
      const docRef = doc(db, 'visitCounter', 'pageVisits');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const currentVisits = docSnap.data().count;
        console.log("Current visits from Firestore:", currentVisits); // Depuración
        setVisits(currentVisits + 1);
        await setDoc(docRef, { count: currentVisits + 1 });
      } else {
        console.log("Document does not exist, initializing to 1"); // Depuración
        setVisits(1);
        await setDoc(docRef, { count: 1 });
      }
    };

    updateVisitCount();
  }, []);

  return (
    <>
      <p className="connectme">Page Views: {visits}</p>
    </>
  );
};
