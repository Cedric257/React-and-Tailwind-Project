import NavBars from "./navbars";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 min-h-screen flex flex-col">
      <NavBars />
      <section className="relative bg-white dark:bg-blue-900 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-white">
            Leading the Way in Medical Excellence
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Découvrez des soins médicaux de qualité avec notre équipe d'experts.
          </p>
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Nos Services</button>
            <button className="bg-white border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-100 transition">Prendre rendez-vous</button>
          </div>
          <div className="w-full flex justify-center">
            <img src="/doctor-hero.jpg" alt="Médecin" className="h-56 md:h-80 object-cover rounded shadow-lg border border-blue-100 dark:border-blue-900" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 dark:bg-blue-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-blue-900 shadow rounded p-6 text-center">
            <div className="text-blue-700 dark:text-blue-300 text-3xl mb-2">👨‍⚕️</div>
            <h3 className="font-bold text-lg mb-1 text-blue-900 dark:text-white">Équipe d'experts</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Des médecins qualifiés et expérimentés à votre service.</p>
          </div>
          <div className="bg-white dark:bg-blue-900 shadow rounded p-6 text-center">
            <div className="text-blue-700 dark:text-blue-300 text-3xl mb-2">💊</div>
            <h3 className="font-bold text-lg mb-1 text-blue-900 dark:text-white">Soins avancés</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Technologie et traitements de pointe pour tous.</p>
          </div>
          <div className="bg-white dark:bg-blue-900 shadow rounded p-6 text-center">
            <div className="text-blue-700 dark:text-blue-300 text-3xl mb-2">🏥</div>
            <h3 className="font-bold text-lg mb-1 text-blue-900 dark:text-white">Installations modernes</h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm">Un environnement confortable et sécurisé.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white dark:bg-blue-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-white">Nos Spécialités</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Cardiologie", "Pédiatrie", "Neurologie", "Dermatologie",
              "Orthopédie", "Ophtalmologie", "Gynécologie", "Psychiatrie"
            ].map(s => (
              <div key={s} className="bg-blue-50 dark:bg-blue-800 rounded p-4 flex flex-col items-center">
                <div className="text-2xl text-blue-700 dark:text-blue-200 mb-2">🩺</div>
                <div className="font-medium text-blue-900 dark:text-white">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 dark:bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-white">Rencontrez nos médecins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white dark:bg-blue-900 rounded shadow p-6 flex flex-col items-center">
                <img src={`/doctor${i}.jpg`} alt={`Docteur ${i}`} className="h-32 w-32 object-cover rounded-full mb-4 border-4 border-blue-100 dark:border-blue-800" />
                <div className="font-bold text-blue-900 dark:text-white mb-1">Dr. Nom Prénom</div>
                <div className="text-blue-700 dark:text-blue-300 mb-2">Spécialité</div>
                <div className="flex gap-2 text-yellow-400 mb-2">★★★★★</div>
                <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 transition text-sm">Voir profil</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-lg">MEDICAL</div>
            <p className="text-sm mt-2">Clinique d'excellence à votre service.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">Nos Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm">Adresse: 123 Avenue Santé, Paris</p>
            <p className="text-sm">Téléphone: (+33) 1 23 45 67 89</p>
            <p className="text-sm">Email: info@medical.com</p>
          </div>
        </div>
        <div className="text-center text-xs text-blue-200 mt-6">&copy; {new Date().getFullYear()} MEDICAL. Tous droits réservés.</div>
      </footer>
    </div>
  );
}