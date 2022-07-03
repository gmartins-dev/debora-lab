import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] =
    useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <div className="w-full max-w-[1100px] z-10 flex flex-col items-center justify-between mt-10 p-5 mx-auto md:flex-row md:mt-20 xl:p-0">
        <div className="md:max-w-[640px] p-1 xl:p-0 w-full items-center justify-items-center">
          <div className="flex flex-col items-center w-full md:items-start">
            <Logo />
          </div>
          <h1 className="mt-8 text-[2rem] md:text-[2.5rem] leading-tight">
            Venha&nbsp;
            <strong className="text-blue-500">
              descobrir
            </strong>
            &nbsp;e&nbsp;
            <strong className="text-blue-500">
              revelar&nbsp;
            </strong>
            seu &nbsp;
            <strong className="text-blue-500">
              Poder Pessoal
            </strong>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-200">
            Re-forma Visual proporciona conhecimento e
            autonomia para você escolher quem quer ser e
            estar pronta e bem vestida para todas as
            oportunidades da vida!
          </p>
        </div>

        <div className="p-8 text-green-500 bg-[#F3F2EF] border border-gray-500 rounded mt-4 md:mt-0 w-full lg:max-w-[400px]">
          <strong className="block mb-6 text-2xl">
            Inscreva-se gratutitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full gap-2 bg-[#F3F2EF]"
          >
            <input
              className="px-5 bg-[#E9E4E0] rounded h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) =>
                setName(event.target.value)
              }
            />
            <input
              className="px-5 bg-[#E9E4E0] rounded h-14"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

            <button
              disabled={loading}
              className="py-4 mt-4 text-sm text-[#E9E4E0] font-bold uppercase transition-colors bg-green-500 rounded hover:bg-green-600 disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src=""
        className="mt-[-5vh] z-0 md:mt-10"
        alt=""
      />
    </div>
  );
}
