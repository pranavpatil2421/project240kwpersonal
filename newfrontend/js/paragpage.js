function EmptyPage() {
  function handleNext() {
    window.location.href = "/testingstanders4.html";
    // If you have a FastAPI route like /testingstanders4, use that instead
    // window.location.href = "/testingstanders4";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleNext}
      >
        Go to Next Page
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EmptyPage />);