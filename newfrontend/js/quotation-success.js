// filepath: c:\Users\Pranav.patil\Personal\Project_240KwCs_Root_2\newfrontend\js\quotation-success.js
function QuotationSuccess() {
  // Get details from localStorage (set by previous page)
  const details = JSON.parse(localStorage.getItem("quotationResult"));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Quotation details fetched successfully!
        </h1>
        {details ? (
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Quotation ID:</span> {details.quotation_id}
            </div>
            <div>
              <span className="font-semibold">Estimated Time:</span> {details.estimated_time}
            </div>
            <div>
              <span className="font-semibold">Estimated Price:</span> ${details.estimated_price}
            </div>
          </div>
        ) : (
          <div className="text-red-500">You will get notified for upcoming details.</div>
        )}
        <button
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/"}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QuotationSuccess />);