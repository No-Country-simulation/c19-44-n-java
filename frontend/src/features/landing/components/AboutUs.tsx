import check from '.././../../assets/sesion/check.png'
import device from '.././../../assets/sesion/devices.png'
import lock from '.././../../assets/sesion/lock.png'
import time from '.././../../assets/sesion/time.png'

export function AboutUs() {
  const features = [
    {
      icon: check,
      description: 'Acceso rápido y fácil a profecionales médicos.',
    },
    {
      icon: device,
      description: 'Consultas desde cualquier lugar y cualquier momento.',
    },
    {
      icon: time,
      description: 'Ahorra tiempo y dinero en desplazamientos.',
    },
    {
      icon: lock,
      description: 'Privacidad y seguridad garantizadas.',
    },
  ]
  return (
    <div className="flex-col w-full bg-purple-400 justify-center items-center p-5">
      <h3 className="text-center  text-2xl p-4 ">¿Por qué elegirnos?</h3>
      <div className="flex w-full items-center justify-around p-10">
        {features.map((feature) => (
          <div key={feature.description} className="w-40 ">
            <img src={feature.icon} alt={feature.description} className="mb-4" />
            <p> {feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
