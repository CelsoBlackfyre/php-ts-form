import React from "react";
import "./bootstrap";
import "../css/app.css";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function () {
    const [dados, setDados] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        idade: 0,
    });

    function handleChange(e) {
        const key = e.target.id;
        const dados = e.target.value;
        setDados((dados) => ({
            ...dados,
            [key]: dados,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/usuarios", dados);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" value={dados.nome} onChange={handleChange} />

            <label htmlFor="sobrenome">Sobrenome:</label>
            <input
                id="sobrenome"
                value={dados.sobrenome}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input id="email" value={dados.email} onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
}
