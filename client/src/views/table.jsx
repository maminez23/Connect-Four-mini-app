class Tableau extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items=[];
        for(let i = 0; i < this.props.col; i++){
            items.push(<td></td>)
        }


        return(
            <tr>
                    {items}
            </tr>
        )

    }
}


export default Tableau