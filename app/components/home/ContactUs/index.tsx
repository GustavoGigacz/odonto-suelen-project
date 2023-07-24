'use client';

import { FormEventHandler, useState } from 'react';
import Link from 'next/link';
import InstagramIcon from '../../shared/icons/InstagramIcon';
import FacebookIcon from '../../shared/icons/FacebookIcon';
import LinkedinIcon from '../../shared/icons/LinkedinIcon';
import TwitterIcon from '../../shared/icons/TwitterIcon';
import UserIcon from '../../shared/icons/UserIcon';
import PhoneIcon from '../../shared/icons/PhoneIcon';
import Input from './Input';
import TextArea from './TextArea';
import axios from 'axios';

export default function ContactUs() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    success: '',
    error: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setFeedback({
      error: ``,
      success: '',
    });

    if (loading) {
      return;
    }

    if (form.telefone.length <= 1) {
      setFeedback({
        error: `O telefone é um campo obrigatório para você entrar em contato`,
        success: '',
      });
      setLoading(false);
      return;
    }

    if (form.mensagem.length <= 1) {
      setFeedback({
        error: `Erro - mensagem vazia`,
        success: '',
      });
      setLoading(false);
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append('form-name', 'contato');
    formData.append('Nome', form.nome);
    formData.append('Telefone', form.telefone);
    formData.append('Mensagem', form.mensagem);

    axios({
      method: 'post',
      url: '/',
      data: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() =>
        setFeedback({
          error: '',
          success:
            'Mensagem enviada com sucesso! Obrigado por entrar em contato.',
        })
      )
      .catch((error) => {
        setFeedback({
          error: `Algo de errado ocorreu, por favor entre em contato por email`,
          success: '',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className='w-full max-w-desktop px-8 mx-auto flex screen3:flex-row flex-col justify-between screen3:mb-60 mb-12 pt-[100px] -mt-[100px]'
      id='contato'
    >
      <div className='text-blue1 mb-12'>
        <h3 className='screen4:text-5xl text-3xl font-roboto font-bold max-w-[463px] mb-12 '>
          Entre em Contato Conosco
        </h3>
        <ul>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Telefone
            </span>
            <span className='font-archivo screen4:text-2xl text-sm'>
              (42)913245434
            </span>
          </li>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Email
            </span>
            <Link href={'#'} className='font-archivo screen4:text-2xl text-sm'>
              drasuelen@gmail.com
            </Link>
          </li>
          <li className='flex flex-col screen4:gap-2 mb-7'>
            <span className='font-roboto font-bold screen4:text-3xl text-xl'>
              Localização
            </span>
            <span className='font-archivo max-w-[320px] screen4:text-2xl text-sm'>
              R. Altíno Pereira de Lima, 1814 - Centro, São Mateus do Sul - PR,
              83900-000
            </span>
          </li>
        </ul>
        <ul className='flex gap-6'>
          <li>
            <Link href={'#'}>
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <LinkedinIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form
          action=''
          className='flex flex-col screeb4:gap-6 gap-[10px]'
          name='contato'
          data-netlify='true'
          onSubmit={handleSubmit}
        >
          <input type='hidden' name='form-name' value='contato' />
          <Input
            Icon={UserIcon}
            label='Nome Completo'
            name='nome_completo'
            value={form.nome}
            setValue={(value) => {
              setForm((prev) => ({ ...prev, nome: value }));
            }}
          />
          <Input
            Icon={PhoneIcon}
            label='Telefone'
            name='telefone'
            value={form.telefone}
            setValue={(value) => {
              setForm((prev) => ({ ...prev, telefone: value }));
            }}
          />
          <TextArea
            label='Mensagem'
            name='mensagem'
            value={form.mensagem}
            setValue={(value) => {
              setForm((prev) => ({ ...prev, mensagem: value }));
            }}
          />
          <span
            className={
              feedback.success ? 'text-blue1 font-bold' : 'text-red2 font-bold'
            }
          >
            {feedback.success || feedback.error}
          </span>
          <div>
            <button className='bg-red2 screen4:py-3 screen4:px-6 py-2 px-4 rounded-[10px] text-white screen4:text-2xl text-sm font-roboto font-bold'>
              {loading ? 'Carregando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
