export default function Experience({ data, onChange, onSubmit, onEdit }) {
  const { company, position, responsibilities, from, to, isEditing } = data;

  if (!isEditing) {
    // display mode
    return (
      <section>
        <h2>Experience</h2>
        <p>
          <strong>{company}</strong> — {position}
        </p>
        {responsibilities && <p>{responsibilities}</p>}
        <p>
          {from} {from && (to ? " — " : " ")}
          {to}
        </p>
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </section>
    );
  }

  // edit mode
  return (
    <section>
      <h2>Experience</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        <label>
          Company
          <input
            type="text"
            value={company}
            onChange={(e) => onChange("company", e.target.value)}
            required
          />
        </label>

        <label>
          Position Title
          <input
            type="text"
            value={position}
            onChange={(e) => onChange("position", e.target.value)}
            required
          />
        </label>

        <label>
          Main Responsibilities
          <textarea
            rows={4}
            value={responsibilities}
            onChange={(e) => onChange("responsibilities", e.target.value)}
            placeholder="e.g., Led incident response; automated reporting; improved SLA performance"
          />
        </label>

        <div className="row">
          <label>
            From
            <input
              type="text"
              value={from}
              onChange={(e) => onChange("from", e.target.value)}
              placeholder="Jan 2021"
            />
          </label>
          <label>
            To
            <input
              type="text"
              value={to}
              onChange={(e) => onChange("to", e.target.value)}
              placeholder="Present"
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
