import NavbarSpa from './NavbarSpa'

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarSpa />
      <div className="pt-16">{children}</div>
    </>
  )
}
