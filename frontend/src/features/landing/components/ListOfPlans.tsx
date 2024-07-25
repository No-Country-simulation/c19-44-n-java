import { Plan } from '../interfaces/plan'
import PlanCard from './atoms/PlanCard'

export function ListOfPlans({ plans }: { plans: Plan[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl text-center ">Nuestros planes de pago</h3>
      <p className="text-center">
        Elige el plan que mejor se adapte a tus necesidades y accede a una atención médica de
        calidad.
      </p>
      <div className="flex justify-center gap-4">
        {plans.map((plan: Plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  )
}
