import React from 'react'
import FormUsers from './Form';
import { api } from '../../api/api';

const CreateUsers = () => {
    async function createFn(body) {
        console.log("Payload:", body);
        await api.post("/users/create", body);
    }

    return (
        <div>
            <FormUsers
                submitFn={createFn}
                initialValues={{
                    full_name: { kk: "", uz: "", ru: "", en: "" },
                    birth_date: "",
                    phone: "",
                }}
            />
        </div>
    )
}

export default CreateUsers;