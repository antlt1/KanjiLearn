import { setKanjiList, setCurrentKanji } from "../reducers/kanjiReducer";
import { AppDispatch } from "../store";
// import { Kanji } from "../../models/kanjiModel";

// action cap nhat danh sach kanji
export const updateKanjiList = (kanjiList: any[]) => {
    return (dispatch: AppDispatch) => {
        dispatch(setKanjiList(kanjiList));
    };
};
// action cap nhat kanji hien tai
export const updateCurrentKanji = (kanji: any) => {
    return (dispatch: AppDispatch) => {
        dispatch(setCurrentKanji(kanji));
    };
};
// action lay danh sach kanji tu api firebase(database root tree) đã liên kết  firebase config rồi
export const fetchKanjiList = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch("https://kanji-app-4b0a1-default-rtdb.firebaseio.com/kanji.json");
            const data = await response.json();
            const kanjiList = Object.values(data); // Chuyển đổi đối tượng thành mảng
            dispatch(updateKanjiList(kanjiList)); // Cập nhật danh sách kanji trong Redux store
        } catch (error) {
            console.error("Error fetching kanji list:", error);
        }
    };
    
};