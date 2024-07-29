import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const FourthSection = () => {
    const dummyNews = [
        {
            title: 'Alumni Reunion Success',
            content: 'The recent alumni reunion was a huge success, with many attendees praising the organization and the event.',
            author: 'Ibrahim',
            timestamp: '2024-07-01'
        },
        {
            title: 'New Scholarships Available',
            content: 'We are pleased to announce that new scholarships are now available for deserving students and alumni.',
            author: 'Ibrahim',
            timestamp: '2024-07-05'
        },
        {
            title: 'Career Development Workshop',
            content: 'Join our upcoming career development workshop to enhance your skills and advance your career.',
            author: 'Ibrahim',
            timestamp: '2024-07-10'
        }
    ];
        
    return (
    <>
    <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
    <div className="p-10">
            <h1 className="text-3xl font-semibold mb-6">Latest News</h1>
            <div className="space-y-6">
                {dummyNews.map((news, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
                        <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
                        <p className="text-gray-700 mb-2">{news.content.substring(0, 100)}...</p>
                        <Link to={`/news/${index}`} className="text-orange-400 hover:underline">Read More</Link>
                        <p className="text-gray-500 mt-2">Author: {news.author}</p>
                        <p className="text-gray-500">Date: {news.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    <Footer/>
</>
);
};

export default FourthSection;
