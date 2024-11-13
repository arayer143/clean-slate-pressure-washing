import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import GutterCleaning from "@/components/Services Pages/gutter-cleaning";





export default function Services() {

    return(

        <div className="flex flex-col min-h-screen">

        <Navbar />
            
          <main className="flex-3">
        
                <section className="w-full bg-gray-100 dark:bg-gray-800">
        
<GutterCleaning />
        
          
                </section>
        
        
             
              <section className="w-full">
        
        <Footer />
        
              </section>
        
        
        
        
        
        
        
            </main>
        
        
          </div>

    )
}