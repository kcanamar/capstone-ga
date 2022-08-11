import Layout from "../../components/Layout";
import client from "../../lib/sanity/client";


export default function MapDisplay({ mapData }) {
    return (
        <Layout>
            <h1>{mapData.title}</h1>
        </Layout>
    )
};


export async function getStaticPaths() {
    const paths = []
    console.log(paths, "<< paths keys in getStaticPaths")
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const mapData = await client.fetch(`*[_type==map && _id==$id] { _id, start, end, goals, title }`, { id: params.id})
    console.log(mapData, "<< mapData in getStaticProps")
    return {
        props: {
            mapData,
        }
    }
}