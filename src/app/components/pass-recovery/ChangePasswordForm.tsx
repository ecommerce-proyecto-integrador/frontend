'use client';
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ChangePasswordForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues:{
            newPassword: '',
            repeatNewPassword: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if(data.newPassword === data.repeatNewPassword){
            toast.error('Passwords do not match');
            toast.success('Password changed successfully');
            setIsLoading(true);
            router.push('/');
        }
        toast.error('Passwords do not match');
    }
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
        <Heading title="Create New Password"/>
        <hr className="bg-slate-500 w-full h-px"/>
        <div className="w-full">
            <Input
                id="newPassword"
                label="New password"
                disabled={isLoading}
                register={register}
                errors={errors}
                type={showPassword ? "text" : "password"} // Toggle password visibility
                required
            />
        </div>
        <div className="flex w-full">
            <Input
                id="repeatNewPassword"
                label="Repeat new password"
                disabled={isLoading}
                register={register}
                errors={errors}
                type={showPassword ? "text" : "password"} // Toggle password visibility
                required
                //icon={showPassword ? "eye-off" : "eye"}
            />
            {/*<button className="underline " onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
    </button>*/}
        </div>
        <Button label={isLoading ? "Loading" : "Confirm"} onClick={handleSubmit(onSubmit)} />
        </>
    )
};

export default ChangePasswordForm;