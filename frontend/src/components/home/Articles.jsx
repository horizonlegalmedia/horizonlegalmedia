import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'

const Articles = () => {
  const [topFiveArticles, setTopFiveArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch Top article from backend
    axios.get("http://localhost:5000/api/articles/top-five-articles")
      .then(response => {
        setTopFiveArticles(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, []);

  if(!topFiveArticles){
    <div></div>
  }

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top 5 Articles</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {topFiveArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image.url} alt={article.title} className="w-full h-48 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{article.title}</h3>
                <p className="text-gray-600 line-clamp-2">{article.introductoryPara}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  <Link
                    to={`/articles/${article.slug}`}
                  >
                    Read More
                  </Link>
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-gray-800 font-extrabold !w-10 !h-10 after:!text-4xl -mx-4" />
        <div className="swiper-button-next !text-gray-800 font-extrabold !w-10 !h-10 after:!text-4xl -mx-4" />

      </Swiper>
    </div>
  );
};

export default Articles;
