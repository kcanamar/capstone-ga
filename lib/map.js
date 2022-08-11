import client from "./sanity/client";

export async function getMapIds() {
        const mapIds = await client.fetch(`*[_type == 'map'] {_id}`)
        return mapIds.map((map) => {return {params: {id: map._id}}})
}

// todo write helper function to get map data from one id