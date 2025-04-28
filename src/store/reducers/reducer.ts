//combie all reducer
import { combineReducers } from 'redux';
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Import Firebase Firestore
import kanjiReducer from './kanjiReducer';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Correct default import for redux-thunk

// Initialize Firestore (ensure Firebase is already configured in your project)
const db = getFirestore();

// Rename the local kanjiReducer to avoid conflict
const localKanjiReducer = (state = { kanjiList: [] }, action: any) => {
    switch (action.type) {
        case "FETCH_KANJI_LIST":
            // Fetch Kanji list from Firebase
            const fetchKanjiList = async () => {
                try {
                    const kanjiCollection = collection(db, "kanji"); // Replace "kanji" with your Firebase collection name
                    const kanjiSnapshot = await getDocs(kanjiCollection);
                    const kanjiList = kanjiSnapshot.docs.map(doc => doc.data());
                    return kanjiList;
                } catch (error) {
                    console.error("Error fetching Kanji list:", error);
                    return [];
                }
            };

            // Note: This is an async operation. You might need middleware like redux-thunk to handle it properly.
            return {
                ...state,
                kanjiList: fetchKanjiList(), // This will need to be handled asynchronously
            };

        default:
            return state;
    }
};

// Update the rootReducer to use the renamed local reducer
const rootReducer = combineReducers({
    kanji: kanjiReducer,
    // thêm các reducer khác nếu cần
});
//export reducer
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export default store;

