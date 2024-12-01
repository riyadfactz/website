interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-emerald-200/80 hover:text-white font-medium transition-colors"
    >
      {children}
    </a>
  );
}