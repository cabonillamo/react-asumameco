import { Event } from "../../../interfaces/context/events/event";

export interface eventsContextProps {
  events: Event[];
  loadEvents: () => void;
}
