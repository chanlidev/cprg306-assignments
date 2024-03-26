import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];

    // Reference to the items subcollection of the user's document
    const userItemsRef = collection(db, `users/${userId}/items`);
    
    // Querying the items subcollection
    const querySnapshot = await getDocs(userItemsRef);

    // Iterating over each document in the items subcollection
    querySnapshot.forEach(doc => {
        // Adding an object to the items array containing document ID and data
        items.push({
            id: doc.id,
            data: doc.data()
        });
    });

    return items;
}

// Function to add a new item to a specific user's list of items in Firestore
async function addItem(userId, item) {
    // Reference to the items subcollection of the user's document
    const userItemsRef = collection(db, `users/${userId}/items`);

    // Adding the item to the items subcollection
    const newItemRef = await addDoc(userItemsRef, item);

    // Returning the ID of the newly created document
    return newItemRef.id;
}

// Exporting the functions
export { getItems, addItem };