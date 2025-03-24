import express from 'express';
import { getArticles, getArticleBySlug, getTopFiveArticles } from '../controllers/articleController.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/top-five-articles', getTopFiveArticles);
router.get('/:slug', getArticleBySlug);


export default router;