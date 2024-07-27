import React from 'react';

const dummyNews = [
    {
        title: 'Alumni Reunion 2024',
        content: 'We are excited to announce our annual alumni reunion. Don’t miss out on reconnecting with your old friends!',
        author: 'Jane Smith',
    },
    {
        title: 'Tech Innovations Seminar',
        content: 'Join us for a seminar on the latest tech innovations and trends in the industry.',
        author: 'John Doe',
    },
    {
        title: 'Scholarship Opportunities',
        content: 'New scholarship opportunities are available for current students and recent graduates.',
        author: 'Alice Johnson',
    },
    {
        title: 'Career Fair 2024',
        content: 'Our annual career fair is back with new companies and exciting opportunities.',
        author: 'Bob Brown',
    },
    {
        title: 'Workshop on Web Development',
        content: 'Enroll in our workshop to enhance your skills in modern web development techniques.',
        author: 'Emily Davis',
    },
    {
        title: 'Networking Event',
        content: 'A chance to meet and network with industry leaders and fellow alumni.',
        author: 'Michael Lee',
    },
    {
        title: 'New Alumni Portal Launch',
        content: 'We are launching a new portal for easier access to alumni resources and networking.',
        author: 'Sarah Wilson',
    },
    {
        title: 'Volunteering Opportunities',
        content: 'Get involved with our community through various volunteering programs.',
        author: 'David Clark',
    },
    {
        title: 'Annual Report Release',
        content: 'Our annual report has been released with updates on the year’s achievements and goals.',
        author: 'Laura Martinez',
    },
];

const Section = () => {
    return (
        <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
            <div className='news'></div>
            <div className="space-y-6">
                {dummyNews.map((news, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
                        <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
                        <p className="text-gray-700 mb-4">{news.content}</p>
                        <p className="text-gray-500">Author: {news.author}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Section;
