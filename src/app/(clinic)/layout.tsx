import Navbar from "@/components/layout/Navbar"

export default function ClinicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
