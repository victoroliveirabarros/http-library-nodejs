const axios = require("axios")

axios.get("url", {
        params: {
            query: "query01"
        },
        auth: {
            username: "user",
            password: "pass"
        }
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error.request)
        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        }
    })