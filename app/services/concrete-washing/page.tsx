import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import ConcreteWashing from "@/components/Services Pages/concrete-washing";





export default function Services() {

    return(

        <div className="flex flex-col min-h-screen">

        <Navbar />
            
          <main className="flex-3">
        
                <section className="w-full bg-gray-100 dark:bg-gray-800">
        

        <ConcreteWashing />
          
                </section>
        
        
             
              <section className="w-full">
        
        <Footer />
        
              </section>
        
        
        
        
        
        
        
            </main>
        
        
          </div>

    )
}