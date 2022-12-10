import React, { useState, useEffect } from "react";

const initailForm = {
    nome: "",
    email: "",
    telefone:"",
    id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initailForm);

    useEffect(() => {
    if (dataToEdit) {
        setForm(dataToEdit);
    } else {
        setForm(initailForm);
    }
}, [dataToEdit]);

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.telefone) {
        alert("Dados incompletos");
        return;
    }

    if (form.id === null) {
        createData(form);
    } else {
        updateData(form);
    }

    handleReset();
};

const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
};

    return (
    <div>
        <h3>{dataToEdit ? "Editar" : "Adicionar"}</h3>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            value={form.nome}
        />
        <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={form.email}
        />
        <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            onChange={handleChange}
            value={form.telefone}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpar" onClick={handleReset} />
        </form>
    </div>
    );
};

export default CrudForm;