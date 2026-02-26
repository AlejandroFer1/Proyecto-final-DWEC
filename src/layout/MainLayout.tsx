import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-jjk-darker border-b border-jjk-bright-purple/30 p-4 sticky top-0 z-50 shadow-md shadow-jjk-purple/20">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <span className="text-jjk-crimson font-black text-3xl">呪</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-jjk-bright-purple to-jjk-purple-light text-glow">
              Proyecto Api Jujutsu Kaisen
            </span>
          </Link>

          <nav>
            <ul className="flex gap-6 text-sm font-medium tracking-wider uppercase">
              <li>
                <Link
                  to="/"
                  className="hover:text-jjk-bright-purple transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="hover:text-jjk-bright-purple transition-colors"
                >
                  Buscar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-jjk-darker border-t border-white/10 p-6 text-center text-white/50 text-xs">
        <p>Proyecto Api Jujutsu Kaisen.</p>
        <p className="mt-2">Datos proporcionados por la API de Jikan</p>
      </footer>
    </div>
  );
}
