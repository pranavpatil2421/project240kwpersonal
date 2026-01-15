function Header() {
  return (
    <header className="w-full bg-blue-700 text-white py-4 px-6 flex justify-between items-center shadow">
      <div className="font-bold text-xl flex items-center gap-2">
        {/* If you want to use a logo image, uncomment below and place logo in /static/assets/ */}
        <img src="/static/assets/techlink-logo.svg" alt="Techlink Logo" className="h-8 w-auto" />
        Millennium Techlink
      </div>
      <nav className="flex gap-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/pricing" className="hover:underline">Pricing</a>
        <a href="/blog" className="hover:underline">Blog</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <div className="hidden md:flex gap-2">
        <a href="/customer/dashboard" className="px-3 py-2 border border-white rounded hover:bg-white hover:text-blue-700 transition">Customer Portal</a>
        <a href="/lab/portal" className="px-3 py-2 border border-purple-200 text-purple-200 rounded hover:bg-purple-200 hover:text-blue-700 transition">Lab Portal</a>
        <a href="/login" className="px-3 py-2 border border-white rounded hover:bg-white hover:text-blue-700 transition">Login</a>
        <a href="/signup" className="px-3 py-2 bg-white text-blue-700 rounded hover:bg-blue-100 transition">Sign Up</a>
      </div>
    </header>
  );
}