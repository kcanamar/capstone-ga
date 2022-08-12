import Layout from "../../components/Layout";
import client from "../../lib/sanity/client";
import { getMapIds } from "../../lib/map";
import Display from "../../components/map/Display"

export default function MapDisplay({ mapData }) {
    let map = mapData[0]
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
        fallback: 'blocking'
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