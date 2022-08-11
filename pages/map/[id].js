import Layout from "../../components/Layout";
import client from "../../lib/sanity/client";
import { getMapIds } from "../../lib/map";

export default function MapDisplay({ mapData }) {
    return (
        <Layout>
            <h1>{mapData.title}</h1>
        </Layout>
    )
};


export async function getStaticPaths() {
    const paths = await getMapIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const mapData = await client.fetch(`*[_type==map && _id==$id] { _id, start, end, goals, title }`, { id: params.id})
    return {
        props: {
            mapData,
        }
    }
}