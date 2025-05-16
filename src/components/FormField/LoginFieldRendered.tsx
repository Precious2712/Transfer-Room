'use client';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { LoginFormData } from "@/data/signup-schema/schema";
import { EyeOff } from "lucide-react";
import { useState } from "react";

type LoginFieldRenderedProps = {
    name: keyof LoginFormData;
    placeholder: string;
    type: string;
    required: boolean;
    label: string;
    control: Control<LoginFormData>;
};

export function LoginFieldRendered({
    name,
    placeholder,
    type,
    required,
    label,
    control
}: LoginFieldRenderedProps) {
    const [show, setShow] = useState(false);
    const handlePassword = () => {
        setShow(!show)
    }
    const renderField = () => {
        switch (type) {
            case 'email':
                return (
                    <FormField
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{label}</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder={placeholder}
                                        required={required}
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>We’ll never share your email.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                );

            case 'password':
                return (
                    <FormField
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{label}</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={`${show ? 'text' : 'password'}`}
                                            placeholder={placeholder}
                                            required={required}
                                            {...field}
                                        />
                                        <EyeOff onClick={handlePassword} className="absolute top-2 right-0" />
                                    </div>
                                </FormControl>
                                <FormDescription>Password must be secure.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                );

            default:
                return null;
        }
    };

    return renderField();
}