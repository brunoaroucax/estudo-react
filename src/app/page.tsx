import Image from 'next/image'
import { StarRating } from '../components/review/StarRating'
export default function Home() {
  return (
    <main className='bg-white'>
      <StarRating rate={4.4} />
    </main>
  )
}
