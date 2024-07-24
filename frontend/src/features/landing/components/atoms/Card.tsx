import { StepsToRegister } from '../../interfaces/stepsToRegister'

export function Card({ image, title, description }: StepsToRegister) {
  return (
    <div className="  w-[400px] p-2 ">
      <img src={image} className="rounded-md w-full mb-2" />
      <h4 className="text-center text-purple-600 text-xl mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  )
}
