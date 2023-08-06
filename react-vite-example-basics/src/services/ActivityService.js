export default class ActivityService {
    static async getActivityByParticipants(participants) {
        let response = await fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants);    
        let data = await response.json();
        return data;
    }
}