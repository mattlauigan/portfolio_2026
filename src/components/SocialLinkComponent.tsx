export const SocialLinkComponent = ({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) => {
  return (


    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
    >
      <span className="w-9 h-9 rounded-xl border border-slate-700 group-hover:border-blue-500/50 bg-slate-800/50 group-hover:bg-blue-500/10 flex items-center justify-center transition-all duration-200">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm font-medium hidden sm:block link-underline">{label}</span>
    </a>
  );


}