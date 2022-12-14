import client from "../../lib/sanity/client"

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const newMap = await JSON.parse(req.body);
            try {
                await client
                .create({
                    _type: 'map',
                    user: newMap.user,
                    title: newMap.title,
                    start: newMap.start,
                    end: newMap.end,
                })
                .then((res) => {
                    console.log(`Map was created, document id >> ${res._id}`)
                });
                res.status(200).json({ msg: `Map was created, document id >> ${res._id}`});
            } catch (err) {
                console.log(err);
                res.status(500).json({ msg: 'Error, check console'});
            }
            break;

        case "DELETE":
            await client
                .delete(req.body)
                .then((res) => {
                    req.body
                })
                .then((res) => console.log(`Map was deleted`))

            res.status(200).json({ msg: "Success"})
            break;

        case "PUT":
            await client
                .patch(req.body.id._id)
                .set({
                    title: req.body.title
                })
                .commit()
            res.status(200).json({ msg: `Succeccful update`})

            break
    };
};