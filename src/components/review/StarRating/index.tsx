import starImg from './star.svg'
import startNoneImg from './star-none.svg'
import Image from 'next/image';

interface Props {
  rate: number
}

export const StarRating = ({rate}: Props) => {
  rate = Math.round(rate);

  if(rate > 5) rate = 5
  if(rate < 0) rate = 0

  const stars = new Array(0 + rate).fill(null)
  const starsNone = new Array(5 - rate).fill(null)

  return (
    <div className='flex items-center gap-4'>

      <div className="flex">
        {
          stars.map((star, index) => (
            <Image src={starImg} alt='Estrela' key={index} />
          ))
        }
        {
          starsNone.map((star, index) => (
            <Image src={startNoneImg} alt='Estrela' key={index} />
          ))
        }
      </div>

      <p className='font-bold text-lg'> 
        { stars.length.toFixed(1) } 
      </p>

    </div>
  );
}