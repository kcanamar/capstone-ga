import CookieService from "../../lib/cookie";

export default async function Logout(req, res) {
  CookieService.removeCookie(res);
  res.end();
};