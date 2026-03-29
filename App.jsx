import { motion } from "framer-motion";

export default function BlueBarnCoffee() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Andrews’ Favorite Coffee Stop
          </motion.h1>

          <p className="mt-5 text-base md:text-lg text-neutral-300">
            Fast drive-through. Premium ingredients. Drinks people drive miles for.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full text-base font-medium">
              View Menu
            </button>
            <button
              onClick={() =>
                window.open("https://www.google.com/maps/search/Blue+Barn+Coffee+Andrews+Texas")
              }
              className="border border-white px-6 py-3 rounded-full text-base hover:bg-white hover:text-black transition"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-8 text-center text-neutral-400 text-xs md:text-sm">
        Loved by locals • 5-star reviews • Fast drive-through
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-4 md:px-6">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl md:rounded-3xl"
        />
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-4 md:px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-16 text-center">
          What People Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {[
            "Best coffee in West Texas. Worth the drive every time.",
            "Perfect espresso. Smooth, balanced, never burnt.",
            "Fast service, amazing staff, unreal drinks."
          ].map((quote, i) => (
            <div key={i} className="border border-neutral-800 p-6 md:p-8 rounded-2xl md:rounded-3xl">
              <p className="text-neutral-300 leading-relaxed">
                “{quote}”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="px-4 md:px-6 py-20 md:py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Crafted for That First Sip Reaction
          </h2>

          <p className="text-neutral-300 mb-6">
            Every drink is designed to hit — bold flavor, perfect balance,
            and consistency you can count on.
          </p>

          <div className="space-y-2 text-neutral-400">
            <p>• Mighty Mustang</p>
            <p>• Frozen Hot Chocolate</p>
            <p>• #2 Latte</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          className="rounded-2xl md:rounded-3xl"
        />
      </section>

      {/* EXPERIENCE */}
      <section className="px-4 md:px-6 py-24 md:py-32 text-center bg-neutral-900">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Built for Speed. Known for Quality.
        </h2>

        <p className="max-w-xl mx-auto text-neutral-300">
          You shouldn’t have to choose between fast and good.
          Here, you get both — every single time.
        </p>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-28 md:py-36 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Your New Daily Stop
        </h2>

        <p className="text-neutral-400 mb-8">
          One visit and you’ll understand why people keep coming back.
        </p>

        <button
          onClick={() =>
            window.open("https://www.google.com/maps/search/Blue+Barn+Coffee+Andrews+Texas")
          }
          className="bg-white text-black px-8 py-4 rounded-full text-base md:text-lg"
        >
          Get Directions
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-neutral-500 text-xs">
        © {new Date().getFullYear()} Blue Barn Coffee — Andrews, Texas
      </footer>
    </div>
  );
}
