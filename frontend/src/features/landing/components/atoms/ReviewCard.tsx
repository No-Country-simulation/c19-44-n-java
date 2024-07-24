import { ReviewData } from '../../interfaces/reviewData'
import { FaStar } from 'react-icons/fa'

export function ReviewCard({ avatar, calification, comments, name }: ReviewData) {
  return (
    <div className="w-96 bg-gray-300 rounded-2xl p-4 flex flex-col justify-center   gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img className="rounded-full" src={avatar} />
          <label>{name}</label>
        </div>
        <div>
          <span className="flex">
            {' '}
            {new Array(calification).fill('').map((_, index) => (
              <FaStar key={index} />
            ))}{' '}
          </span>
        </div>
      </div>
      <div>
        <p> {comments}</p>
      </div>
    </div>
  )
}
