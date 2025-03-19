import React, { Fragment } from "react";
import uploadicon from "./upload.svg"

export default function Page1({formData, handleChange, nextPage }) {
  return (
    <Fragment>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="middleName">Middle Name</label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="photo">Photo</label>
        <label htmlFor="photo" className="pIcon"><img  src={uploadicon} /></label>

        <input
            className="photo"
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
        />

        {formData.photo && (
          <div>
            <p>Selected File: {formData.photo.name}</p>
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Preview"
              width="100"
            />
          </div>
        )}

        <label htmlFor="soo">State of Origin</label>
        <select
          id="soo"
          name="soo"
          value={formData.soo}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
          <option value="Abuja">Abuja</option>
        </select>
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      <div className="button">
        <button className="next" type="button" onClick={nextPage}>
          Next
        </button>
      </div>
      </Fragment>
  );
}
