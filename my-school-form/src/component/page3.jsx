import React, { Fragment } from "react";

export default function Page3({formData, handleChange, prevPage, handleSubmit }) {
  return (
    <Fragment>
        <label htmlFor="GuardianName">Guardian's Full Name</label>
        <input
          type="text"
          id="GuardianName"
          name="GuardianName"
          value={formData.GuardianName}
          onChange={handleChange}
        />

        <label htmlFor="GuardianPhoneNo">Guardian's Phone Number</label>
        <input
          type="number"
          id="GuardianPhoneNo"
          name="GuardianPhoneNo"
          value={formData.GuardianPhoneNo}
          onChange={handleChange}
        />

        <label htmlFor="GuardianEmail">Guardian's Email Address</label>
        <input
          type="email"
          id="GuardianEmail"
          name="GuardianEmail"
          value={formData.GuardianEmail}
          onChange={handleChange}
        />

        <label htmlFor="GuardianOccupation">Guardian's Occupation</label>
        <input
          type="text"
          id="GuardianOccupation"
          name="GuardianOccupation"
          value={formData.GuardianOccupation}
          onChange={handleChange}
        />

        <br /><br />

        <label htmlFor="HomeAddress">Home Address</label>
        <input
          type="text"
          id="HomeAddress"
          name="HomeAddress"
          value={formData.HomeAddress}
          onChange={handleChange}
        />

        
          <button className="submit" type="submit">Submit</button>
      <div className="button">
        <button className="prev" type="button" onClick={prevPage}>
          Prev
        </button>
      </div>
      </Fragment>
  );
}
