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
}

export interface IGetOrganizerEventsResponse {
  success: boolean;
  message: string;
  data: Events[];
  statusCode: number;
}

export interface Events {
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
  tickets: string[];
}
