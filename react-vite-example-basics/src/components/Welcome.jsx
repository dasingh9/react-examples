import "../App.css"

function Welcome(props) { // custom Welcome component
    return (
        <div className="Welcome componentBox">
            {/* if the 'name' prop exists, render it on the screen */}
            <h3>Welcome {props.name}!</h3>
            {/* if this component has children, render them here */}
            {props.children}
        </div>
    )
}

export default Welcome;