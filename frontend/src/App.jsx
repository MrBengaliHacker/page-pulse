import { useState } from "react";
import AuditForm from "./components/AuditForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import ErrorMessage from "./components/ErrorMessage";

function App() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <main className="min-h-screen bg-slate-100">
            <div className="max-w-4xl mx-auto px-6 py-12">

                <h1 className="text-5xl font-bold text-center text-blue-600">
                    Page Pulse
                </h1>

                <p className="text-center text-gray-500 mt-3 mb-10">
                    Audit any website in seconds
                </p>

                <AuditForm
                    setResult={setResult}
                    setLoading={setLoading}
                    setError={setError}
                    loading={loading}
                />

                {error && <ErrorMessage message={error} />}

                {result ? (
                    <ResultCard result={result} />
                ) : (
                    <div className="mt-8 rounded-xl bg-white p-10 shadow text-center">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            🚀 Ready to analyze
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Enter a website URL above and click <strong>Analyze</strong> to
                            generate an audit report.
                        </p>
                    </div>
                )}

                <Footer />

            </div>
        </main>
    );
}

export default App;