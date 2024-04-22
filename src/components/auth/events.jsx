"use client";
import React, { useState } from "react";
import Link from "next/link";
async function fetchEvents() {
  const res = await fetch("https://eventmakers.devscale.id/events/");
  const data = await res.json();
  return data.data.map((item) => item.events);
}

const Navbar = () => {
  return (
    <nav className="bg-neutral-content p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button class="btn btn-secondary">Devdynamos Event</button>
      </div>
      <div>
        <Link href="/login">
          <button class="btn btn-outline btn-info mr-4">Login</button>
        </Link>
        <Link href="/register">
          <button class="btn btn-outline btn-success mr-4">Register</button>
        </Link>
      </div>
    </nav>
  );
};

const EventList = ({ events }) => {
  return (
    <div className="mx-auto max-w-7xl">
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
                className="object-cover rounded-t-lg w-full h-40"
              />
            </figure>
            <div className="card-body card-body bg-gradient-to-b from-yellow-50 to-yellow-100">
              <h2 className="card-title text-xl font-semibold mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-2">{event.description}</p>
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

const Footer = () => {
  return (
    <footer className="py-8 px-8 bg-blue-500 text-white text-center">
      &copy; 2024 oleh Tim Devdynamos @devscale.id
    </footer>
  );
};

const EventsPage = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    async function fetchEventsData() {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    }
    fetchEventsData();
  }, []);

  return (
    <div>
      <Navbar />
      <EventList events={events} />
      <Footer />
    </div>
  );
};

export default EventsPage;
