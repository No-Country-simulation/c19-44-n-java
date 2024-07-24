import { DoctorInfo } from '../../interfaces/doctor'

export function DoctorCard({ image, name, experience, specialty }: DoctorInfo) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img className="rounded-full w-32 h-32" src={image} />
      <div className="text-center">
        <span>{name}</span>
        <p>{specialty}</p>
        <p>{experience} años de experiencia </p>
      </div>
    </div>
  )
}
