import { Form } from "./Form";
import ondas from "../../assets/images/fondoOndas.png";

export const Contact = () => {
  return (
    <div>
      <div
        className="relative w-full mx-auto bg-cover bg-center h-screen  "
        style={{ backgroundImage: `url(${ondas})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full object-cover bg-skyBlue mix-blend-multiply opacity-90"></div>

        <div className="relative h-full flex flex-col justify-evenly items-center">
          <article className="mx-6 mt-28 text-[50px] text-center text-white leading-none font-abc2 font-black xl:w-[700px] xl:text-[70px] ">
            ¿Listo para llevar tu empresa a un nuevo nivel de eficiencia y
            seguridad juridica?
          </article>

          <div className="bg-white xl:w-[800px] h-[300px] rounded-lg mt-10 mx-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
