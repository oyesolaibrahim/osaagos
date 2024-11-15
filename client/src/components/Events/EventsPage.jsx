import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function DisplayEvents() {
    const dummyEvents = [
        {
            title: 'Alumni Networking Night',
            description: 'An evening of networking and socializing with fellow alumni.',
            date: '2024-08-15',
            location: 'City Hall, Downtown',
            organizer: 'Jane Smith',
            attendees: ['John Doe', 'John Doe'],
        },
        {
            title: 'Tech Summit 2024',
            description: 'A summit focused on the latest tech trends and innovations.',
            date: '2024-09-10',
            location: 'Tech Conference Center',
            organizer: 'Michael Lee',
            attendees: ['John Doe', 'John Doe'],
        },
        {
            title: 'Annual Gala',
            description: 'A formal event celebrating the achievements of alumni.',
            date: '2024-10-05',
            location: 'Grand Hotel Ballroom',
            organizer: 'Sarah Wilson',
            attendees: ['John Doe', 'John Doe'],
        },
        {
            title: 'Career Development Workshop',
            description: 'Workshop on career advancement and skills development.',
            date: '2024-11-01',
            location: 'University Auditorium',
            organizer: 'John Doe',
            attendees: ['Jane Smith', 'Emily Davis'],
        },
        {
            title: 'Alumni Sports Day',
            description: 'A day of fun sports and games for alumni and their families.',
            date: '2024-12-12',
            location: 'Central Park',
            organizer: 'Alice Johnson',
            attendees: ['John Doe', 'John Doe'],
        },
        {
            title: 'Startup Pitch Competition',
            description: 'An event for alumni entrepreneurs to pitch their startups.',
            date: '2025-01-20',
            location: 'Innovation Hub',
            organizer: 'Laura Martinez',
            attendees: ['John Doe', 'Sarah Wilson'],
        },
        {
            title: 'Monthly Book Club',
            description: 'Join us for our monthly book club meeting and discussion.',
            date: '2025-02-15',
            location: 'City Library',
            organizer: 'Bob Brown',
            attendees: ['John Doe', 'Emily Davis'],
        },
        {
            title: 'Annual Alumni Picnic',
            description: 'A casual picnic for alumni to catch up and relax.',
            date: '2025-03-30',
            location: 'Riverside Park',
            organizer: 'Jane Smith',
            attendees: ['Michael Lee', 'Laura Martinez'],
        },
        {
            title: 'Financial Planning Seminar',
            description: 'Learn about financial planning and investment strategies.',
            date: '2025-04-25',
            location: 'Financial Center',
            organizer: 'Sarah Wilson',
            attendees: ['David Clark', 'Alice Johnson'],
        },
    ];

    return (
        <>
        <Header/>
        <div className="p-10">
            <h1 className="text-3xl font-semibold mb-6">Upcoming Events</h1>
            <div className="space-y-6">
                {dummyEvents.map((event, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-6">
                        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                        <p className="text-gray-700 mb-2">{event.description}</p>
                        <p className="text-gray-500">Date: {event.date}</p>
                        <p className="text-gray-500">Location: {event.location}</p>
                        <p className="text-gray-500">Organizer: {event.organizer}</p>
                        <p className="text-gray-500">Attendees: {event.attendees.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
            );
}

export default DisplayEvents;
