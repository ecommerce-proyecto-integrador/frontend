'use client';
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues:{
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
        <Heading title="Login to MonoStore"/>
        {/*<Button label="Continue with Google" icon={AiOutlineGoogle} onClick={() => {}}></Button>*/}
        <hr className="bg-slate-500 w-full h-px"/>
        <Input id="e-mail" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
        <Button label={isLoading ? "Loading" : "Login"} onClick={handleSubmit(onSubmit)} />
        <p className="text-sm">Do not have an account?{" "}<Link className="underline" href='/pages/register'>Sign up</Link></p>
        </>
    )
};

export default LoginForm;