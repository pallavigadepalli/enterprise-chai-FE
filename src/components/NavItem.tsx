interface NavItemProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}
export default function NavItem({ href, isActive, children }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className={`block px-8 py-4 text-lg font-normal rounded ${isActive ? 'bg-primary text-white' : 'bg-slate-50'}`}
      >
        {children}
      </a>
    </li>
  )
}
