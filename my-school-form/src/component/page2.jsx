import React from "react";

export default function Page2({ formData, handleChange, prevPage, nextPage }) {
  return (
    <div className="body">
    <div className="form">
      <h2>Education History</h2>
      <h3>Page 2 of 3</h3>
      <form>
        <label htmlFor="PSA">Primary School Attended</label>
        <input
          type="text"
          id="PSA"
          name="PSA"
          value={formData.PSA}
          onChange={handleChange}
        />

        <label htmlFor="schoolAddress">School Address</label>
        <input
          type="text"
          id="schoolAddress"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
        />

        <label htmlFor="enrollmentDate">Enrollment Date</label>
        <input
          type="date"
          id="enrollmentDate"
          name="enrollmentDate"
          value={formData.enrollmentDate}
          onChange={handleChange}
        />

        <label htmlFor="graduationDate">Graduation Date</label>
        <input
          type="date"
          id="graduationDate"
          name="graduationDate"
          value={formData.graduationDate}
          onChange={handleChange}
        />
      </form>
      <div className="button">
        <button className="prev" type="button" onClick={prevPage}>
          Prev
        </button>
        <button className="next" type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
