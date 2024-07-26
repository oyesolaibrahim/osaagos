import React from "react";
import { Link } from "react-router-dom";

const FourthSection = () => {

    const latestNewsItems = [
        { id: 1, title: 'Alumni Reunion Event', date: '2024-07-15', content: 'Join us for the annual alumni reunion event this year!', image: '/images/news1.jpg' },
        { id: 2, title: 'Scholarship Opportunities', date: '2024-07-10', content: 'New scholarship opportunities available for alumni members.', image: '/images/news2.jpg' },
        { id: 3, title: 'New Alumni Board Members', date: '2024-07-05', content: 'Meet the newly elected members of the alumni board.', image: '/images/news3.jpg' },
        // { id: 4, title: 'Job Fair 2024', date: '2024-06-25', content: 'Attend the upcoming job fair and network with top companies.', image: '/images/news4.jpg' }
];
    
    return (
    <>
    <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-violet-950 mb-10">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNewsItems.map(news => (
                    <div key={news.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-violet-950 mb-2">{news.title}</h3>
                        <p className="text-gray-500 mb-4">{news.date}</p>
                        <p className="text-gray-700">{news.content}</p>
                        <Link to="/news" className="text-cyan-500 hover:underline">Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
</>
);
};

export default FourthSection;