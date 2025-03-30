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

export interface IGetFeaturedEventsResponse {
  success: boolean;
  message: string;
  data: FeaturedEventsData[];
  statusCode: number;
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

export interface IGetEventDetailsResponse {
  success: boolean;
  message: string;
  data: EventDetails;
  statusCode: number;
}

export interface EventDetails {
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

export interface IGetEventCategories {
  success: boolean;
  message: string;
  data: Category[];
}

export interface Category {
  _id: string;
  name: string;
  total_events: number;
  description?: string;
}


export interface IGetEventsResponse {
  success:    boolean;
  message:    string;
  data:       Data;
  statusCode: number;
}

export interface Data {
  totalEvents: number;
  currentPage: number;
  totalPages:  number;
  limit:       number;
  events:      Event[];
}

export interface Event {
  _id:                string;
  name:               string;
  event_pic:          string;
  description:        string;
  date:               Date;
  venue:              string;
  category:           Category;
  isActive:           boolean;
  organizer:          Organizer;
  interested:         number;
  isEntryFree:        boolean;
  eventType:          string;
  isTicketsAvailable: boolean;
  tickets:            Ticket[];
  createdAt:          Date;
  updatedAt:          Date;
  ticketRange:        TicketRange;
}

export interface Category {
  _id:         string;
  name:        string;
  description: string;
}

export interface Organizer {
  _id:            string;
  organizer_name: string;
  profile_pic:    string;
  email:          string;
  role:           string;
  contact_info:   string;
  owner_name:     string;
  createdAt:      Date;
  updatedAt:      Date;
}

export interface TicketRange {
  lowest:  number;
  highest: number;
}

export interface Ticket {
  _id:              string;
  ticketType:       string;
  isActive:         boolean;
  sales_start_date: Date;
  sales_end_date:   Date;
  price:            number;
  quantity:         number;
  sold_count:       number;
}
