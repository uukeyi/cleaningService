import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import WetCleaning from "./pages/WetCleaningPage/WetCleaningPage";
import CleaningAfterRepair from "./pages/CleaningAfterRepairPage/CleaningAfterRepairPage";
import GeneralCleaningPage from "./pages/GeneralCleaningPage/GeneralCleaningPage";
import CleaningPrivateHousesPage from "./pages/CleaningPrivateHousesPage/CleaningPrivateHousesPage";
import WindowCleaningPage from "./pages/WindowCleaningPage/WindowCleaningPage";
import CommercialPremisePage from "./pages/CommercialPremisePage/CommercialPremisePage";
import CleaningPage from "./pages/CleaningPage/CleaningPage";
import DryCleaningPage from "./pages/DryCleaningPage/DryCleaningPage";
import ForBusinessPage from "./pages/ForBusinessPage/ForBusinessPage";
import ShoppingCenterPage from "./pages/ShoppingCenterPage/ShoppingCenterPage";
import BusinessCenterPage from "./pages/BusinessCenterPage/BusinessCenterPage";
import FactoryCleaningPage from "./pages/FactoryCleaningPage/FactoryCleaningPage";
import FitnessClubPage from "./pages/FitnessClubPage/FitnessClubPage";
import OfficeRoomPage from "./pages/OfficeRoomPage/OfficeRoomPage";
import CarShowroomPage from "./pages/CarShowroomPage/CarShowroomPage";
import ParkingPage from "./pages/ParkingPage/ParkingPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import EntrancePage from "./pages/EntrancePage/EntrancePage";
import GroceryStorePage from "./pages/GroceryStorePage/GroceryStorePage";
import CinemaPage from "./pages/CinemaPage/CinemaPage";
function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<HomePage />} />
               <Route path="/wetCleaning" element={<WetCleaning />} />
               <Route
                  path="/generalCleaning"
                  element={<GeneralCleaningPage />}
               />
               <Route
                  path="/cleaningRepair"
                  element={<CleaningAfterRepair />}
               />
               <Route
                  path="/privateHouses"
                  element={<CleaningPrivateHousesPage />}
               />
               <Route path="/windowCleaning" element={<WindowCleaningPage />} />
               <Route path="/commercialPremise" element = {<CommercialPremisePage/>} />
               <Route path="/cleaning"  element = {<CleaningPage/>}/>
               <Route path="/dryCleaning" element = {<DryCleaningPage/>} />
               <Route path="/forBusiness" element = {<ForBusinessPage/>}  />
               <Route path="/shoppingCenter" element = {<ShoppingCenterPage/>} />
               <Route path="/businessCenter"   element ={<BusinessCenterPage/>} />
               <Route path="factoryCleaning" element = {<FactoryCleaningPage/>}  />
               <Route path="/fitnessClub" element = {<FitnessClubPage/>}  />
               <Route path="/officeRoom"   element = {<OfficeRoomPage/>} />
               <Route  path="/carShowroom"   element = {<CarShowroomPage/>} />
               <Route path="/parking"  element = {<ParkingPage/>} />
               <Route path="/warehouses" element = {<WarehousesPage/>}  />
               <Route  path="/entrance" element = {<EntrancePage/>} />
               <Route path="/groceryStore"  element = {<GroceryStorePage/>} />
               <Route path="/cinema" element = {<CinemaPage/>}  />
            </Route>
         </Routes>
      </>
   );
}

export default App;
