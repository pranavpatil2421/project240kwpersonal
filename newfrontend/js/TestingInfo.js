function CustomerDetails({ onSuccess }) {
  const [form, setForm] = React.useState({
    organization: "",
    industry: [],
    contact_person: "",
    preferable_dates: "",
    designation: "",
    mobile: "",
    email: "",
    address: ""
  });
  const [submitting, setSubmitting] = React.useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm(f => ({
        ...f,
        industry: checked
          ? [...f.industry, value]
          : f.industry.filter(i => i !== value)
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    fetch("/api/equipment/customer-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        industry: Array.isArray(form.industry) ? form.industry : [form.industry]
      })
    })
      .then(res => {
        setSubmitting(false);
        if (res.ok) {
          if (onSuccess) onSuccess();
        } else {
          res.text().then(msg => alert("Submission failed: " + msg));
        }
      })
      .catch(() => {
        setSubmitting(false);
        alert("Submission failed. Please try again.");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Details</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-600">Name of Organization</label>
          <input name="organization" value={form.organization} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="text-sm text-gray-600">Industry/ Application</label>
          <div className="border rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Automotive','Consumer','IoT','Military','Medical','Telecom','Lighting','Avionics','Others'].map((i) => (
                <label key={i} className="flex gap-2 items-center">
                  <input type="checkbox" name="industry" value={i} checked={form.industry.includes(i)} onChange={handleChange} /> <span>{i}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600">Contact Person</label>
          <input name="contact_person" value={form.contact_person} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="text-sm text-gray-600">Preferable Dates (for testing)</label>
          <input name="preferable_dates" value={form.preferable_dates} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Designation</label>
          <input name="designation" value={form.designation} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Mobile No.</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="text-sm text-gray-600">Email ID</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full mt-1 px-3 py-2 border rounded-lg" required />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} rows="4" className="w-full mt-1 px-3 py-2 border rounded-lg"></textarea>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Customer Details and Next: EUT Details"}
        </button>
      </div>
    </form>
  );
}

function TestingInfoPage() {
  function handleSuccess() {
    window.location.href = "/eut-details";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {typeof Header !== "undefined" && <Header />}
      <section className="container mx-auto px-6 py-12">
        <CustomerDetails onSuccess={handleSuccess} />
      </section>
      {typeof Footer !== "undefined" && <Footer />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <TestingInfoPage />
);
