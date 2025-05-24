import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/form";


export default function Contact () {


    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-15 lg:gap-5 h-[100%] bg-white p-8 text-[var(--navy-blue)] mb-50">      
                <Form/>
            </div>
            <Footer/>
        </div>
    )
}