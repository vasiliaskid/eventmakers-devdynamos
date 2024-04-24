"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchByTitle from "@/components/auth/search";

async function fetchEvents() {
  const res = await fetch("https://eventmakers.devscale.id/events/");
  const data = await res.json();
  return data.data.map((item) => item.events);
}

const EventList = ({ events }) => {
  return (
    <div className="mx-auto max-w-7xl mb-8">
      <h1 className="text-3xl font-semibold mb-4 text-center mt-8">
        Katalog Event
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={event.image}
                alt={event.title}
                className="object-cover rounded-t-lg w-full h-80"
              />
            </figure>
            <div className="card-body card-body bg-gradient-to-b from-yellow-50 to-yellow-100">
              <h2 className="card-title text-xl font-semibold mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-2">
                {event.description.length > 50
                  ? event.description.slice(0, 100) + "....."
                  : event.description}
              </p>
              <p className="text-gray-600">Date: {event.dateTime}</p>
              <p className="text-gray-600">Location: {event.location}</p>
              <div className="card-actions justify-end">
                <Link href={`/events/${event.id}`}>
                  <button className="btn btn-primary">Detail Event</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [events, setEvents] = React.useState([]);
  const [filteredEvents, setFilteredEvents] = React.useState([]);

  React.useEffect(() => {
    async function fetchEventsData() {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
      setFilteredEvents(eventsData);
    }
    fetchEventsData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <SearchByTitle onSearch={handleSearch} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default EventsPage;
