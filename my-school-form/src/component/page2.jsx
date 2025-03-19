import React, { Fragment } from "react";

export default function Page2({formData, handleChange, prevPage, nextPage }) {
  return (
    <Fragment>
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
      <div className="button">
        <button className="prev" type="button" onClick={prevPage}>
          Prev
        </button>
        <button className="next" type="button" onClick={nextPage}>
          Next
        </button>
      </div>
      </Fragment>
  );
}
