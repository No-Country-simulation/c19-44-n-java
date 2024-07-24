import React from 'react'
import { Plan } from '../../interfaces/plan'
import { Button } from './Button'

function PlanCard({ title, shortDescription, price, features }: Plan) {
  return (
    <div className="w-64 bg-[#DCDAE1] p-5 rounded-xl  h-[500px] relative">
      <h4 className="text-2xl text-center">{title}</h4>
      <p className="text-purple-800 text-center text-4xl">{price}</p>
      <div>
        <p>Nombre del plan: {title}</p>
        <p>Precio: {price}</p>
        <p>Descripcion corta: {shortDescription}</p>
        <p>Caracteristicas</p>
        <ul>
          {features.map((feature) => (
            <li key={feature} className="">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-10 left-6">
        <Button
          textColor="white"
          text={'Suscribirse'}
          width={200}
          color={'#543D87'}
          Icon={null}
          key={1}
        ></Button>
      </div>
    </div>
  )
}

export default PlanCard
