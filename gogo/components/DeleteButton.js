import {deleteCard} from '../graphql/api.js'


export default function DeleteButton(id) {
    const deleteQuery = `mutation DeleteCard{
        deleteCard(id: ${id.id}) {
          name
      }
    }`
    return <button onClick={() => deleteCard(deleteQuery)}>Delete Card</button>
}