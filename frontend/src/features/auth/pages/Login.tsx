import { IoChevronBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="text-white">
      <div className=" w-[100vw] h-[100vh] bg-authImage bg-cover brightness-50 absolute"></div>
      <div className="relative">
        <div className="grid grid-cols-2">
          <div className="h-[80vh] flex flex-col">
            <div className="text-4xl m-10">
              <Link to={'/'}>
                <IoChevronBackSharp />
              </Link>
            </div>
            <div className="text-center h-full flex  flex-col justify-center">
              <div>
                <h3 className="text-3xl font-bold">Bienvenido a Telemedicina</h3>
                <p className="text-xl mt-4">
                  Inicia sesión y disfruta de tus beneficios y los mejores servicios que tenemos
                  para tí.
                </p>
                <p className="mt-4 text-xl">
                  ¿Todavia no tienes cuenta?
                  <Link
                    to={'/auth/register'}
                    className="ml-4 hover:border border-solid p-2 rounded-2xl "
                  >
                    <span className=" text-purple-400 font-extrabold">Regístrate</span>
                  </Link>
                </p>
              </div>
              <div className="mt-4">
                <h1 className="text-5xl  font-extrabold">
                  <span className="text-purple-800">Tele</span>medicina
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[100vh]">
            <div className="w-1/2 h-3/5 backdrop-blur-sm bg-purple-800/85  opacity-90 rounded-l-[80px]  p-8 flex flex-col justify-center ">
              <div className="mb-8">
                <h3 className="text-center text-3xl">Por favor, identifíquese</h3>
              </div>
              <div>
                <form className="flex flex-col gap-3 ">
                  <input
                    className="p-3 rounded-md text-gray-600"
                    type="text"
                    placeholder="Correo"
                  />
                  <input
                    className="p-3 rounded-md text-gray-600"
                    type="text"
                    placeholder="Contraseña"
                  />

                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 mr-4 accent-purple-800"
                    />
                    <label htmlFor="default-checkbox">Guardar mi contraseña</label>
                  </div>

                  <button className="border p-2 border-solid border-white w-full">
                    Iniciar Sesion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
