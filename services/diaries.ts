// import diaryData from '../data/data.json';
import diaries from '../data/diaries';
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';

// type assertion is discouraged unless it is necessary
// and it means the full power of typescript not utilized
// another better alternative is to change the json to typescript

// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;



const getDiaries = (): DiaryEntry[] => {
    return diaries;
};

const getNonSensitiveDiaries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => ({
        id, 
        date, 
        weather, 
        visibility
    }));
};

const getDiary = (id: number): DiaryEntry | undefined => {
    const diary = diaries.find(diary => diary.id === id);
    return diary;
};

const addDiary = (newObject: NewDiaryEntry): DiaryEntry => {

    const newDiary = {...newObject, id: Math.max.apply(null, diaries.map(diary => diary.id)) + 1};
    diaries.push(newDiary);
    return newDiary;
};

const diaryService = {
    getDiary,
    getDiaries,
    getNonSensitiveDiaries,
    addDiary
};

export default diaryService;