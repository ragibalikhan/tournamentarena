import React from 'react';
import { Button } from '@/Components/ui/button';
import { CalendarDays } from 'lucide-react';

const events = [
  {
    title: 'Atrena Championship',
    date: 'Dec 15-17, 2024',
    location: 'Los Angeles, CA',
    prize: '$50,000',
  },
  {
    title: 'Sports Masters',
    date: 'Jan 5-7, 2024',
    location: 'New York, NY',
    prize: '$30,000',
  },
  {
    title: 'Gaming Festival',
    date: 'Feb 1-3, 2024',
    location: 'Las Vegas, NV',
    prize: '$25,000',
  },
];

const EventsSection = () => {
  return (
    <section className="py-8 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Upcoming Offline Events</h2>
          <CalendarDays className="h-6 w-6 text-green-400" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-gray-900/30 rounded-lg overflow-hidden p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
              <div className="space-y-1 mb-6">
                <p className="text-gray-400">{event.date}</p>
                <p className="text-gray-400">{event.location}</p>
                <p className="text-green-400 mt-3">Prize Pool: {event.prize}</p>
              </div>
              <Button 
                className="w-full bg-transparent text-white border border-green-400/70 hover:bg-green-400/10 rounded-md"
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;