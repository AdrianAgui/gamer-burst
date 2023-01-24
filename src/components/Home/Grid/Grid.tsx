import { Game } from '@/models/game.model'
import GameCard from '../GameCard/GameCard'

interface Props {
  games: Game[]
}

export default function Grid(props: Props) {
  return (
    <ul className='flex flex-wrap justify-center items-center gap-8'>
      {props.games.map((game) => (
        <li key={game.slug} className='flex flex-col items-center'>
          <GameCard
            id={game.id}
            name={game.name}
            slug={game.slug}
            image={game.background_image}
            rating={game.rating}
            price={game.price}
          />
        </li>
      ))}
    </ul>
  )
}
