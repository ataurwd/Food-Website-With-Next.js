const { MongoClient, ServerApiVersion,  } = require("mongodb")

function dbConnect(colletionName) {
    const uri = process.env.MONGO_URI

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    })

    return client.db(process.env.DB_NAME).collection(colletionName)
}

export default dbConnect;