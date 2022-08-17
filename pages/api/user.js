import Iron from '@hapi/iron'
import CookieService from "../../lib/cookie"

export default async function User(req, res) {
    let user;
    try {
        user = await Iron.unseal(
            CookieService.getAuthToken(req.cookies),
            process.env.ENCRYPTION_SECRET,
            Iron.defaults,
        )
    } catch (error) {
       return res.status(401).end()
    }

    res.json(user)
}