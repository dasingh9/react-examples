import "./PropsDisplayer.css"

// Create a new file called PropsDisplayer.jsx in a components folder
function PropsDisplayer(props) {
    // convert object to string
    const stringProps = JSON.stringify(props);

    const citiesJSX = 
        props.cities.map(city=> (
            <div className="city">
                <h2>{city.cityName}</h2>
                <div>Suburbs: {city.suburbs.join(", ")} </div>
            </div>)
        );
    

    //const citiesString = props.cities.join("; ")

    return (
        <>
        <div className="PropsDisplayer componentBox">
            <h2>Check out my props!</h2>
            <h3>{stringProps}</h3>
            {/* what happens if we try to render the object {props} ? */}
        </div>

        <div>
            I want to eat {props.product.productName}
        </div>
        <div>
            I have visited these cities: {citiesJSX}
        </div>

        </>
    )
}
// export this component so we can import it elsewhere
export default PropsDisplayer