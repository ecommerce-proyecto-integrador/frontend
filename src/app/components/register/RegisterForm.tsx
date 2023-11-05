'use client';
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);

    }

    return (
        <>
        <Heading title="Sign up for MonoStore"/>
        {/*<Button label="Sign up with Google" icon={AiOutlineGoogle} onClick={() => {}}></Button>*/}
        <hr className="bg-slate-500 w-full h-px"/>
        <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="e-mail" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
        <Button label={isLoading ? "Loading" : "Sign up"} onClick={handleSubmit(onSubmit)} />
        <p className="text-sm">Already have an account?{" "}<Link className="underline" href='/pages/loginlab'>Login</Link></p>
        </>
    )
}

export default RegisterForm;