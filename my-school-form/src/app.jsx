import React, { Fragment, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "./component/header";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";

export default function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Student Details
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    photo: null,
    soo: "",
    nationality: "",
    // Page 2: Education History
    PSA: "",
    schoolAddress: "",
    enrollmentDate: "",
    graduationDate: "",
    // Page 3: Parent Details
    GuardianName: "",
    GuardianPhoneNo: "",
    GuardianEmail: "",
    GuardianOccupation: "",
    HomeAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate all fields
    const missingFields = [];
    for (const [key, value] of Object.entries(formData)) {
      if (value === "" || value === null) {
        missingFields.push(key);
      }
    }
    if (missingFields.length > 0) {
      alert("Please fill in all required fields: " + missingFields.join(", "));
      return;
    }
  
    // Build submission data
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "photo") return;
      if (formData[key] !== null) {
        submissionData.append(key, formData[key]);
      }
    });
  
    // IMPORTANT: Append an "email" field (Formspree expects this)
    submissionData.append("email", formData.GuardianEmail);
    // Optional: Log the FormData entries for debugging
    console.log("Submitting data:", [...submissionData.entries()]);
  
    try {
      const response = await fetch("https://formspree.io/f/mldjgjbq", {
        method: "POST", // Ensure POST method is used
        headers: {
          // "Content-Type" is NOT set manually because FormData sets it automatically.
          "Accept": "application/json",
        },
        body: submissionData,
      });
  
      const data = await response.json();
      console.log("Response data:", data);
      console.log("Response status:", response.status);
  
      if (response.ok) {
        alert("Form submission successful! Thank you.");
      } else {
        alert("There was a problem submitting your form: " + (data.error || "Please try again later."));
      }
    } catch (error) {
      alert("An error occurred during submission. Please try again. " + error.message);
    }
  };
  
  function determineH1() {
    if (page ===1) {
      return "Student's Details"
    } else if (page ===2) {
      return "Education History"
    } else {
      return "Parent/Guardian's Detail"
    }
    
  }
  
  

  return (
    <Fragment>
      <Header />
      <div className="body">
    <div className="form">
      <h2>{determineH1()}</h2>
      <h3>{page} of 3</h3>
      <form onSubmit={handleSubmit} method="POST">
      {page === 1 && (
        <Page1 
        determineH1={determineH1}
        page={page}
        formData={formData}
        handleChange={handleChange}
        nextPage={() => setPage(2)} />
      )}
      {page === 2 && (
        <Page2
          page={page}
          formData={formData}
          handleChange={handleChange}
          prevPage={() => setPage(1)}
          nextPage={() => setPage(3)}
        />
      )}
      {page === 3 && (
        <Page3
          page={page}
          formData={formData}
          handleChange={handleChange}
          prevPage={() => setPage(2)}
          handleSubmit={handleSubmit}
        />
      )}
      </form>
      </div>
      </div>
    </Fragment>
  );
}
