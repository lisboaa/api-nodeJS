import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/so-agradece.jpg';
import api from './services/api';

function App() {


    const [projects, setProjects] = useState([]);
//Realiza a busca dos dados referente a requisição do tipo get do back-end.
    useEffect(() => {
        api.get('/projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
            
        })
    }, []);

    async function handleAddProject() {

        // setProject([ ...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);

        const response = await api.post('project', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Douglas'
        });

        //armazena o valor que veio da requisição(body);
        const project = response.data;

        /**
         * faz uma copia do array existente utilizando o operador spreead e no final adiciona o valor que teve de retorno
         * da requisição
         */
        setProjects([...projects, project]);
    }

    return (
    <>
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    )
}

export default App;