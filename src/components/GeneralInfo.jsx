export default function GeneralInfo({ data, onChange, onSubmit, onEdit }) {
  const { name, email, phone, isEditing } = data;

  if (!isEditing) {
    // display mode
    return (
      <section>
        <h2>General Information</h2>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{email}</p>
        <p>{phone}</p>
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </section>
    );
  }

  // edit mode
  return (
    <section>
      <h2>General Information</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevent normal page refresh
          onSubmit(); // call the handler in App to flip to display mode
        }}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => onChange("name", e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
        </label>

        <label>
          Phone
          <input type="tel" value={phone} onChange={(e) => onChange("phone", e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
