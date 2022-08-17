import client from "../../lib/sanity/client";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const newGoal = await JSON.parse(req.body);
            try {
                await client
                    .create({
                        _type: 'goal',
                        title: newGoal.title,
                        celebration: newGoal.celebration,
                        tactic: newGoal.tactic,
                        benchmark: newGoal.benchmark,
                        isCompleted: false,
                        map: {
                            _type: 'reference',
                            _ref: newGoal.map,
                        }
                    })
                    .then((res) => {
                        console.log(`Goal was created, document id >> ${res._id}`)
                    });
                    res.status(200).json({ msg: `Goal was created, document id >> ${res._id}`})
            } catch (err){
                console.log(err)
                res.status(500).json({ msg: "Error, check console"})
            }
            break;

        case "PUT":
            const result = await client
                .patch(req.body.id._id)
                .set({
                    isCompleted: !req.body.isCompleted,
                    completedOn: !!req.body.isCompleted ? "" : new Date().toISOString(),
                })
                .commit();
            
                res.status(200).json({
                    status: result.isCompleted,
                    completedOn: result.completedOn
                })

            break

        case "DELETE":
            await client
                .delete(req.body)
                .then((res) => {
                    res.body
                })
                .then((res) => console.log(`Goal was deleted`))

            res.status(200).json({ msg: "Success"})

            break
    }
}