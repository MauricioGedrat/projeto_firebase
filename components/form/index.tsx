import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { Login } from "../../pages/api/login";
import SvgFrom from "../svg/form";
// import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = async (data: Login) => await handlePost(data);

  const onError = (errors: any, e: any) => console.log(errors, e);

  const handlePost = async (data: Login) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("response", response);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col items-center justify-center mt-[15%] form 2xl:mt-[20%]"
      >
        <div>
          <input
            className="outline-none w-[90vw] 2xl:w-[40vw] border-4 border-gray-900 mb-4 p-2"
            type="text"
            placeholder="Nome"
            {...register("nome", { required: true })}
          />
          {/* <ErrorMessage errors={errors} name="nome" /> */}
        </div>
        <div>
          <input
            className="outline-none w-[90vw] 2xl:w-[40vw] border-4 border-gray-900 mb-4 p-2"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <input
            className="outline-none w-[90vw] 2xl:w-[40vw] border-4 border-gray-900 mb-4 p-2"
            type="password"
            placeholder="Senha"
            {...register("senha", { required: true })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#ef4444] w-[90vw] 2xl:w-[20vw] p-4 rounded-md text-xl text-white hover:shadow-none shadow-xl duration-300"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
