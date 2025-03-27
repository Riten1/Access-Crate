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
}
