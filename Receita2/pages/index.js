import React, { useState } from 'react';
import { Cats } from "./animais/cats";
import { Dogs } from "./animais/dogs";
import { Botao } from "./controle/botao";

export default function Home() {
    const [mostrarGatos, setMostrarGatos] = useState(true);

    const toggleAnimais = () => {
        setMostrarGatos(!mostrarGatos);
    };

    return (
        <div>
            <h1> <Botao onClick={toggleAnimais} /> </h1>

            {mostrarGatos ? <Cats /> : <Dogs />}
        </div>
    )
}