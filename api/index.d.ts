import { AxiosError, AxiosResponse } from "axios";

export type AllRequestType = "post" | "get" | "delete" | "put";

export type ResponseStatus = "error" | "success";

export interface ApiURLType {
  method: AllRequestType;
  url: string;
  returnToken?: boolean;
}
export interface NextOfKinType {
  name: string;
  relationship: string;
  address: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  postal: string;
}

export interface UserSettingType {
  two_factor_authentication: boolean;
}

export interface UserDetailsType {
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  avatar: string;
  code: string;
  phone?: string;
  email: string;
  address?: string;
  province?: string;
  city?: string;
  postal?: string;
  gender?: string;
  has_info: boolean;
  has_next_of_kin: boolean;
  next_of_kin?: UserNextOfKinType;
  email_verified: boolean;
  phone_verified?: boolean;
  suspended: boolean;
  settings: UserSettingType;
}
export interface LoginBodyType {
  email: string;
  password: string;
}
export interface ForgotPasswordType {
  email: string;
}
export interface LoginResponseType extends UserDetailsType {
  token?: string;
}

export interface ErrorResponseType {
  message?: string;
  timeStamp?: Date;
  status?: string;
}

export type AllBodyType = LoginBodyType;

export type AllResponseType = ErrorResponseType & AllBodyType;

export interface ResponseType {
  type: ResponseStatus;
  code: string | number;
  statusText: string;
  response: {
    message: string;
    data: AllResponseType;
  } & AllResponseType;
}
export interface ApiErrorResponseType {
  type: ResponseStatus;
  code: string | number;
  statusText: string;
  response: AllResponseType;
}

export type ApiRequestResponseType = Promise<ResponseType>;
