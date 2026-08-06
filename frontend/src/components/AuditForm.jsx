import { useState } from "react";
import { auditWebsite } from "../services/api";

function AuditForm({ setResult, setLoading, setError, loading }) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await auditWebsite(url);

      setResult(data);
      setError("");
    } catch (error) {
      setResult(null);

      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Enter website URL (https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full flex-1 border rounded-lg px-4 py-4 text-lg outline-none focus:ring-4 focus:ring-blue-200"
        />

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </form>
  );
}

export default AuditForm;
