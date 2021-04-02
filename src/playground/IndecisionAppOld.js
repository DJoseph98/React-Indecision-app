import React from 'react';
import AddOptions from './AddOptions'
import Header from './Header';
import Actions from './Actions';
import Options from './Options';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
        this.state = {
            //options: props.options //data de la valeurs par default
            options: []
        }
    }
    ///--------------- LIFECYCLE FUNCTIONS -------------------------
    componentDidMount() {
        /*alert when component is mounted*/
        try {
            const json = localStorage.getItem('options'); // utilise les données stocker dans le browser non perdu en reloadant
            const options = JSON.parse(json);
            if (options)
                this.setState(() => ({ options })); //{options: options}
        } catch (error) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        /*alert when component updated*/
        if (prevState.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); // localStorage permet de stocker des données dans la console javascript, permet de manipuler des données depuis le browser sans les perdres en reloadant
        }
    }
    componentWillUnmount() {
        console.log('alert when component is unmounted')
    }
    ///-------------------------------------------------------------
    handleDeleteOptions() {
        this.state.options = [];
        /* this.setState(() => {
            return {
                options: []
            }
        }) */
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOneOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToDelete)
        }))
    }
    handlePickOption() {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random];
        alert(option);
    }
    handleAddOption(option) {
        if (!option)
            return 'Enter value to submit';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exist';

        this.setState((prevState) => ({
            options: this.state.options.concat(option)
        }));

    }
    render() {
        let subtitle = 'Ferme la mec';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Actions handlePickOption={this.handlePickOption} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOneOption={this.handleDeleteOneOption} />
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

/* IndecisionApp.defaultProps = {
    options: ['1', '2', '3']
} */


export default IndecisionApp;