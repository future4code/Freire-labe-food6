import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (ev) => {
        const { name, value } = ev.target;
        setForm({...form, [name]: value})
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    const handleClickShowPassword = () => {
        setForm({
            ...form,
            showPassword: !form.showPassword           
        });
    }

    const handleClickShowConfirm = () => {
        setForm({
            ...form,           
            showPasswordConfirm: !form.showPasswordConfirm
        });
    }

    return {form, onChange, cleanFields, handleClickShowPassword, handleClickShowConfirm }
}

export default useForm