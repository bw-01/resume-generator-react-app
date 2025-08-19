export default function Preview({ general, education, experience }) {
  return (
    <aside className="preview" aria-label="CV preview">
      <header className="section">
        <div className="heading">{general.name || "Your Name"}</div>
        {general.email && <div className="muted">{general.email}</div>}
        {general.phone && <div className="muted">{general.phone}</div>}
      </header>

      <section className="section">
        <h2>Education</h2>
        {education.school || education.studyTitle || education.studyDate ? (
          <>
            <div>
              <strong>{education.school}</strong>
            </div>
            <div>{education.studyTitle}</div>
            <div className="muted">{education.studyDate}</div>
          </>
        ) : (
          <div className="muted">Add your education details…</div>
        )}
      </section>

      <section className="section">
        <h2>Experience</h2>
        {experience.company ||
        experience.position ||
        experience.from ||
        experience.to ||
        experience.responsibilities ? (
          <>
            <div>
              <strong>{experience.company}</strong> — {experience.position}
            </div>
            <div className="muted">
              {[experience.from, experience.to].filter(Boolean).join(" — ")}
            </div>
            {experience.responsibilities && <p>{experience.responsibilities}</p>}
          </>
        ) : (
          <div className="muted">Add your work experience…</div>
        )}
      </section>
    </aside>
  );
}
