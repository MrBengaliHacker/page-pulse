import { useState } from "react";
import { auditWebsite } from "../services/api";

function AuditForm({ setResult, setLoading }) {

    const [url, setUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            const data = await auditWebsite(url);

            setResult(data);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md"
        >
            <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition"
                >
                    Analyze
                </button>

            </div>
        </form>
    );
}

export default AuditForm;