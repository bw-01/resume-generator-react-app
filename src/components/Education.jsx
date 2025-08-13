export default function Education({ data, onChange, onSubmit, onEdit }) {
  const { school, studyTitle, studyDate, isEditing } = data;

  if (!isEditing) {
    // display mode
    return (
      <section>
        <h2>Education</h2>
        <p>
          <strong>{school}</strong>
        </p>
        <p>{studyTitle}</p>
        <p>{studyDate}</p>
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </section>
    );
  }

  // edit mode
  return (
    <section>
      <h2>Education</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(); 
        }}>
        <label>
          School
          <input
            type="text"
            value={school}
            onChange={(e) => onChange("school", e.target.value)}
            required
          />
        </label>

        <label>
          Study Course
          <input
            type="text"
            value={studyTitle}
            onChange={(e) => onChange("studyTitle", e.target.value)}
            required
          />
        </label>

        <label>
          Dates of Study
          <input
            type="text"
            value={studyDate}
            onChange={(e) => onChange("studyDate", e.target.value)}
            placeholder="e.g., 2021 – 2024"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
