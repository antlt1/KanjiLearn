import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//kanji reducer  HanTu( hán tự: trong model này có kanji, âm on, âm kun, nghĩa, gợi ý nhớ, chữ higana, mẫu ví dụ)
interface Kanji {
    kanji: string; // chữ kanji
    on: string[]; // âm on
    kun: string[]; // âm kun
    mean: string[]; // nghĩa
    hint: string[]; // gợi ý nhớ
    hiragana: string; // chữ hiragana
    example: string[]; // mẫu ví dụ
}
//đề xuất giá trị mặc định cho kanji
interface KanjiState {
    kanjiList: Kanji[]; // danh sách kanji
    currentKanji: Kanji | null; // kanji hiện tại
}
//gọi hàm createSlice để tạo slice cho kanji
const initialState: KanjiState = {
    kanjiList: [], // danh sách kanji
    currentKanji: null, // kanji hiện tại
};
const kanjiSlice = createSlice({   // tạo slice cho kanji 
    name: "kanji",
    initialState,
    reducers: {
        setKanjiList: (state, action: PayloadAction<Kanji[]>) => {
            state.kanjiList = action.payload;
        },
        setCurrentKanji: (state, action: PayloadAction<Kanji | null>) => {
            state.currentKanji = action.payload;
        },
    },
});
export const { setKanjiList, setCurrentKanji } = kanjiSlice.actions;
export default kanjiSlice.reducer;