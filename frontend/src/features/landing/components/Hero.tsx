import { Button } from './atoms/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import HeroImage from '../../../assets/sesion/HeroImage.jpeg'
import { Link } from 'react-router-dom'
export function Hero() {
  return (
    <div className="h-[94.5vh] w-full flex-col">
      <div className="h-3/5 w-full bg-blue-500 relative">
        <img src={HeroImage} className="h-[100%] w-full brightness-50 " />
        <div className="absolute top-10 h-full w-full">
          <div className="flex flex-col h-full justify-center text-white items-center gap-3 ">
            <p className="text-center text-4xl text-white">
              Bienvenido a la consulta médica virtual
            </p>
            <Button
              text={'Conocenos mas'}
              textColor="white"
              width={200}
              color={'#543D87'}
              Icon={null}
              key={1}
            ></Button>
          </div>
        </div>
      </div>
      <div className="h-2/5 flex items-center justify-center">
        <div className="w-1/2">
          <p className="text-center text-3xl">Registrate ahora y pide una cita</p>
        </div>
        <div className="w-1/2 flex flex-col  justify-center ">
          <p className="text-3xl">Crea una cuenta</p>
          <p className="mb-2">
            ¿Ya tienes una ?<span> Inicia sesión</span>
          </p>
          <div className=" flex flex-col gap-3">
            <Button
              textColor="black"
              text={'Iniciar sesion con Google'}
              width={400}
              color={'white'}
              Icon={<FcGoogle />}
              key={1}
            ></Button>
            <Button
              textColor="black"
              text={'Iniciar sesion con Apple'}
              width={400}
              color={'white'}
              Icon={<FaApple />}
              key={1}
            ></Button>
            <Link to="/auth/register">
              <Button
                text={'Registrate con correo'}
                textColor="white"
                width={400}
                color={'#6B4CAA'}
                Icon={<IoMdMail />}
                key={1}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
