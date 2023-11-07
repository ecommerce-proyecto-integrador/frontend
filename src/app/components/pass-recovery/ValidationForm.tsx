'use client';
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";

const ValidationForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues:{
            validationCode: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        router.push('/pages/loginlab/change-password');
    }

    return (
        <>
        <Heading title="Enter code sent to your email"/>
        <hr className="bg-slate-500 w-full h-px"/>
        <Input id="validationCode" label="Email Code" disabled={isLoading} register={register} errors={errors} required/>
        <Button label={isLoading ? "Loading" : "Confirm"} onClick={handleSubmit(onSubmit)} />
        </>
    )
};

export default ValidationForm;