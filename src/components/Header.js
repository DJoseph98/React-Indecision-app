import React from 'react';

const Header = (props) => ( //stateless fontion, évite de générer une classe pour chaque composent qui nécéssite juste un affichage

    <div className="header">
        <div className="container">
            <h1 className="header__tittle">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = { // Permet de setter des valeurs par défault, si aucune valeur envoyer dans le template, il prend cette valeur par default
    title: 'Indecision APP'
}

export default Header;