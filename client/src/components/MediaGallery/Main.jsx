import React from 'react';

const mediaItems = [
  { id: 1, type: 'image', url: 'https://via.placeholder.com/300' },
  { id: 2, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, type: 'image', url: 'https://via.placeholder.com/300' },
  { id: 4, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 5, type: 'image', url: 'https://via.placeholder.com/300' },
  { id: 6, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 7, type: 'image', url: 'https://via.placeholder.com/300' },
  { id: 8, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  // Add more media items as needed
];

const Main = () => {
  return (
    <div className="p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Media Gallery</h1>
        <p className="text-gray-600">Browse through our collection of photos and videos.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {item.type === 'image' ? (
              <img src={item.url} alt="Media" className="w-full h-48 object-cover" />
            ) : item.type === 'video' ? (
              <iframe
                src={item.url}
                title="Video"
                className="w-full h-48"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
