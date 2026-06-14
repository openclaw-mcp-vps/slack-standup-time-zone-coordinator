import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Standup Sync — Async standups across global time zones',
  description: 'Slack bot that collects standup responses from team members in their local time zones and compiles them into digestible summaries for each region.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4d145217-a215-4b3a-aadf-8316ac446cdd"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
