import express from 'express';
import diaryService from '../services/diaries';
import toNewDiaryEntry from '../utils/toNewDiaryEntry';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send('pong');
});

router.get('/', (_req, res) => {
    const diaries = diaryService.getNonSensitiveDiaries();
    res.send(diaries);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const diary = diaryService.getDiary(Number(id));
    if(diary) {
        res.json(diary);
    } else {
        res.status(404).send();
    }
});

router.post('/', (req, res) => {

    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);
        const diary = diaryService.addDiary(newDiaryEntry);
        res.json(diary);
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

export default router;