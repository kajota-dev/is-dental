import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"
export default function ClinicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}
