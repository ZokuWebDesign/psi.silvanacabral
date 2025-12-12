import React from 'react';

export function Insurances() {
  return (
    <section className="w-full bg-[#165953] py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-[72px] flex justify-center text-[#faf8f2] unselectable">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-2 max-w-3xl">
          <h2 className="text-[#FAF8F2]">
            Convênios de saúde
          </h2>
          <p className="text-[#FAF8F2] max-w-2xl mx-auto">
            Para facilitar o acesso ao cuidado psicológico, nosso consultório realiza atendimentos por convênios de saúde. Atendemos diferentes operadoras e modalidades de plano, para que você possa cuidar da sua saúde emocional com mais tranquilidade.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full max-w-4xl">
          <img src="/assets/logo/bradesco-saude.svg" alt="Logo Bradesco Saúde" className="p-6" />
          <img src="/assets/logo/sulamerica.svg" alt="Logo SulAmérica" className="p-6" />
          <img src="/assets/logo/amil.svg" alt="Logo Amil" className="p-6" />
          <img src="/assets/logo/unimed.svg" alt="Logo Unimed" className="p-6" />
        </div>

        <div className="max-w-3xl">
          <p className="text-[#FAF8F2]">
            Caso tenha alguma dúvida sobre cobertura, reembolso ou forma de atendimento pelo seu plano, é só entrar em contato para receber orientação antes de agendar a consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
