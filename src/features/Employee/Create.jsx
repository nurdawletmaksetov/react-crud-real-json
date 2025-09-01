import React from 'react'
import { api } from '../../api/api';
import FormEmployee from './Form';

const CreateEmployee = () => {
    async function createFn(body) {
        console.log("Payload:", body);
        await api.post("/employees/create", body);
    }
    return (
        <div>
            <FormEmployee
                submitFn={createFn}
                initialValues={{
                    full_name: { kk: "", uz: "", ru: "", en: "" },
                    phone: "",
                    photo: "",
                    email: "",
                    position: "",
                    birth_date: "",
                }}
            />
        </div>
    )
}

export default CreateEmployee