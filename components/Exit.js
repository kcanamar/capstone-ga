import { Magic } from "magic-sdk";
import { useRouter } from "next/router";
import { mutate } from "swr";
import CookieService from "../lib/cookie";

export default function Exit() {
    const router = useRouter();

    const logoutUser = async () => {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);

        try {
            await magic.user.logout();
            await mutate(fetch('/api/logout'))
            console.log(await magic.user.isLoggedIn());
            router.push("/");

        } catch (error) {
            return console.log(`error >>> `, error);
        };
    };
    return (
        <div className="">
            <button 
                className=""
                onClick={logoutUser}
            > 
                Logout
            </button>
        </div>
    )
}