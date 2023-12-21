'use client';
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from "next/navigation";
import  Heading  from '../product/Heading';
import Input from '../input/Input';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import Link from 'next/link';
import { setCookie, getCookie } from 'cookies-next';


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
  const token = getCookie("token");
  const { register, formState: {errors}, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rut: '',
      region: '',
      comuna: '',
      address: '',
      phone: '',
      floorOrDepartment: '',
    },
  });

  const handleEmailChange = (value: string) => {
    setEmail(value); // Actualiza el estado del correo electrónico
  };

  const handleNameChange = (value: string) => {
    setName(value); // Actualiza el estado del nombre
  };

  const handleRutChange = (value: string) => {
    setRut(value); // Actualiza el estado del rut
  };

  const handleRegionChange = (value: string) => {
    setRegion(value); // Actualiza el estado de la región
  };

  const handleComunaChange = (value: string) => {
    setComuna(value); // Actualiza el estado de la comuna
  };

  const handleAddressChange = (value: string) => {
    setAddress(value); // Actualiza el estado de la dirección
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value); // Actualiza el estado del teléfono
  };

  const handleFloorOrDepartmentChange = (value: string) => {
    setFloorOrDepartment(value); // Actualiza el estado del piso o departamento
  };

  const handlePayment = () => {
    router.push('/pages/payment');
  }

    return (
      <>
      <Heading title='Checkout' />
      <hr className='bg-slate-300 w-full h-px'/>
      <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required onChange={handleEmailChange}/>
      <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required onChange={handleNameChange}/>
      <Input id='rut' label='Rut' disabled={isLoading} register={register} errors={errors} required onChange={handleRutChange}/>
      <Input id='region' label='Region' disabled={isLoading} register={register} errors={errors} required onChange={handleRegionChange}/>
      <Input id='comuna' label='Comuna' disabled={isLoading} register={register} errors={errors} required onChange={handleComunaChange}/>
      <Input id='address' label='Address' disabled={isLoading} register={register} errors={errors} required onChange={handleAddressChange}/>
      <Input id='phone' label='Phone' disabled={isLoading} register={register} errors={errors} required onChange={handlePhoneChange}/>
      <Input id='floorOrDepartment' label='Floor or Department' disabled={isLoading} register={register} errors={errors} required onChange={handleFloorOrDepartmentChange}/>
      <hr className='bg-slate-300 w-full h-px'/>

      <Button label='Payment' onClick={handleSubmit(handlePayment)} disabled={isLoading}/>

    </>
    );
  }
  
  export default LoggedInCheckoutForm;