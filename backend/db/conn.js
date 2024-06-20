const { MongoClient } = require("mongodb")
const Db = process.env.ATLAS_URI
//const uri ="mongodb://localhost:27017";
//const uri = "mongodb://host.docker.internal:27017"
const uri="mongodb://dbuser:wiz12@104.155.43.16:27017/employees"
console.log("coonectioin")
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}