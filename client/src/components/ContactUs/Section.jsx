import React from 'react';

const Section = () => {
    return (
        <>
        <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-violet-950 mb-8">Contact Us</h2>
                <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Whether you have a question about events, membership, or anything else, our team is ready to answer all your questions.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                        <input type="text" id="name" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input type="email" id="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                        <textarea id="message" rows="5" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">Send Message</button>
                </form>
                <div className="mt-10 text-center text-gray-600">
                    <p><strong>Address:</strong> 123 Bodija St, Ibadan, Nigeria</p>
                    <p><strong>Email:</strong> info@osaagosassociation.com</p>
                    <p><strong>Phone:</strong> +234 856 7890 342</p>
                </div>
            </div>
        </section>
        </>
        
    );
}

export default Section;
