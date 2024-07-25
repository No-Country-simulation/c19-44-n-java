import { Plan } from '../interfaces/plan'
import {
  Footer,
  Hero,
  ListOfPlans,
  Navbar,
  TopDoctors,
  Reviews,
  AboutUs,
  ProcessInformation,
} from '../components'
import { ReviewData } from '../interfaces/reviewData'
import { DoctorInfo } from '../interfaces/doctor'

export default function Landing() {
  const plans: Plan[] = [
    {
      title: 'Plan Basico',
      features: ['Hasta 3 consultas'],
      price: 30,
      shortDescription: 'Ideal para consultas',
    },
    {
      title: 'Plan Basico',
      features: ['Hasta 3 consultas'],
      price: 30,
      shortDescription: 'Ideal para consultas',
    },
    {
      title: 'Plan Basico',
      features: ['Hasta 3 consultas'],
      price: 30,
      shortDescription: 'Ideal para consultas',
    },
  ]
  const reviews: ReviewData[] = [
    {
      avatar:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      calification: 5,
      comments:
        'Mi experiencia con la consulta virtual fue excelente. No tuve que salir de casa y pude hablar con el médico a través de una videollamada en la plataforma.',
      name: 'Brenda Nahomi',
      id: 1,
    },
    {
      avatar:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      calification: 3,
      comments:
        'Mi experiencia con la consulta virtual fue excelente. No tuve que salir de casa y pude hablar con el médico a través de una videollamada en la plataforma.',
      name: 'Brenda Nahomi',
      id: 2,
    },
    {
      avatar:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      calification: 1,
      comments:
        'Mi experiencia con la consulta virtual fue excelente. No tuve que salir de casa y pude hablar con el médico a través de una videollamada en la plataforma.',
      name: 'Brenda Nahomi',
      id: 3,
    },
  ]
  const doctors: DoctorInfo[] = [
    {
      experience: 8,
      id: 1,
      image:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      name: 'Dra. Brenda Nahomi ',
      specialty: 'Cardiologia',
    },
    {
      experience: 8,
      id: 2,
      image:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      name: 'Dra. Brenda Nahomi ',
      specialty: 'Cardiologia',
    },
    {
      experience: 8,
      id: 3,
      image:
        'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109',
      name: 'Dra. Brenda Nahomi ',
      specialty: 'Cardiologia',
    },
  ]
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <div className="p-5">
          <ProcessInformation />
        </div>
        <div className="text-center p-20">
          <h3 className="mb-2 text-2xl ">Opiniones de los usuarios</h3>
          <p className="mb-4">Mire lo que nuestros clientes estan diciendo </p>
          <div className="p-4">
            <Reviews reviews={reviews} />
          </div>
        </div>
        <div className="text-center bg-[#BCADDA] p-10">
          <h3 className=" text-2xl mb-2 ">Medicos Destacados</h3>
          <p className="text-center">
            Nuestra organización está compuesta por un equipo multidisciplinario de médicos
          </p>
          <p className="text-center">comprometidos con transformar y mejorar la atención médica.</p>
          <div className="p-12">
            <TopDoctors doctors={doctors} />
          </div>
        </div>
        <div className="mb-20 mt-10">
          <ListOfPlans plans={plans} />
        </div>
      </main>
      <Footer />
    </>
  )
}
