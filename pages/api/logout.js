import CookieService from "../../lib/cookie";

export default async (req, res) => {
  CookieService.removeCookie(res);
  res.end();
};