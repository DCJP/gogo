import {createCard} from '../graphql/api.js'


export default function DeleteButton(id) {
    const postQuery = `mutation CreateCard{
        createCard(data: {
            name: "big punch"
            description: "punch that hurts"
            set: "Starter set"
            id: 0
            entity: RANGER
          }) {
            name
            description
            set
            id
            entity
          }
      }`
    return <button onClick={() => createCard(postQuery)}>Create Card</button>
}