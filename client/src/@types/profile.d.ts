export interface IProfileResponse {
  success: boolean;
  message: string;
  data: ProfileData;
  statusCode: number;
}

export interface ProfileData {
  _id: string;
  full_name: string;
  profile_pic: string;
  email: string;
  role: string;
  contact_info: string;
  address: null;
  createdAt: Date;
  updatedAt: Date;
}
