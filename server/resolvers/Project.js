const Client = require('../collections/Client')

const Project = {
    client(parent, args, ctx, info) {
        // console.log(parent)
        return Client.findById(parent.clientID)
    }
}

module.exports = Project