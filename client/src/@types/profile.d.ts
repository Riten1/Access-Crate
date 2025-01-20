export interface IProfileResponse {
  success: boolean;
  message: string;
  data: ProfileData;
  statusCode: number;
}

export interface ProfileData {
  _id: string;
  full_name: string;
  profile_pic: null;
  email: string;
  role: string;
  contact_info: null;
  address: null;
  createdAt: Date;
  updatedAt: Date;
}
