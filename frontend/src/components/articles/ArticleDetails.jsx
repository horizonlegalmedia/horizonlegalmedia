import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound';


const ContentBlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-gray-700 mb-4 leading-relaxed">{block.text}</p>;
    
    case 'list':
      return (
        <ul className="mb-6">
          {block.items.map((item, index) => (
            <li key={index} className="mb-3 pl-4 border-l-4 border-blue-100">
              <strong className="font-medium text-gray-800">{item.name}</strong>
              <span className="text-gray-600">{item.description}</span>
            </li>
          ))}
        </ul>
      );
    
    default:
      return null;
  }
};

const ArticleDetail = ({ articles }) => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <PageNotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={article.image.url}
          alt={article.image.alt}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6 md:p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">{article.author}</span>
              <span>{article.publishedDate}</span>
            </div>
          </header>

          {article.details.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {section.title}
              </h2>
              {section.contentBlocks.map((block, idx) => (
                <ContentBlockRenderer key={idx} block={block} />
              ))}
            </section>
          ))}

          <footer className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed">{article.conclusion}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
