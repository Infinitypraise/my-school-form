// App.js
import React, { Fragment, useState } from "react";
import { useForm } from '@formspree/react';
import Header from "./component/header";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";


export default function App() {
  // Initialize Formspree using your endpoint ID ("mldjgjbq")
  const [state, formspreeHandleSubmit] = useForm("mldjgjbq");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Student Details
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    photo: null, // file upload – see note below
    soo: "",
    nationality: "",
    // Page 2: Education History
    PSA: "",
    schoolAddress: "",
    enrollmentDate: "",
    graduationDate: "",
    // Page 3: Parent/Guardian Details
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

  // Our custom submission handler that uses the Formspree hook.
  // (For file uploads, note that file inputs cannot be set via hidden fields.
  // You may need a custom fetch using FormData if you must submit files.)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation: ensure no field is empty
    const missingFields = [];
    for (const [key, value] of Object.entries(formData)) {
      // For file input, value will be null if not provided.
      if (value === "" || value === null) {
        missingFields.push(key);
      }
    }
    if (missingFields.length > 0) {
      alert("Please fill in all required fields: " + missingFields.join(", "));
      return;
    }

    const enrichedData = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    // IMPORTANT:
    // To use the useForm hook, your inputs must be present on the page.
    // Since our multi‑page form only renders one page at a time, we “assemble”
    // all of the inputs on Page3 as hidden fields for data from Pages 1 & 2.
    // (The file input from Page1 cannot be added as a hidden field due to security.)
    //
    // Now we delegate the submission to Formspree’s handler.
    formspreeHandleSubmit(e);
  };

  // Optionally, if the submission succeeded, show a success message.
  if (state.succeeded) {
    return (
      <div className="submission-success">
        <Header />
        <h2>Submission Successful!</h2>
        <p>Thank you for your submission.</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      {page === 1 && (
        <Page1
          formData={formData}
          handleChange={handleChange}
          nextPage={() => setPage(2)}
        />
      )}
      {page === 2 && (
        <Page2
          formData={formData}
          handleChange={handleChange}
          prevPage={() => setPage(1)}
          nextPage={() => setPage(3)}
        />
      )}
      {page === 3 && (
        <Page3
          formData={formData}
          handleChange={handleChange}
          prevPage={() => setPage(2)}
          handleSubmit={handleSubmit}
          state={state}  // pass state to enable inline validation error display
        />
      )}
    </Fragment>
  );
}
