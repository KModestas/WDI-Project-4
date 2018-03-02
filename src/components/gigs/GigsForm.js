import React from 'react';
import ReactFilestack from 'filestack-react';

const GigsForm = ({ handleChange, handleSubmit, gig, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={gig.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <br />
          <ReactFilestack
            apikey="AybK9jSwRvi93ESrCzM0wz"
            buttonText="Upload a photo"
            buttonClass="main-button"
            onSuccess={handleImageUpload}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="title"
            name="title"
            value={gig.location}
            onChange={handleChange}
          />
          {errors.location && <p>{errors.location}</p>}
        </div>

        <div>
          <button disabled={formIsInvalid} className="save-button">Save</button>
        </div>
      </form>
      { gig.image && <div>
        <h2>Image Preview</h2>
        <img src={gig.image} />
      </div> }
      {errors.category && <p>{errors.category}</p>}
    </div>

  );
};

export default GigsForm;
