import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import UserForm from "./UserForm";


import { AiOutlineArrowRight } from "react-icons/ai";

import * as C from "./style/styles";
import Input from "../Input";
import PeopleFisica from "./PeopleFisica";
import Address from "./Address";

const CadastroUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleform = (data) => console.log(data);
  console.log(errors);
  return (
    <C.Main>
      <C.Container>
        <C.Title>Cadastre-se</C.Title>

        <form onSubmit={handleSubmit(handleform)}>
          <C.FieldContainer>
            <C.UserDataContainer>
              <UserForm register={register} errors={errors} />
            </C.UserDataContainer>
          </C.FieldContainer>
          <C.FieldContainer>
            <C.CadastroType>
              <p>Tipos de cadastro :</p>
              <C.FieldRadio>
                <label htmlFor="pessoaTypeF">
                  <input
                    type="radio"
                    name="pessoaType"
                    value="pessoaFisica"
                    id="pessoaTypeF"
                  />
                  Pessoa Física
                </label>

                <label htmlFor="pessoaTypeJ">
                  <input
                    type="radio"
                    name="pessoaType"
                    value="pessoaJuridica"
                    id="pessoaTypeJ"
                  />
                  Pessoa Jurídica
                </label>
              </C.FieldRadio>
            </C.CadastroType>
            <C.DataUser>
              <PeopleFisica Input ={Input} register={register} errors={errors} /> 

            </C.DataUser>
          </C.FieldContainer>
         <C.FieldContainer>
          <C.DataUser>
          <Address Input={Input } register={register} errors={errors} />
            </C.DataUser>
          </C.FieldContainer>
          <C.Btn>
            Avançar <AiOutlineArrowRight />
          </C.Btn>
        </form>
      </C.Container>
    </C.Main>
  );
};

export default CadastroUser;
