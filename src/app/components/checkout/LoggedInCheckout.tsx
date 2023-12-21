'use client';
import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useQuery } from '@apollo/client';
import client from '../../apolloClient';
import { useCart } from '../../../../hooks/useCart';
import { on } from 'events';

function generarNumeroOrdenCompra(): string {
  const fechaActual = new Date();
  const year = fechaActual.getFullYear().toString().slice(2);
  const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const day = fechaActual.getDate().toString().padStart(2, '0');

  const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  const numeroOrdenCompra = `OC${year}${month}${day}${numeroAleatorio}`;

  return numeroOrdenCompra;
}

function generarSessionId(): number {
  const fechaActual = new Date();
  const timestamp = fechaActual.getTime().toString();
  const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  const sessionId = parseInt(`1${timestamp}${aleatorio}`); // Agregamos "1" al principio para asegurar que empiece con un número diferente de cero.

  return sessionId;
}

const LoggedInCheckoutForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [floorOrDepartment, setFloorOrDepartment] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {cartProducts, handleClearCart, cartTotalAmount} = useCart();

  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      region: '',
      comuna: '',
      address: '',
      floorOrDepartment: '',
    },
  });

  const showInfo_q = gql`
    query showInfo {
      showInfo
      }`;

    const { loading, error, data } = useQuery(showInfo_q, {client: client});

    useEffect(() => {
      if (!loading && !error && data) {
        console.log("Data", data.showInfo);
        const json = JSON.parse(data.showInfo);
        setName(json.nombre);
        setEmail(json.correo);
        setRut(json.rut);
        setPhone(json.phone);
      }
    }, [loading, error, data]);

  const handleRegionChange = (value: string) => {
    setRegion(value); // Actualiza el estado de la región
  };

  const handleComunaChange = (value: string) => {
    setComuna(value); // Actualiza el estado de la comuna
  };

  const handleAddressChange = (value: string) => {
    setAddress(value); // Actualiza el estado de la dirección
  };

  const handleFloorOrDepartmentChange = (value: string) => {
    setFloorOrDepartment(value); // Actualiza el estado del piso o departamento
  };

  const create_pay = gql`
    mutation paycreated($createPayInputnput: CreatePayInput!) {
      paycreated(createPayInputnput: $createPayInputnput)
      }`;

  const [createPay] = useMutation(create_pay, {client: client});
  const handlePayment = async () => {
    try {
      const { data } = await createPay({
        variables: {
          createPayInputnput: {
            orden_compra: generarNumeroOrdenCompra(),
            session_id: generarSessionId(),
            monto: cartTotalAmount,
            return_url: "http://localhost:3001/pages/payment",
          },
        },
      });
      const url = data.paycreated;
      router.push(url);
    }
    catch (error) {
      console.error('Error al crear el pago:', error);
      setLoginError('Error al crear el pago. Inténtalo de nuevo.');
    }

    
    
  }

    return (
      <>
      <Heading title='Checkout' />
      <hr className='bg-slate-300 w-full h-px'/>
      <div className='flex-row justify-center'>
        <h2 className='text-xl font-bold'>Personal Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
      <div className='flex-row justify-center'>
        <h2 className='text-xl font-bold'>Personal Information</h2>
        <p>Phone: {phone}</p>
        <p>Rut: {rut}</p>
      </div>
      <Input id='region' label='Region' disabled={isLoading} register={register} errors={errors} required onChange={handleRegionChange}/>
      <Input id='comuna' label='Comuna' disabled={isLoading} register={register} errors={errors} required onChange={handleComunaChange}/>
      <Input id='address' label='Address' disabled={isLoading} register={register} errors={errors} required onChange={handleAddressChange}/>
      <Input id='floorOrDepartment' label='Floor or Department' disabled={isLoading} register={register} errors={errors} required onChange={handleFloorOrDepartmentChange}/>
      <hr className='bg-slate-300 w-full h-px'/>

      <Button label='Payment' onClick={handleSubmit(handlePayment)} disabled={isLoading}/>

    </>
    );
  }
  
  export default LoggedInCheckoutForm;