function ResultCard({ result }) {
    const stats = [
        {
            label: "Status",
            value: result.status,
            color: result.status === 200 ? "text-green-600" : "text-red-600",
        },
        {
            label: "Response Time",
            value: result.responseTime,
            color: "text-blue-600",
        },
        {
            label: "H1 Count",
            value: result.h1Count,
            color: "text-purple-600",
        },
        {
            label: "Missing Alt",
            value: result.missingAltCount,
            color: "text-orange-600",
        },
        {
            label: "Word Count",
            value: result.wordCount,
            color: "text-cyan-600",
        },
    ];

    return (
        <div className="mt-8 space-y-6">

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="bg-white rounded-xl shadow p-5 text-center"
                    >
                        <p className="text-sm text-gray-500">
                            {item.label}
                        </p>

                        <h2 className={`mt-2 text-2xl font-bold ${item.color}`}>
                            {item.value}
                        </h2>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow p-6 space-y-6">

                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Title
                    </h2>

                    <p className="text-gray-700 wrap-break-word leading-8">
                        {result.title}
                    </p>
                </div>

                <hr />

                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Description
                    </h2>

                    <p className="text-gray-700 wrap-break-word leading-8">
                        {result.description}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default ResultCard;