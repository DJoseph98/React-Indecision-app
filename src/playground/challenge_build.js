class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isVisible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible : !prevState.isVisible
            }
                
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.isVisible && (
                    <p>Truc à cacher</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));