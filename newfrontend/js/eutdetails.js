function EUTDetails() {
  const [formData, setFormData] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  const fieldsLeft = [
    'Name of EUT',
    'Quantity of EUT',
    'Manufacturer/Make & Address',
    'Model No.',
    'Serial No.',
    'No. of Power Ports and Connector Type',
    'Name of the Software',
  ];
  const fieldsRight = [
    'Supply Voltage',
    'Operating Frequency',
    'Current',
    'Weight (Kg)',
    'Length (mm)',
    'Width (mm)',
    'Height (mm)',
    'No. of Signal Lines and Connector Type',
    'Software Version No.',
  ];

  const handleSubmit = async () => {
    setSubmitting(true);
    const payload = {
      name: formData["Name of EUT"] || "",
      quantity: Number(formData["Quantity of EUT"]) || 1,
      manufacturer_address: formData["Manufacturer/Make & Address"] || "",
      model_number: formData["Model No."] || "",
      serial_number: formData["Serial No."] || "",
      power_ports: formData["No. of Power Ports and Connector Type"] || "",
      software_name: formData["Name of the Software"] || "",
      supply_voltage: formData["Supply Voltage"] || "",
      operating_frequency: formData["Operating Frequency"] || "",
      current: formData["Current"] || "",
      weight_kg: formData["Weight (Kg)"] ? parseFloat(formData["Weight (Kg)"]) : null,
      length_mm: formData["Length (mm)"] ? parseFloat(formData["Length (mm)"]) : null,
      width_mm: formData["Width (mm)"] ? parseFloat(formData["Width (mm)"]) : null,
      height_mm: formData["Height (mm)"] ? parseFloat(formData["Height (mm)"]) : null,
      signal_ports: formData["No. of Signal Lines and Connector Type"] || "",
      software_version: formData["Software Version No."] || "",
    };
    // Check required fields
    if (!payload.name || !payload.manufacturer_address || !payload.model_number || !payload.serial_number) {
      alert("Please fill all required fields.");
      setSubmitting(false);
      return;
    }
    const response = await fetch("/api/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setSubmitting(false);
    if (response.ok) {
      // Redirect to technical documents page
      window.location.href = "/technical-documents";
    } else {
      const msg = await response.text();
      alert("Failed to submit EUT details: " + msg);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">EUT Details</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {fieldsLeft.map((f) => (
            <div key={f}>
              <label className="text-sm text-gray-600">{f}</label>
              <input
                className="w-full mt-1 px-3 py-2 border rounded-lg"
                value={formData[f] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [f]: e.target.value })
                }
                required={["Name of EUT", "Quantity of EUT", "Manufacturer/Make & Address", "Model No.", "Serial No."].includes(f)}
              />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {fieldsRight.map((f) => (
            <div key={f}>
              <label className="text-sm text-gray-600">{f}</label>
              <input
                className="w-full mt-1 px-3 py-2 border rounded-lg"
                value={formData[f] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [f]: e.target.value })
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit & Next: Technical Documents"}
        </button>
      </div>
    </div>
  )
}

function EUTDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {typeof Header !== "undefined" && <Header />}

      <section className="container mx-auto px-6 py-12">
        <EUTDetails />
      </section>

      {typeof Footer !== "undefined" && <Footer />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <EUTDetailsPage />
);
