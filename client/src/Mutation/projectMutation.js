import {gql} from '@apollo/client'

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $description: String!, $status: status!, $clientId: ID!) {
        addProject(name: $name, description: $description, status:$status, clientID: $clientId) {
            id
            name
            description
            status
            client {
                id 
                name
                email
                phone
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`

const UPDATE_PROJECT = gql`
    mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: status!) {
        updateProject(id: $id, name: $name, description: $description, status: $status) {
            id
            name
            description
            status
        }
    }
`

export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT}