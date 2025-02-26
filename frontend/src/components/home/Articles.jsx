import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { article1, article3,article5 } from '../../data/images/articles'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    slug: "Top-5-legal-considerations-starting-business",
    title: 'Top 5 Legal Considerations When Starting Your Own Business',
    description: 'Starting your own business can be an exciting and rewarding venture, but it’s also filled with legal complexities that could impact the long-term success of your company.',
    image: article1,
  },
  {
    id: 2,
    slug: "role-of-contracts-protecting-freelancers-contractors",
    title: 'The Role of Contracts in Protecting Freelancers and Contractors',
    description: 'Freelancers and contractors play a crucial role in today’s workforce, providing specialized skills and services to a wide range of clients.',
    image: article3,
  },
  {
    id: 3,
    slug: "legal-issues-social-media-influencers-should-know",
    title: 'Legal Issues Every Social Media Influencer Should Be Aware Of',
    description: 'Social media influencers have become powerful figures in the digital age, with the ability to shape trends, promote products, and influence consumer behavior. ',
    image: article5,
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top 3 Articles</h2>
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
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{article.title}</h3>
                <p className="text-gray-600 line-clamp-2">{article.description}</p>
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
