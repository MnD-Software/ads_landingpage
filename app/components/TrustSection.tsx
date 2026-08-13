const items = [
  { title: "Cakes for every occasion", text: "From birthdays to weddings and everyday celebrations." },
  { title: "13 Cake City branches", text: "Choose the Cake City location that works for you." },
  { title: "Direct WhatsApp ordering", text: "Start a conversation with the branch you select." },
  { title: "Custom cake options", text: "Share your celebration idea directly with the team." },
];

export function TrustSection() {
  return <section className="trust"><div className="trustInner"><span>MADE FOR LIFE&apos;S SWEETEST MOMENTS</span><h2>Your nearest Cake City is<br />just a message away.</h2><div className="trustGrid">{items.map(({ title, text }) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
