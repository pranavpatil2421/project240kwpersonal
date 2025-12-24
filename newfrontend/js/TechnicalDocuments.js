function TechnicalDocuments() {

  const [uploadedDocs, setUploadedDocs] = React.useState({});

  const documents = [
    { id: "circuit", name: "Circuit Diagram", icon: LayersIcon },
    { id: "pcb", name: "PCB Gerber Files", icon: CpuIcon },
    { id: "block", name: "Block Diagram", icon: FileTextIcon },
    { id: "bom", name: "Component List / BOM", icon: ListIcon },
    { id: "power", name: "Ratings & Power Specs", icon: ZapIcon },
    { id: "firmware", name: "Firmware Details", icon: CodeIcon },
  ];

  const handleFileUpload = (docId, file) => {
    if (!file) return;

    setUploadedDocs(prev => ({
      ...prev,
      [docId]: {
        file,
        name: file.name,
        size: file.size,
        uploadedAt: new Date().toISOString()
      }
    }));
  };

  const handleRemove = (docId) => {
    const updated = { ...uploadedDocs };
    delete updated[docId];
    setUploadedDocs(updated);
  };


  const handleSubmit = async () => {
    const formData = new FormData();

    Object.keys(uploadedDocs).forEach(key => {
      formData.append(key, uploadedDocs[key].file);
    });

    const res = await fetch("/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.message);

    // In TechnicalDocuments.js, after successful upload:
    window.location.href = "/paragpage";
  };


  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">

      <h1 className="text-3xl font-bold text-center">
        Technical Specification Documents
      </h1>

      {documents.map(doc => {
        const Icon = doc.icon;
        const uploaded = uploadedDocs[doc.id];

        return (
          <div key={doc.id} className="flex justify-between items-center p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="text-2xl"><Icon /></div>
              <div>
                <p className="font-semibold">{doc.name}</p>
                {uploaded && (
                  <p className="text-sm text-gray-600">
                    <CheckIcon /> {uploaded.name}
                  </p>
                )}
              </div>
            </div>

            {uploaded ? (
              <button onClick={() => handleRemove(doc.id)} className="text-red-600">
                <DeleteIcon />
              </button>
            ) : (
              <label className="cursor-pointer bg-gray-100 px-4 py-2 rounded-lg">
                <UploadIcon /> Upload
                <input
                  type="file"
                  className="hidden"
                  onChange={e => handleFileUpload(doc.id, e.target.files[0])}
                />
              </label>
            )}
          </div>
        );
      })}

      <div className="bg-blue-50 p-4 rounded-lg text-sm">
        <p className="font-semibold">Document Guidelines</p>
        <ul className="list-disc list-inside">
          <li>Formats: PDF, PNG, JPG, ZIP</li>
          <li>Max size: 50MB</li>
        </ul>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Upload Documents
        </button>

        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
          onClick={() => window.location.href = "/paragpage"}
        >
          Next Page →
        </button>
      </div>
    </div>
  );
}

function LayersIcon() { return <span role="img" aria-label="layers">📚</span>; }
function CpuIcon() { return <span role="img" aria-label="cpu">🖥️</span>; }
function UploadIcon() { return <span role="img" aria-label="upload">⬆️</span>; }
function FileTextIcon() { return <span role="img" aria-label="file">📄</span>; }
function ListIcon() { return <span role="img" aria-label="list">📋</span>; }
function ZapIcon() { return <span role="img" aria-label="zap">⚡</span>; }
function CodeIcon() { return <span role="img" aria-label="code">💾</span>; }
function CheckIcon() { return <span role="img" aria-label="check">✅</span>; }
function DeleteIcon() { return <span role="img" aria-label="delete">🗑️</span>; }

ReactDOM.createRoot(document.getElementById("root")).render(
  <TechnicalDocuments />
);