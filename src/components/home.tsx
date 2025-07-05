import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faMoneyBills, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 min-h-screen flex flex-col">
    <section className="relative z-10 flex flex-col justify-center items-center w-full  px-6 py-24 mx-auto">
      <div className="absolute inset-0">
        <img
          src="src/assets/favicon.png"
          alt="Medical background"
          className="w-full h-full object-cover opacity-80 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-start max-w-3xl px-6 py-24">
        <span className="uppercase tracking-widest text-blue-500 font-semibold text-sm mb-2 dark:text-blue-300">
          Caring for Life
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white leading-tight mb-6">
          Leading the Way <br /> in Medical Excellence
        </h1>
        <button className="rounded-full bg-blue-200 text-blue-900 dark:bg-blue-700 dark:text-white px-6 py-2 font-semibold mb-10 shadow-md hover:bg-blue-300 dark:hover:bg-blue-600 transition-all">
          Our Services
        </button>

      </div>
      <div className="md:absolute bottom-0 translate-y-1/2 w-full px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="bg-blue-900 text-white dark:bg-blue-800 rounded-lg p-5 flex items-center gap-2 shadow-lg">
            <span className="text-3xl"><FontAwesomeIcon icon={faCalendarDays} /></span>
            <span className="font-semibold">Book an Appointment</span>
          </div>
          <div className="bg-blue-100 text-blue-900 dark:bg-blue-700 dark:text-white rounded-lg p-5 flex items-center gap-2 shadow-lg">
            <span className="text-3xl"><FontAwesomeIcon icon={faUsers} /></span>
            <span className="font-semibold">Book an Appointment</span>
          </div>
          <div className="bg-blue-400 text-white dark:bg-blue-600 dark:text-white rounded-lg p-5 flex items-center gap-2 shadow-lg">
            <span className="text-3xl"><FontAwesomeIcon icon={faMoneyBills} /></span>
            <span className="font-semibold">Book an Appointment</span>
          </div>
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