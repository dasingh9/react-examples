import { useState } from "react";


function MoodChanger() {

    const [mood, setMood] = useState('happy');

    const handleChangeMoodToTired = function () { 
        setMood('tired');
    };

    const handleChangeMoodToHungry = function () { 
        setMood('hungry');
    };
    

    return (
        <>
            <div className="MoodChanger componentBox">
                Current Mood: {mood}
            </div>
            <div>
                <button
                    onClick={handleChangeMoodToTired}>
                    Stay Up Late
                </button>

                <button
                    onClick={handleChangeMoodToHungry}>
                    Skip Lunch
                </button>
            </div>
        </>
    )
}

export default MoodChanger;