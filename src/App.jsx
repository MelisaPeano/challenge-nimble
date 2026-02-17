import { useState, useEffect } from 'react'
import './App.css'
import { apiService } from './services/api';
import JobCard from './components/JobCard';

const MY_EMAIL = 'melisa.peano@gmail.com';

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [candData, jobsData] = await Promise.all([
          apiService.getCandidateByEmail(MY_EMAIL),
          apiService.getJobs()
        ]);
        setCandidate(candData);
        setJobs(jobsData);
        setStatus({ loading: false, error: null });
      } catch (err) {
        setStatus({ loading: false, error: err.message });
      }
    };
    loadData();
  }, []);

  if (status.loading) return <div className="flex h-screen items-center justify-center text-blue-600 font-bold">Loading challenge...</div>;
  if (status.error) return <div className="text-red-500 p-10 text-center font-bold">Error: {status.error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Nimble Gravity Challenge</h1>
          <p className="text-gray-500 mt-2">Candidate: <span className="font-semibold text-blue-600">{candidate?.firstName} {candidate?.lastName}</span></p>
        </header>

        <div className="grid gap-6">
          {jobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              candidate={candidate} 
              onApply={apiService.applyToJob} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App