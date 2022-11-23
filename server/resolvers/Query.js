const Client = require('../collections/Client');
const Project = require('../collections/Project');

const Query = {
  client(parent, args, ctx, info) {
    return Client.findById(args.id)
  },
  clients(parent, args, ctx, info) {
    return Client.find()
  },
  project(parent, args, ctx, info) {
    return Project.findById(args.id)
  },
  projects(parent, args, ctx, info) {
    return Project.find()
  }
};

module.exports = Query