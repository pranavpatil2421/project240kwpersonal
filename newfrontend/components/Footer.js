function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-blue-900 text-white py-6 mt-12 text-center">
      <div className="mb-2">
        &copy; {currentYear} Millennium Techlink. All rights reserved.
      </div>
      <div className="flex justify-center gap-4 text-lg mb-2">
        <a href="#" title="LinkedIn" className="hover:text-blue-400">🔗</a>
        <a href="#" title="Twitter" className="hover:text-blue-400">🐦</a>
        <a href="#" title="Facebook" className="hover:text-blue-400">📘</a>
      </div>
      <div className="flex justify-center gap-4 text-xs">
        <a href="/help" className="hover:text-blue-400">Help</a>
        <a href="/privacy" className="hover:text-blue-400">Privacy</a>
        <a href="/terms" className="hover:text-blue-400">Terms</a>
      </div>
    </footer>
  );
}