import { EventsContext } from "../EventsContext";
import { allEventsRequest } from "../../api/events.api";
import { useState } from "react";
import { Event } from "../../interfaces/context/events/event";

export const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const loadEvents = async () => {
    const res = await allEventsRequest();
    setEvents(res.data);
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        loadEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
