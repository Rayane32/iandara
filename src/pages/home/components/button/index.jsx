import { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <>
            <label>
                First name:
                <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                />
            </label>

            <pre>
                {JSON.stringify(form)}
            </pre>

            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}
