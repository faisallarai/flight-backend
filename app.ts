import express from 'express';
import diaryRouter from './routes/diaries';
import testRouter from './routes/test';

const app = express();

app.use(express.json());

app.use('/api/diaries', diaryRouter);
app.use('/test', testRouter);

export default app;