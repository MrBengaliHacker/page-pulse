function ErrorMessage({ message }) {

    return (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-red-600 font-medium">
                {message}
            </p>
        </div>
    );

}

export default ErrorMessage;