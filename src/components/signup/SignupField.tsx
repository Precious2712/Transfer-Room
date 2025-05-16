"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpFormSchema, type SignupFormData } from "@/data/signup-schema/schema"
import { Form } from "@/components/ui/form"
import { userSignup } from "@/data/signupForm/signIn"
import { FormFieldRenderer } from "../FormField/FormFieldRenderer"
import { CountryLeagueSelect } from "../FormField/CountryLeagueSelect"
import { toast } from 'react-hot-toast';
import { CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { AnimatedButton } from "../ui/animateds/animated-button"
import { AnimatedFormField } from "../ui/animateds/animated-form-field"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { AnimatedCard } from "../ui/animateds/animated-card"
import axios from "axios"

export function SignupField() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<SignupFormData>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            contact: 0,
            countryClub: undefined,
            league: "",
            team: "",
        },
    })

    async function onSubmit(values: SignupFormData) {
        setIsSubmitting(true)
        try {
            const payload = {
                ...values,
                contact: String(values.contact)
            }

            const signupApi = await axios.post('http://localhost:4000/users/register', payload);
            const db = signupApi.data
            console.log(db);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSuccess(true);
            toast.success('Signup successful! ✅');
        } catch (error) {
            console.error("Signup error:", error);
            toast.error("Signup failed. Please try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setIsSuccess(false), 3000);
        }
    }

    const excludedFields = ["countryClub", "league", "team", "firstname", "lastname", "email", "contact"]
    const standardFields = userSignup.filter((field) => !excludedFields.includes(field.name))

    return (
        <AnimatedCard className="w-full max-w-2xl mx-auto shadow-lg backdrop-blur-sm b-white/90 !mt-0 !pt-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 ">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <CardTitle className="text-2xl font-bold">Signup</CardTitle>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <CardDescription className="text-blue-100">Signup to see your favorite player</CardDescription>
                </motion.div>
            </CardHeader>
            <CardContent className="pt-0">
                <AnimatePresence>
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex flex-col items-center justify-center py-10 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                            >
                                <CheckCircle className="w-20 h-20 text-green-500 mb-4 " />
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl font-bold text-gray-800 mb-2"
                            >
                                Registration Complete!
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-600"
                            >
                                Welcome to your team. You'll receive a confirmation email shortly.
                            </motion.p>
                        </motion.div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                {/* Name fields - side by side */}
                                <AnimatedFormField index={0}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormFieldRenderer
                                            name="firstname"
                                            type="text"
                                            label="First Name"
                                            placeholder="Enter first name"
                                            required={true}
                                            control={form.control}
                                        />
                                        <FormFieldRenderer
                                            name="lastname"
                                            type="text"
                                            label="Last Name"
                                            placeholder="Enter last name"
                                            required={true}
                                            control={form.control}
                                        />
                                    </div>
                                </AnimatedFormField>

                                {/* Contact fields - side by side */}
                                <AnimatedFormField index={1}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormFieldRenderer
                                            name="email"
                                            type="email"
                                            label="Email"
                                            placeholder="Enter your email"
                                            required={true}
                                            control={form.control}
                                        />
                                        <FormFieldRenderer
                                            name="contact"
                                            type="number"
                                            label="Contact"
                                            placeholder="Enter your contact"
                                            required={true}
                                            control={form.control}
                                        />
                                    </div>
                                </AnimatedFormField>

                                <AnimatedFormField index={3}>
                                    <CountryLeagueSelect control={form.control} setValue={form.setValue} />
                                </AnimatedFormField>

                                {standardFields.map((field, index) => (
                                    <AnimatedFormField key={field.name} index={4 + index}>
                                        <FormFieldRenderer {...field} control={form.control} />
                                    </AnimatedFormField>
                                ))}

                                <AnimatedFormField index={5}>
                                    <div className="flex gap-4 pt-2">
                                        <AnimatedButton type="button" variant="outline" className="flex-1 cursor-pointer" onClick={() => form.reset()}>
                                            Reset
                                        </AnimatedButton>
                                        <AnimatedButton
                                            type="submit"
                                            className="flex-1 bg-blue-600 hover:bg-blue-800 cursor-pointer"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                                                    className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            ) : null}
                                            {isSubmitting ? "Registering..." : "Register"}
                                        </AnimatedButton>
                                    </div>
                                </AnimatedFormField>
                            </form>
                        </Form>
                    )}
                </AnimatePresence>
            </CardContent>
        </AnimatedCard>
    )
}