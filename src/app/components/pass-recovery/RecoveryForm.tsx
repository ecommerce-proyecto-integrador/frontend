'use client';
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RecoveryForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues:{
            email: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        router.push('/pages/login/pass-recovery-validation');
    }

    return (
        <>
        <Heading title="Password Recovery"/>
        <hr className="bg-slate-500 w-full h-px"/>
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Button label={isLoading ? "Loading" : "Confirm"} onClick={handleSubmit(onSubmit)} />
        </>
    )
};

export default RecoveryForm;