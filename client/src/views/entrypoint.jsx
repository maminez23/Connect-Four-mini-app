const Entry = (props) => (
        <div>
            <input id="first" type="text" placeholder="first player name"/>
            <input id="second" type="text" placeholder="second player name"/>
            <button onClick={props.start}> Start</button>
        </div>
    )


export default Entry