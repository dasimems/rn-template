import { ApiURLType } from "./index.d";
import { requestType } from "./_variables";

export const apiVersion = "/api/v1",
  baseURL = ``,
  loginApi: ApiURLType = {
    method: requestType.post,
    url: "/login"
  },
  signupApi: ApiURLType = {
    method: requestType.post,
    url: "/register"
  },
  sendEmailOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/email/send"
  },
  verifyEmailOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/email/verify"
  },
  sendPhoneOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/phone/send"
  },
  verifyPhoneOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/phone/verify"
  },
  forgotPasswordApi: ApiURLType = {
    method: requestType.post,
    url: "/password/request"
  },
  forgotPasswordVerificationApi: ApiURLType = {
    method: requestType.post,
    url: "/password/verify"
  },
  changeForgottenPasswordApi: ApiURLType = {
    method: requestType.post,
    url: "/password"
  },
  logoutApi: ApiURLType = {
    method: requestType.post,
    url: "/logout"
  };
