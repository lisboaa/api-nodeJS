import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/so-agradece.jpg';
import api from './services/api';

function App() {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
            
        })
    }, []);

    function handleAddProject() {

        setProject([ ...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
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