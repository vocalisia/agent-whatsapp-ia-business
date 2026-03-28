const stats = [
  { value: "-60%", label: "Coûts de gestion client" },
  { value: "+40%", label: "Productivité des équipes" },
  { value: "+30%", label: "Taux de réponse" },
  { value: "24/7", label: "Disponibilité" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-wa/5 border-y border-wa/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold text-wa mb-2">{s.value}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
