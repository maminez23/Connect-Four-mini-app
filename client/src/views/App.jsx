import Entry from "./entrypoint.jsx";
import Game from "./game.jsx";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Step : 1,
            player1: "",
            player2: "",
            row: 5,
            col:5,
        }
    }

    start() {
        console.log('haaaa')
        var one = document.getElementById('first').value;
        var two = document.getElementById('second').value;
        var riiw = document.getElementById('row').value;
        var ciil = document.getElementById('col').value;
        this.setState((previousState)=>(
            {player1: one, player2: two, step : this.state.Step++,row: riiw,
                col:ciil}
        ))
        console.log(this.state.player1)
    }

    render(){
        if(this.state.Step === 1){
            return (<Entry start={this.start.bind(this)}/>)
        }
        if(this.state.Step === 2){
            return (<Game row={this.state.row} col={this.state.col}/>)
        }
        return(<p>Fuuuuuck</p>)

    }
}

export default App;