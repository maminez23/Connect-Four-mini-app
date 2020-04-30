const Entry = (props) => (
        <div>
            <input id="first" type="text" placeholder="first player name"/><br/><br/>
            <input id="second" type="text" placeholder="second player name"/><br/><br/>
            <input id="row" type="number" min="5" max="10" placeholder="number row"/><br/><br/>
            <input id="col" type="number" min="5" max="10" placeholder="number column"/><br/><br/>
            <button onClick={props.start}> Start</button>
        </div>
    )


export default Entry