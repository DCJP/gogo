import { useState, useEffect } from 'react'
import { useCards, createGuestbookEntry } from '../graphql/api'
// import Header from './Header'
// import GuestbookEntry from './GuestbookEntry'
import GuestbookEntryDivider from './GuestbookEntryDivider'
// import Card from './Card'
import {
  hero,
  heroContainer,
  cardEntries,
} from '../styles/hero'

function getCards(data) {
  return data ? data.allCards.data.reverse() : []
}

export default function Hero(props) {
  const { data, errorMessage } = useCards()
  // const [cards, setEntries] = useState([])

  // useEffect(() => {
  //   if (!cards.length) {
  //     setEntries(useCards(data))
  //   }
  // }, [data, cards.length])

  return (
    <div className={heroContainer.className}>
      <div className={cardEntries.className}>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : !data ? (
          <p>Loading cards...</p>
        ) : (
          // entries.map((entry, index, allEntries) => {
          //   const date = new Date(entry._ts / 1000)
          //   return (
          //     <div key={entry._id}>
          //       <GuestbookEntry
          //         twitter_handle={entry.twitter_handle}
          //         story={entry.story}
          //         date={date}
          //       />
          //       {index < allEntries.length - 1 && <GuestbookEntryDivider />}
          //     </div>
          //   )
          // }
          // <ul>
          // {data.allCards.data.map((card) => (
          //   <li key={card.id}>
          //     <span>{card.name}</span>
          //   </li>
          // ))}
          // </ul>
          data.allCards.data.map((card, index) => {
            return (
              <div>
                <p>Tried to render</p>
                <li>
                  <span>{card.name}</span>
                </li>
              </div>
            )
          })
        )
      }
      </div>
      {cardEntries.styles}
      {/* {heroContainer.styles}
      {hero.styles} */}
    </div>
  )
}
