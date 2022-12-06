import { gql } from "@apollo/client";

export const dquery = gql `  
    query {
        getAllUsers {
            id
            firstName
            email
            password
        }
    }
`