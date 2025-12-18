import React, { useState, useEffect } from "react";
import { createEquipment, getAllEquipment } from "./EquipmentService";

const steps = [
    "Product Details",
    "Technical Specification Documents",
    "Testing Requirements",
    "Testing Standards",
    "Lab selection and Review"
];

export default function EquipmentForm() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        name: "",
        manufacturer_address: "",
        model_number: "",
        serial_number: "",
        quantity: "",
        circuit_diagram: "",
        pcb_gerber_files: "",
        block_diagram: "",
        component_list: "",
        ratings_power_spec: "",
        firmware_details: "",
        test_types: "",
        selected_tests: "",
        selected_standards: "",
        selected_lab: "",
        supply_voltage: "",
        operating_frequency: "",
        current: "",
        weight_kg: "",
        length_mm: "",
        width_mm: "",
        height_mm: "",
        power_ports: "",
        signal_ports: "",
        software_name: "",
        software_version: "",
        industry_type: "",
        other_industry: "",
        preferred_testing_date: "",
        additional_notes: ""
    });
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getAllEquipment().then(setData);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEquipment({
                ...form,
                quantity: Number(form.quantity),
                weight_kg: Number(form.weight_kg),
                length_mm: Number(form.length_mm),
                width_mm: Number(form.width_mm),
                height_mm: Number(form.height_mm),
                operating_frequency: form.operating_frequency || null,
                software_name: form.software_name || null,
                software_version: form.software_version || null,
                other_industry: form.other_industry || null,
                preferred_testing_date: form.preferred_testing_date || null,
                additional_notes: form.additional_notes || null
            });
            setError("");
            setSuccess(true);
            setForm({
                name: "",
                manufacturer_address: "",
                model_number: "",
                serial_number: "",
                quantity: "",
                circuit_diagram: "",
                pcb_gerber_files: "",
                block_diagram: "",
                component_list: "",
                ratings_power_spec: "",
                firmware_details: "",
                test_types: "",
                selected_tests: "",
                selected_standards: "",
                selected_lab: "",
                supply_voltage: "",
                operating_frequency: "",
                current: "",
                weight_kg: "",
                length_mm: "",
                width_mm: "",
                height_mm: "",
                power_ports: "",
                signal_ports: "",
                software_name: "",
                software_version: "",
                industry_type: "",
                other_industry: "",
                preferred_testing_date: "",
                additional_notes: ""
            });
            setData(await getAllEquipment());
        } catch (err) {
            setError(JSON.stringify(err.detail || err));
        }
    };

    // Render each step
    function renderStep() {
        switch (step) {
            case 0:
                return (
                    <>
                        <h3>Product Details</h3>
                        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                        <input name="manufacturer_address" placeholder="Manufacturer Address" value={form.manufacturer_address} onChange={handleChange} required />
                        <input name="model_number" placeholder="Model Number" value={form.model_number} onChange={handleChange} required />
                        <input name="serial_number" placeholder="Serial Number" value={form.serial_number} onChange={handleChange} required />
                        <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
                    </>
                );
            case 1:
                return (
                    <>
                        <h3>Technical Specification Documents</h3>
                        <input name="circuit_diagram" placeholder="Circuit Diagram (filename)" value={form.circuit_diagram} onChange={handleChange} />
                        <input name="pcb_gerber_files" placeholder="PCB Gerber Files (filename)" value={form.pcb_gerber_files} onChange={handleChange} />
                        <input name="block_diagram" placeholder="Block Diagram (filename)" value={form.block_diagram} onChange={handleChange} />
                        <input name="component_list" placeholder="Component List/BOM (filename)" value={form.component_list} onChange={handleChange} />
                        <input name="ratings_power_spec" placeholder="Ratings & Power Specs (filename)" value={form.ratings_power_spec} onChange={handleChange} />
                        <input name="firmware_details" placeholder="Firmware Details (filename)" value={form.firmware_details} onChange={handleChange} />
                    </>
                );
            case 2:
                return (
                    <>
                        <h3>Testing Requirements</h3>
                        <input name="test_types" placeholder="Test Types (comma separated)" value={form.test_types} onChange={handleChange} />
                        <textarea name="selected_tests" placeholder="Selected Tests (comma separated)" value={form.selected_tests} onChange={handleChange} />
                    </>
                );
            case 3:
                return (
                    <>
                        <h3>Testing Standards</h3>
                        <textarea name="selected_standards" placeholder="Selected Standards (comma separated)" value={form.selected_standards} onChange={handleChange} />
                    </>
                );
            case 4:
                return (
                    <>
                        <h3>Lab Selection and Review</h3>
                        <input name="selected_lab" placeholder="Selected Lab" value={form.selected_lab} onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </>
                );
            default:
                return null;
        }
    }

    if (success) {
        return (
            <div>
                <h2>Submission Successful</h2>
                <p>Your testings are now in expert hands.</p>
                <button onClick={() => setSuccess(false)}>Submit Another</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{steps[step]}</h2>
            {error && <div style={{color: "red"}}>{error}</div>}
            {renderStep()}
            <div style={{marginTop: 16}}>
                {step > 0 && <button type="button" onClick={prevStep}>Previous</button>}
                {step < steps.length - 1 && <button type="button" onClick={nextStep}>Next</button>}
            </div>
        </form>
    );
}