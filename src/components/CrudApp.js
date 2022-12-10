import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
{
    id: 1,
    nome: "Laury Gonzalez",
    email: "lauri24@gmail.com",
    telefone: "976543282",
},
{
    id: 2,
    nome: "Alberto Mariño",
    email: "alber18@gmail.com",
    telefone:"9245464748",
},
{
    id: 3,
    nome: "Guillermo Lara",
    email: "Guille14@gmail.com",
    telefone:"9256575859",
},
{
    id: 4,
    nome: "Roger Valerio",
    email: "roger45@gmail.com",
    telefone:"9265646362",
},
{
    id: 5,
    nome: "Misael Gonzalez",
    email: "mis-ag@gmail.com",
    telefone:"9272737475",
},
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
};

    const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
};

    const deleteData = (id) => {
    let isDelete = window.confirm(
    `¿Tem certeza que deseja eliminar el registro com o id '${id}'?`
);

    if (isDelete) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
    } else {
    return;
    }
};

    return (
        <div>
            <h2>Vamos a explorar</h2>
            <article className="grid-1-2-3">
                <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                />
                <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                />
            </article>
        </div>
    );
};

export default CrudApp;