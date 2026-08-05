function ResultCard({ result }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-8 space-y-3">

            <p><strong>Status:</strong> {result.status}</p>

            <p><strong>Response Time:</strong> {result.responseTime}</p>

            <p><strong>Title:</strong> {result.title}</p>

            <p><strong>Description:</strong> {result.description}</p>

            <p><strong>H1 Count:</strong> {result.h1Count}</p>

            <p><strong>Missing Alt:</strong> {result.missingAltCount}</p>

            <p><strong>Word Count:</strong> {result.wordCount}</p>

        </div>
    );
}

export default ResultCard;