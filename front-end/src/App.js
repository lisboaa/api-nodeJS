import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/so-agradece.jpg';

function App() {
    const [projects, setProject] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {

        setProject([ ...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
    <>
        <Header title="Projects"/>

        <img width={500} src={backgroundImage}/>

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    )
}

export default App;