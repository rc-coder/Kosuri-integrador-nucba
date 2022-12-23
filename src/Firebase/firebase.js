import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdxnzh7Sgc7sJKSQc1xyFSEOa6q4oPWPk',
  authDomain: 'kosuri-sushi.firebaseapp.com',
  projectId: 'kosuri-sushi',
  storageBucket: 'kosuri-sushi.appspot.com',
  messagingSenderId: '80006146291',
  appId: '1:80006146291:web:aa5e20364e259fc55a6f86',
  measurementId: 'G-WCE7WDS6QL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Auth

export const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

// Firestore

const database = getFirestore(app);

export const createUserProfileDoc = async (user, additionalData) => {
  if (!user) return;
  const userRef = doc(database, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    const userData = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };

    try {
      await setDoc(userRef, userData);
      // console.log(userData);
    } catch (error) {
      console.log('Error creatiing user', error.message);
    }
  }

  return userRef;
};

export const createOrderDoc = async (order) => {
  if (!order) return;
  const orderRef = doc(database, 'orders', order.id);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();
    const orderData = {
      userId: order.userId,
      shippingDetails: {
        ...order.shippingDetails,
      },
      items: [...order.items],
      shippingPrice: order.shippingPrice,
      subTotal: order.subTotal,
      total: order.total,
      status: 'pendiente',
      createdAt,
    };

    try {
      await setDoc(orderRef, orderData);
    } catch (error) {
      console.log('Error creating order', error.message);
    }
  }

  return orderRef;
};

export const getOrders = async (userId) => {
  const q = query(
    collection(database, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  try {
    const querySnapshot = await getDocs(q);
    let orders = [];
    querySnapshot.forEach((doc) => {
      orders = [...orders, { id: doc.id, ...doc.data() }];
    });

    return orders;
  } catch (error) {
    console.log('Error getting documents: ', error);
  }
};
