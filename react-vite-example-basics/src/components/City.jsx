// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function City({ cityName, state = 'NSW', country = 'Australia' }) {

    return (
        <div className="City componentBox">
            <strong>{cityName}</strong> is in {state}, {country}
        </div>
    )
}

export default City;