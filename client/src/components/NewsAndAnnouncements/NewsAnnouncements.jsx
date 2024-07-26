import React from 'react';
import Header from '../Header';
import Section from './Section';
import Footer from '../Footer';

const newsItems = [
    { id: 1, title: 'Alumni Reunion Event', date: '2024-07-15', content: 'Join us for the annual alumni reunion event this year!', image: '/images/news1.jpg' },
    { id: 2, title: 'Scholarship Opportunities', date: '2024-07-10', content: 'New scholarship opportunities available for alumni members.', image: '/images/news2.jpg' },
    { id: 3, title: 'New Alumni Board Members', date: '2024-07-05', content: 'Meet the newly elected members of the alumni board.', image: '/images/news3.jpg' },
    { id: 4, title: 'Job Fair 2024', date: '2024-06-25', content: 'Attend the upcoming job fair and network with top companies.', image: '/images/news4.jpg' },
    { id: 5, title: 'Mentorship Program', date: '2024-06-20', content: 'Apply for our mentorship program and get guidance from experienced alumni.', image: '/images/news5.jpg' },
    { id: 6, title: 'Webinar on Career Growth', date: '2024-06-15', content: 'Join our webinar on career growth and development.', image: '/images/news6.jpg' },
    { id: 7, title: 'Community Service Event', date: '2024-06-10', content: 'Participate in our community service event and give back.', image: '/images/news7.jpg' },
    { id: 8, title: 'Annual Alumni Survey', date: '2024-06-05', content: 'Take part in our annual alumni survey and provide your feedback.', image: '/images/news8.jpg' },
    { id: 9, title: 'Alumni Newsletter', date: '2024-06-01', content: 'Read the latest edition of our alumni newsletter.', image: '/images/news9.jpg' }
];

const NewsAndAnnouncements = () => {
    return (
        <>
            <Header/>
            <Section/>
            <Footer/>
        </>
    );
}

export default NewsAndAnnouncements;
