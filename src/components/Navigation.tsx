interface NavigationProps {
  children: React.ReactNode;
}
export default function Navigation({ children }: NavigationProps) {
  return (
    <nav className="flex">
      <ul className="flex space-x-6">
        {children}
      </ul>
    </nav>
  )
}