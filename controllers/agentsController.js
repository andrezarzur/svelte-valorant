import valorantService  from '../services/valorantService.js';

class agentsController {
    async fetchData(req, res) {
        try {
          const agentData = await valorantService.getDataFromAPI();
          res.json(agentData);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
    }
}

const AgentsController = new agentsController();
export default AgentsController;