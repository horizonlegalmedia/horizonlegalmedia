import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from backend
    axios.get("http://localhost:5000/api/articles")
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB"); // "22/02/2025"
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={article.image.url}
              alt={article.image.alt}
              className="w-full h-48 object-cover object-top"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{formatDate(article.publishedDate)}</span>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.introductoryPara}
              </p>
              <Link
                to={`/articles/${article.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
