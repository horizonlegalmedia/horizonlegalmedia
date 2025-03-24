import Article from '../models/Article.js';

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTopFiveArticles = async (req, res) => {
  try {
    const articles = await Article.find().limit(5);
    if (!articles || articles.length === 0) {
      return res.status(404).json({ message: 'No articles found' });
    }
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
