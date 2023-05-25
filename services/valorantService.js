import axios from 'axios';


// Function to make a GET request to an API endpoint
class ValorantApi {
    async getDataFromAPI() {
      try {
          console.log('asdasd')
        const agentData = await axios.get(process.env.VALORANT_API_AGENTS_URL)
        return agentData.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
      }
    }
}

const valorantApiInstance = new ValorantApi();
export default valorantApiInstance;