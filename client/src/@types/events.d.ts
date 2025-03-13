export interface IGetUpcommingEventsHeroResponse {
  success: boolean;
  message: string;
  data: EventData[];
  statusCode: number;
}

export interface EventData {
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
  eventType: string;
  isTicketsAvailable: boolean;
  tickets: Ticket[];
  ticketRange: TicketRange;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface Organizer {
  _id: string;
  organizer_name: string;
  profile_pic: null;
  email: string;
  role: string;
  contact_info: string;
  owner_name: string;
  createdAt: Date;
  updatedAt: Date;
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
