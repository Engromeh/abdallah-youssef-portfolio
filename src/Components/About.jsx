export default function About() {
  return (
    <section id="about" className="bg-softBeige min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* ================= Left Side (Text) ================= */}
        <div>
          <p className="text-warmGray mb-4">• About</p>

          <h2 className="text-5xl font-extrabold text-richBlack leading-tight mb-6">
            Hello, i'm <br />
            <span className="text-terracotta">Abdallah Youssef</span>
          </h2>

          <ul className="text-richBlack space-y-2 mb-6">
            <li>• Light-Driven Photographer</li>
            <li>• Fashion-Prouducts-Food</li>
          </ul>

          <p className="text-warmGray leading-relaxed mb-8">
            Specialize-in shaping light to create Bold, cinematic imagery
            <br />
             across
            fashion, and food photography.
            <br/>
             Available for commercial projects
          </p>

          <button className="bg-terracotta text-white px-8 py-3 rounded-xl hover:opacity-90 transition shadow-sm">
            Contact Me
          </button>
        </div>

        {/* ================= Right Side (Image) ================= */}
        <div className="relative">
          {/* خط ذهبي بسيط تحت الصورة */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-mutedGold rounded-2xl"></div>

          <div className="bg-lightSand p-4 rounded-2xl shadow-md">
            <img
              src="{me}"
              alt="Abdallah Youssef"
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* خط ذهبي بسيط تحت الصورة */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-mutedGold rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
