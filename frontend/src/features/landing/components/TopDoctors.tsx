import { DoctorInfo } from '../interfaces/doctor'
import { DoctorCard } from './atoms/DoctorCard'

export function TopDoctors({ doctors }: { doctors: DoctorInfo[] }) {
  return (
    <div className="flex gap-10 justify-center">
      {doctors.map((doctor: DoctorInfo) => (
        <div key={doctor.id}>
          <DoctorCard {...doctor} />
        </div>
      ))}
    </div>
  )
}
