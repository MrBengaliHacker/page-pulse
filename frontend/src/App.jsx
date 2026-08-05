import { useState } from "react";
import AuditForm from "./components/AuditForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <main className="min-h-screen bg-slate-100">
            <div className="max-w-4xl mx-auto px-6 py-12">

                <h1 className="text-5xl font-bold text-center text-blue-600">
                    🚀 Page Pulse
                </h1>

                <p className="text-center text-gray-500 mt-3 mb-10">
                    Audit any website in seconds
                </p>

                <AuditForm
                    setResult={setResult}
                    setLoading={setLoading}
                />

                {loading && <p className="mt-6 text-center">Loading...</p>}

                {result && <ResultCard result={result} />}

                <Footer />

            </div>
        </main>
    );
}

export default App;