const BASE_URL = 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api';

export const apiService = {
  getCandidateByEmail: async (email) => {
    const response = await fetch(`${BASE_URL}/candidate/get-by-email?email=${email}`);
    if (!response.ok) throw new Error('Failed to fetch candidate data');
    return response.json();
  },

  getJobs: async () => {
    const response = await fetch(`${BASE_URL}/jobs/get-list`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  },

  applyToJob: async (applicationData) => {
    const response = await fetch(`${BASE_URL}/candidate/apply-to-job`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData),
    });
    
   
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'Submission failed');
    return result;
  }
};