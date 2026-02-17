import React, { useState } from 'react';

const JobCard = ({ job, candidate, onApply }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onApply({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        repoUrl: repoUrl
      });
      setRepoUrl('');
      alert(`Success! Applied to ${job.title}`);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{job.title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input 
          type="url"
          required
          placeholder="https://github.com/..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
        <button 
          type="submit"
          disabled={loading || !repoUrl}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default JobCard;