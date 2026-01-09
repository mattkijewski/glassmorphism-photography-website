export default function Home() {
  return (
    <main>
      <h1>Glassmorphism Photography Website</h1>
      <p>API endpoints are ready for content management!</p>
      <div>
        <h2>Available API Endpoints:</h2>
        <ul>
          <li>GET /api/content - Get all content</li>
          <li>POST /api/content - Create new content</li>
          <li>GET /api/content/[id] - Get content by ID</li>
          <li>PUT /api/content/[id] - Update content</li>
          <li>DELETE /api/content/[id] - Delete content</li>
          <li>GET /api/content/slug/[slug] - Get content by slug</li>
        </ul>
      </div>
    </main>
  )
}