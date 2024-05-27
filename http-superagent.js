const superagent = require("superagent")

(async () => {
    try {
        const { body } = await superagent.get(
            URL
        )
        .set({Authorization: 'Basic '})
        .query({query: 'query01'})

        console.log(body)
    } catch (err) {
        console.error(err)
    }
})();