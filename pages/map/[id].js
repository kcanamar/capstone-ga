import Layout from "../../components/Layout";
import client from "../../lib/sanity/client";
import { getMapIds } from "../../lib/map";
import Display from "../../components/map/Display"
import { useRouter } from "next/router";

export default function MapDisplay({ mapData }) {
    let map = mapData[0]
    const router = useRouter()
    if (router.isFallback) {
        return <Layout><div><h1>Loading...</h1></div></Layout>
    }
    return (
        <Layout>
            <Display map={map}/>
        </Layout>
    )
};


export async function getStaticPaths() {
    const paths = await getMapIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const mapData = await client.fetch(`*[_type=='map' && _id==$id] { _id, start, end, goals, title }`, { id: params.id})
    return {
        props: {
            mapData,
        },
        revalidate: 1,
    }
}