import React, { Fragment, useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = [];
    for (const [key, value] of Object.entries(formData)) {
      // Check for empty string or null for file inputs
      if (value === "" || value === null) {
        missingFields.push(key);
      }
    }

    if (missingFields.length > 0) {
      alert(
        "Please fill in all required fields: " + missingFields.join(", ")
      );
      return;
    }

    // All required fields are present, process the form data.
    console.log("Final Form Data:", formData);
    // For example, you could send the data to an API here.
  };

  return (
    <Fragment>
      <Header />
      {page === 1 && (
        <Page1 formData={formData} handleChange={handleChange} nextPage={() => setPage(2)} />
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
        />
      )}
    </Fragment>
  );
}
