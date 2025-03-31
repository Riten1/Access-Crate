export interface IGetTop2OrganizersResponse {
  success: boolean;
  message: string;
  data: OrganizerData[];
}

export interface OrganizerData {
  _id: string;
  organizer_name: string;
  profile_pic: null | string;
  email: string;
  total_events: number;
  categories: string[];
  createdAt: Date;
}

export interface IGetOrganizerDetailsResponse {
  success: boolean;
  message: string;
  data: OrganizerData;
  statusCode: number;
}

export interface OrganizerData {
  _id: string;
  organizer_name: string;
  profile_pic: string;
  email: string;
  contact_info: string;
  owner_name: string;
  total_events: number;
  categories: string[];
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface IGetOrganizerEventsResponse {
  success: boolean;
  message: string;
  data: EventsData;
  statusCode: number;
}

export interface EventsData {
  totalEvents: number;
  currentPage: number;
  totalPages: number;
  limit: number;
  events: Event[];
}

export interface Event {
  _id: string;
  name: string;
  event_pic: string;
  description: string;
  date: Date;
  venue: string;
  category: Category;
  isActive: boolean;
  organizer: Organizer;
  interested: number;
  isEntryFree: boolean;
  eventType: EventType;
  __v: number;
  isTicketsAvailable: boolean;
  tickets: Ticket[];
  ticketRange: TicketRange;
}

export interface TicketRange {
  lowest: number;
  highest: number;
}

export interface Ticket {
  _id: string;
  ticketType: string;
  isActive: boolean;
  sales_start_date: Date;
  sales_end_date: Date;
  price: number;
  quantity: number;
  sold_count: number;
}

export interface FeaturedEventsData {
  _id: string;
  name: string;
  event_pic: string;
  description: string;
  date: Date;
  venue: string;
  isActive: boolean;
  interested: number;
  isEntryFree: boolean;
  eventType: string;
  isTicketsAvailable: boolean;
  tickets: Ticket[];
  ticketRange: TicketRange;
}
