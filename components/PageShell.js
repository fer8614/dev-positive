const PageShell = ({ eyebrow, title, description, aside, children }) => {
  const intro = (
    <header className={aside ? "min-w-0" : "mb-10 max-w-3xl sm:mb-12"}>
      {eyebrow && <p className="site-eyebrow">{eyebrow}</p>}
      <h1 id="page-heading" className="site-title">{title}</h1>
      {description && <p className="site-description">{description}</p>}
    </header>
  );

  return (
    <section className="site-page" aria-labelledby="page-heading">
      {aside ? (
        <div className="mb-10 grid items-center gap-8 sm:mb-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          {intro}
          {aside}
        </div>
      ) : intro}
      {children}
    </section>
  );
};

export default PageShell;
