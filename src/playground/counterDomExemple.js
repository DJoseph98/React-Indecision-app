//https://fr.reactjs.org/docs/dom-elements.html

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this); //permet d'instancier la fonction pour pouvoir l'utiliser dans la class
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {      //l'état de l'objet à mettre a jour (les donnnées)
            count: 0
        };
    }
    componentDidMount() {
        try {
            const countData = localStorage.getItem('count');
            const count = parseInt(countData, 10); //10 = base chiffrement, ici base 10
            if (!isNaN(count)) 
                this.setState(() => ({ count }));
        } catch (error) {
            console.log(error);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleAddOne() {
        this.setState((prevState) => { //permet de mettre à jour la count dans la vue, prevState est l'état avant la modification, utile pour faire des comparaisons etc.
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => { //permet de mettre à jour la count dans la vue, prevState est l'état avant la modification, utile pour faire des comparaisons etc.
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => { //permet de mettre à jour la count dans la vue, prevState est l'état avant la modification, utile pour faire des comparaisons etc.
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>COUNT: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById('app'));


/* let count = 0;

const addOne = () =>{
   count++;
   renderCounterApp();
}

const minusOne = () =>{
    count--;
    renderCounterApp();
 }

 const reset = () =>{
    count=0;
    renderCounterApp();
 }

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>COUNT: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderCounterApp(); */