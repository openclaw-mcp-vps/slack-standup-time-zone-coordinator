export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For distributed engineering teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Coordinate async standups<br />
          <span className="text-[#58a6ff]">across every time zone</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A Slack bot that pings each teammate at their local standup time, collects responses via Block Kit forms, and compiles regional summaries so your whole team stays in sync — without a single 6am call.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get started — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant Slack install.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🌍', title: 'Time-zone aware', body: 'Each team member gets pinged at their configured local standup window.' },
            { icon: '📋', title: 'Block Kit forms', body: 'Interactive Slack forms make submitting updates fast and consistent.' },
            { icon: '📊', title: 'Regional digests', body: 'Auto-compiled summaries grouped by region land in your chosen channel.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Per workspace. Unlimited team members.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited team members',
              'Per-user time zone config',
              'Block Kit standup forms',
              'Daily regional digest',
              'Slack Events API integration',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the bot know each person\'s time zone?',
              a: 'During onboarding, each team member sets their time zone via a simple Slack command. Managers can also bulk-configure zones from the web dashboard.',
            },
            {
              q: 'Where do the standup summaries get posted?',
              a: 'You choose a Slack channel per region during setup. The bot posts a compiled digest there every day after the last member in that region submits.',
            },
            {
              q: 'Can I customize the standup questions?',
              a: 'Yes. The web dashboard lets you edit the Block Kit form questions for your workspace — add, remove, or reorder them any time.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        &copy; {new Date().getFullYear()} Standup Sync. All rights reserved.
      </footer>
    </main>
  )
}
