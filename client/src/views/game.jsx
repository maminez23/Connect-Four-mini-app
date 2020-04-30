import Tableau from "./table.jsx";

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items=[];
        for(let i = 0; i < this.props.row; i++){
            items.push(<Tableau col={this.props.col}/>)
        }


        return(
            <div>
                <table>
                    <tbody>
                    {items}
                    </tbody>
                </table>
            </div>
        )

    }
}


export default Game;
