import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
    <div>
        <h3>Tabla de Dados</h3>
        <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {data.length > 0 ? (
            data.map((el) => (
                <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                />
            ))
            ) : (
            <tr>
                <td colSpan="4">Sim dados</td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
    );
};

export default CrudTable;