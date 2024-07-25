import { ReviewData } from '../interfaces/reviewData'
import { ReviewCard } from './atoms/ReviewCard'

export function Reviews({ reviews }: { reviews: ReviewData[] }) {
  return (
    <div className="flex justify-center items-center gap-3">
      {reviews.map((review: ReviewData) => (
        <div key={review.id}>
          <ReviewCard {...review} />
        </div>
      ))}
    </div>
  )
}
