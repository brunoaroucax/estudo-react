import Image from 'next/image'
import { StarRating } from '../components/review/StarRating'
import StudentTable from '@/components/StudentTable';
import {students} from '../data/students';

export default function Home() {
  return (
    <main className='bg-white'>
      <StarRating rate={4.4} />

      <StudentTable data= {students}/>
    </main>
  )
}
