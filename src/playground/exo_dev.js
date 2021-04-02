console.log('App.js is running!');

// JSX - JavaScript XML
//https://fr.reactjs.org/docs/dom-elements.html
//https://reactjs.org/docs/events.html


const appRoot = document.getElementById('app');

const scene = {
    title: 'Il était une fois dans le dev',
    subtitle: 'Comment coder',
    options: [],
    acteur: 'Didier'
};

const user = {
    userName : 'Anna',
    age : 30,
    locations : 'Monaco',
    wantToSee : true
};

let sceneAsOptions = (scene) => {
    if (scene && scene.options.length > 0)
        return true;
};

let sceneOptionsElements = (scene) => { 
    let optionsElement = ''
    for (let i = 0; i < scene.options.length; i++) {
        optionsElement.concat(<p>{scene.options[i]}</p>)
      }
      console.log(optionsElement)
      return optionsElement
};

let isMajor = (user) => {
    if (user.age > 18)
        return true
};

const ajouterOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        scene.options.push(option)
        e.target.elements.option.value = '';
    }

    render();
};

const resetOptions = () => {
    scene.options.splice(0, scene.options.length) // remove elements from array
    render();
};

const randomOption = () => {
    const random = Math.floor(Math.random() * scene.options.length);
    const option = scene.options[random];
    alert(option);
};

const render = () => {
    const template = (
        <div>
        <p>{sceneOptionsElements(scene)}</p>
            <h1>Titre : {scene.title}</h1>
            <h2>Sous Titre : {scene.subtitle}</h2>
            <h3>Acteur : {scene.acteur }</h3>
            {sceneAsOptions(scene) ? <h3>Options : <ol>{scene.options.map(option => <li key={option}>{option}</li>)}</ol></h3> : 'No Options'}
            <h3>{user && user.wantToSee && isMajor(user) && <div>Cobaye : <u1><li>Name :{user.userName}</li><li>Age: {user.age}</li><li>Location: {user.locations}</li></u1></div>}</h3>
            <form onSubmit={ajouterOption}>
                <input type="text" name="option" placeholder="Ce que tu veux qu'elle t'aprennes"></input>
                <button>Ajouter</button>
            </form>
            <p><button onClick={resetOptions}>Supprimer options</button></p>
            <p><button disabled={scene.options.length === 0} onClick={randomOption}>Par quoi elle commence ?</button></p>
            <p></p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
