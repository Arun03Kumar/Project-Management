const Client = require('../collections/Client')
const Project = require('../collections/Project')

const Mutation = {
    addClient(parent, args, ctx, info) {
        // console.log(args.name)
        const client = new Client({
            name: args.name,
            email: args.email,
            phone: args.phone
        })
        return client.save()
    },
    deleteClient(parent, args, ctx, info) {
        Project.find({clientID: args.id}).then((projects) => {
            projects.forEach(project => {
                project.remove()
            })
        })
        return Client.findByIdAndRemove(args.id)
    },
    addProject(parent, args, ctx, info) {
        let st = ""
        if(args.status == 'NEW') {
            st = "Not Started"
        }
        else if(args.status == "PROGRESS"){
            st = "In Progress"
        }
        else{
            st = "Completed"
        }
        const project = new Project({
            name: args.name,
            description: args.description,
            status: st,
            clientID: args.clientID
        })

        return project.save()
    },
    deleteProject(parent, args, ctx, info) {
        return Project.findByIdAndRemove(args.id)
    },
    updateProject(parent, args, ctx, info) {
        let st = ""
        if(args.status == 'NEW') {
            st = "Not Started"
        }
        else if(args.status == "PROGRESS"){
            st = "In Progress"
        }
        else{
            st = "Completed"
        }
        return Project.findByIdAndUpdate(args.id, {
            $set: {
                name: args.name,
                description: args.description,
                status: st
            }
        }, {new: true})
    }
}

module.exports = Mutation