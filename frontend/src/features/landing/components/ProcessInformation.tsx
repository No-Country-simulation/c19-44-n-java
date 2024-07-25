import img1 from '../../../assets/sesion/img1.png'
import img2 from '../../../assets/sesion/img2.png'
import img3 from '../../../assets/sesion/img3.png'
import img4 from '../../../assets/sesion/img4.png'
import { Card } from './atoms/Card'
export function ProcessInformation() {
  const steps = [
    {
      image: img1,
      title: '  Registrate en Nuestra Plataforma',
      description:
        'Completa tu perfil con información básica para acceder a todas nuestras funcionalidades.',
    },
    {
      image: img2,
      title: 'Elige  uno de nuestros planes',
      description:
        'Selecciona uno de nuestros planes y elige el que mejor se adapte a tus necesidades.',
    },
    {
      image: img3,
      title: 'Elige tu Médico',
      description:
        'Explora nuestro catálogo de médicos y selecciona el que mejor se adapte a tus necesidades.',
    },
    {
      image: img4,
      title: 'Programa tu Consulta',
      description: 'Elige la fecha y hora que más te convengan para tu consulta.',
    },
  ]
  return (
    <div>
      <h3 className="text-center text-2xl p-4  mb-4">¿Como Funciona?</h3>
      <div className="flex justify-center">
        <div className="w-[800px] ">
          <div className="grid grid-cols-2  content-center justify-center  place-items-center gap-8">
            {steps.map((step) => (
              <div key={step.title}>
                <Card {...step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
