const express = require('express');
const { uuid } = require('uuidv4');
const app = express();

app.use(express.json());

const array = ['Douglas', 'Fernand', 'Lisboa'];


const projects = [];

app.post('/project', (request, response) => {
    
    const {title, owner} = request.body

    const project = { id: uuid(), title, owner };
    
    projects.push(project);

    return response.json(project);
});

app.get('/projects', (request, response) => {

    const { title } = request.query;

    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});



app.put('/projects/:id', (request, response) => {

    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Project not find ID' });
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});



app.delete('/projects/:id', (request, response) => {

    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Id not found in project.'})
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('Back-end started');
    
});