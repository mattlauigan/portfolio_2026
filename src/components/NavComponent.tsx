
type navComponentType = {
  scrollTo: (section: string) => void
  scrolled: boolean
  activeSection: string
}


export const NavComponenet = ({ scrollTo, scrolled, activeSection }: navComponentType) => {

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-display font-bold text-xl tracking-tight"
        >
          <span className="text-gradient">RL</span>
          <span className="text-slate-300 ml-1 font-light text-base hidden sm:inline">Raymart Lauigan</span>
        </button>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === item.id
                ? 'text-white bg-blue-500/15 border border-blue-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}