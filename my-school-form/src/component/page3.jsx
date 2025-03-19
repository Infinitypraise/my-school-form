// Page3.js
import React from "react";
import { ValidationError } from '@formspree/react';

export default function Page3({ formData, handleChange, prevPage, handleSubmit, state }) {
  return (
    <div className="body">
      <div className="form">
        <h2>Parent/Guardian's Details</h2>
        <h3>Page 3 of 3</h3>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="firstName" value={formData.firstName} />
          <input type="hidden" name="middleName" value={formData.middleName} />
          <input type="hidden" name="lastName" value={formData.lastName} />
          <input type="hidden" name="dob" value={formData.dob} />
          <input type="hidden" name="gender" value={formData.gender} />
          <input type="hidden" name="soo" value={formData.soo} />
          <input type="hidden" name="nationality" value={formData.nationality} />
          <input type="hidden" name="PSA" value={formData.PSA} />
          <input type="hidden" name="schoolAddress" value={formData.schoolAddress} />
          <input type="hidden" name="enrollmentDate" value={formData.enrollmentDate} />
          <input type="hidden" name="graduationDate" value={formData.graduationDate} />
          <input type="hidden" name="submittedAt" value={new Date().toISOString()} />
          <label htmlFor="GuardianName">Guardian's Full Name</label>
          <input
            type="text"
            id="GuardianName"
            name="GuardianName"
            value={formData.GuardianName}
            onChange={handleChange}
          />
          <ValidationError prefix="GuardianName" field="GuardianName" errors={state.errors} />

          <label htmlFor="GuardianPhoneNo">Guardian's Phone Number</label>
          <input
            type="number"
            id="GuardianPhoneNo"
            name="GuardianPhoneNo"
            value={formData.GuardianPhoneNo}
            onChange={handleChange}
          />
          <ValidationError prefix="GuardianPhoneNo" field="GuardianPhoneNo" errors={state.errors} />

          <label htmlFor="GuardianEmail">Guardian's Email Address</label>
          <input
            type="email"
            id="GuardianEmail"
            name="GuardianEmail"
            value={formData.GuardianEmail}
            onChange={handleChange}
          />
          <ValidationError prefix="GuardianEmail" field="GuardianEmail" errors={state.errors} />

          <label htmlFor="GuardianOccupation">Guardian's Occupation</label>
          <input
            type="text"
            id="GuardianOccupation"
            name="GuardianOccupation"
            value={formData.GuardianOccupation}
            onChange={handleChange}
          />
          <ValidationError prefix="GuardianOccupation" field="GuardianOccupation" errors={state.errors} />

          <label htmlFor="HomeAddress">Home Address</label>
          <input
            type="text"
            id="HomeAddress"
            name="HomeAddress"
            value={formData.HomeAddress}
            onChange={handleChange}
          />
          <ValidationError prefix="HomeAddress" field="HomeAddress" errors={state.errors} />

          <button className="submit" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <div className="button">
          <button className="prev" type="button" onClick={prevPage}>
            Prev
          </button>
        </div>
      </div>
    </div>
  );
}
