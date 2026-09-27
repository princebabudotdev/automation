const App = () => {
  return (
    <main className="min-h-screen bg-[#080707] px-5 text-white">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-6">

        <div className="flex items-center gap-3">
          <div className="
            flex h-9 w-9 items-center justify-center
            rounded-lg bg-red-800
            text-lg font-bold
          ">
            G
          </div>

          <span className="text-sm font-semibold">
            GradeBuilds
          </span>
        </div>

        <span className="
          rounded-full border border-red-900/60
          bg-red-950/30 px-3 py-1.5
          text-[10px] font-medium text-red-400
        ">
          PRIVATE BETA
        </span>

      </nav>

      {/* Hero */}
      <section className="
        mx-auto flex min-h-[calc(100vh-88px)]
        max-w-3xl flex-col items-center
        justify-center text-center
      ">

        {/* Status */}
        <div className="
          mb-7 flex items-center gap-2
          rounded-full border border-[#292124]
          bg-[#100d0e]
          px-3 py-1.5
          text-[11px] text-neutral-400
        ">
          <span className="
            h-1.5 w-1.5 rounded-full
            bg-red-500
            shadow-[0_0_10px_rgba(239,68,68,0.5)]
          " />

          Something new is coming
        </div>

        {/* Heading */}
        <h1 className="
          max-w-2xl
          text-5xl font-semibold
          leading-[1.05]
          tracking-[-0.04em]
          sm:text-6xl
        ">
          We're launching
          <span className="block text-red-500">
            soon.
          </span>
        </h1>

        {/* Description */}
        <p className="
          mt-6 max-w-xl
          text-sm leading-6
          text-neutral-500
          sm:text-base
        ">
          GradeBuilds is building a new way to learn,
          practice, prepare for interviews, and grow
          your professional skills.
        </p>

        {/* Launch box */}
        <div className="
          mt-10 flex items-center gap-4
          rounded-xl
          border border-[#292124]
          bg-[#100d0e]
          px-5 py-4
        ">

          <div className="
            flex h-9 w-9 items-center justify-center
            rounded-lg bg-[#3b1518]
            text-red-400
          ">
            →
          </div>

          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-neutral-600">
              Launch
            </p>

            <p className="mt-0.5 text-sm font-medium">
              Coming soon
            </p>
          </div>

        </div>

        {/* CTA */}
        <button className="
          mt-8 rounded-lg
          bg-red-800
          px-6 py-3
          text-xs font-semibold
          text-white
          transition
          hover:bg-red-700
          active:scale-[0.98]
        ">
          Join the Waitlist
        </button>

        {/* Footer */}
        <p className="
          mt-12 text-[10px]
          text-neutral-700
        ">
          Learn · Practice · Improve · Grow
        </p>

      </section>

    </main>
  );
};

export default App;