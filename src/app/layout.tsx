export const metadata = {
  title: 'Glassmorphism Photography',
  description: 'Modern photography website with glassmorphism design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}