import Entry from "./entrypoint.jsx";
import Game from "./game.jsx";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Step : 1,
            player1: "",
            player2: ""
        }
    }

    start() {
        console.log('haaaa')
        var one = document.getElementById('first').value;
        var two = document.getElementById('second').value;
        this.setState({player1: one, player2: two, step : this.state.Step++})
    }

    render(){
        if(this.state.Step === 1){
            return (<Entry start={this.start.bind(this)}/>)
        }
        if(this.state.Step === 2){
            return (<Game/>)
        }
        return(<p>Fuuuuuck</p>)

    }
}

export default App;