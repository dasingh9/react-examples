import { useState, useEffect } from "react";
import ActivityService from "../services/ActivityService";
export default function ActivityFinder() { // Fetches a random activity
    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');
    useEffect(() => {
        async function getActivityByParticipants(participants) {
            let activityObject = await ActivityService.getActivityByParticipants(participants);
            setActivity(activityObject.activity);
        }
        getActivityByParticipants(participants);
    }, [participants]);

    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}
                    onChange={e => setParticipants(e.target.value)}>
                    <option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    )
}