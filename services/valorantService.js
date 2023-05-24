import axios from 'axios';


// Function to make a GET request to an API endpoint
class ValorantApi {
    async getDataFromAPI() {
      try {
          console.log('asdasd')
        const agentData = await axios.get('https://valorant-api.com/v1/agents')
        return agentData.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
      }
    }
}

const valorantApiInstance = new ValorantApi();
export default valorantApiInstance;