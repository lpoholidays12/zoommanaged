import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Visa from './components/Visa';
import Flight from './components/Flight';
import Sales from './components/Sales/Sales';
import Accounts from './components/Accounts/Accounts';
import Login from './components/Login';
import EuropeElegance from './components/Packages/EuropeElegance';
import EuropePackages from './components/Packages/EuropePackages';
import NotFound from './components/NotFound';
import InternationalTour from './components/Packages/InternationalTour';
import DomesticTour from './components/Packages/DomesticTour';
import AsianTour from './components/Packages/AsianTour';
import EuropeanTour from './components/Packages/EuropeanTour';
import Australia from './components/Packages/SubPackages/EuropePackages/Australia';
import GuestDetails from './components/Packages/SubPackages/EuropePackages/GuestDetails';
import BillingShipping from './components/Packages/SubPackages/EuropePackages/BillingShipping';

function App() {
//  const { pathname } = window.location;
//  const HideHeaer = pathname === "/login" ? null : <Navbar />;
 return (
   <BrowserRouter>
     {/* {HideHeaer} */}
     <Routes>
      
       <Route exact path="/" element={<Login />} />
       <Route exact path="/sales" element={<Sales />} />
       <Route exact path="/accounts" element={<Accounts />} />
       <Route exact path="/flight" element={<Flight />} />
       <Route exact path="/visa" element={<Visa />} />
       <Route path="/europeElegance" element={<EuropeElegance />} />
       <Route path="/europePackages" element={<EuropePackages />} />
       <Route path="/sales/europeanTour" element={<EuropeanTour />} />
       <Route path="/sales/internationalTour" element={<InternationalTour />} />
       <Route path="/sales/domesticTour" element={<DomesticTour />} />
       <Route path="/sales/asianTour" element={<AsianTour />} />
       <Route path="/australia" element={<Australia />} />
       <Route path="/guestDetails" element={<GuestDetails />} />
       <Route path="/billingShipping" element={<BillingShipping />} />
       <Route component={() => (<div>404 Not found </div>)} />
     </Routes>
   </BrowserRouter>
 );
}

export default App
