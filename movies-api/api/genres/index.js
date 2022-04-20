import express from 'express';
import { genres } from './genresData';
import Genre from './genresModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});
export default router;


