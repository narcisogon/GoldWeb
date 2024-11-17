import { collection, onSnapshot } from 'firebase/firestore';

// Replace the fetchInvestments function
const fetchInvestments = () => {
  if (!currentUser) {
    console.log('User is not authenticated. Cannot fetch investments.');
    return;
  }

  const investmentsRef = collection(db, 'investments', currentUser.uid, 'stocks');

  // Use onSnapshot for real-time updates
  const unsubscribe = onSnapshot(investmentsRef, (snapshot) => {
    const investmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setInvestments(investmentsData);
    setLoading(false);
  }, (error) => {
    console.error('Error fetching investments:', error);
    setLoading(false);
  });

  // Cleanup subscription on unmount
  return unsubscribe;
};

useEffect(() => {
  const unsubscribe = fetchInvestments();
  return () => unsubscribe && unsubscribe();
}, [currentUser]);