import { Route, Routes } from 'react-router-dom';
import Header from "../components/header";
import CustomerHome from './home/customerHome';
import Vehicles from './home/vehicles';
import HolidayPlan from './home/holidayPlan';
import ContactUs from './home/contactUs';
import Quote from './home/quote';
import VehicleBook from './home/vehicleBook';

export default function HomePage(){
    return(
        <div>
            <Header/>
            <div className='w-full h-[calc(100vh-100px)]'>
              <Routes >
                <Route path="/" element={<CustomerHome/>}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
                <Route path="/holiday" element={<HolidayPlan/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/quote" element={<Quote/>}/>
                <Route path="/vehiclebook" element={<VehicleBook/>}/>
              </Routes>
              </div>
        </div>
    )
}