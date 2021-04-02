import React from 'react';
import AddOptions from './AddOptions'
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selecteOption: undefined
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
    handleDeleteOptions = () => {
        this.state.options = [];
        /* this.setState(() => {
            return {
                options: []
            }
        }) */
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOneOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToDelete)
        }))
    }
    handlePickOption = () => {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random];
        this.setState(() => ({ selecteOption: option }));
    }
    handleAddOption = (option) => {
        if (!option)
            return 'Enter value to submit';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exist';

        this.setState((prevState) => ({
            options: this.state.options.concat(option)
        }));

    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selecteOption: undefined }));
    }
    render() {
        let subtitle = 'The app that will save you';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Actions handlePickOption={this.handlePickOption} options={this.state.options} />
                    <div className="widget"><Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOneOption={this.handleDeleteOneOption} />
                        <AddOptions handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selecteOption={this.state.selecteOption} handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        );
    }
}

/* IndecisionApp.defaultProps = {
    options: ['1', '2', '3']
} */


export default IndecisionApp;