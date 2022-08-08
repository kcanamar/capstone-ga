import { useRouter } from 'next/router'
import Layout from "../components/Layout"
import { Button } from 'flowbite-react'
import { Magic } from 'magic-sdk'

export default function Login() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { elements } = e.target
        const did = await new Magic(
            process.env.NEXT_PUBLIC_MAGIC_PUB_KEY,
        ).auth.loginWithMagicLink({ email: elements.email.value })

        const authRequest = await fetch('/api/login', {
            method: 'POST',
            headers: { Authorization: `Bearer ${did}`},
        });

        if (authRequest.ok) {
            router.push('/dashboard')
        } else {
            /* handle errors */
        }
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div className="antialiased text-gray-900 px-6">
                    <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
                        <div className="py-12">
                        <h2 className="text-2xl font-bold">Register / Login</h2>
                        <br/>
                        <div className="mt-8 max-w-md">
                            <div className="grid grid-cols-1 gap-6">
                            <label className="block" htmlFor="email">
                                <span className="text-gray-700">Email address</span>
                                <input
                                name="email"
                                type="email"
                                className="
                                    mt-1
                                    block
                                    w-full
                                    rounded-md
                                    bg-gray-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                                "
                                placeholder="john@example.com"
                                />
                            </label>
                            <br/>
                            <Button type="submit">
                                Submit
                            </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}