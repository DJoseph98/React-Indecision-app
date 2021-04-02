import React from 'react';

export default class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = { // utilisable uniquement ici et eventuellement dans l'enfant
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option); // stock résultat fonction
        if(!error)
            e.target.elements.option.value = '';
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name="option"></input>
                    <button>Ajouter Option</button>
                </form>
            </div>
        );
    }
}