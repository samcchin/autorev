import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
              <Route index element={<ManufacturerList manufacturers={manufacturers}/> } />
              <Route path="new" element={<ManufacturerForm getManufacturers={getManufacturers} />} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList models={models}/> } />
            <Route path="new" element={<ModelForm getModels={getModels} />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={automobiles}/> } />
            <Route path="new" element={<AutomobileForm getAutomobiles={getAutomobiles}/> } />
          </Route>
          <Route path="salespeople">
            <Route index element={<SalespeopleList salespeople={salespeople}/> } />
            <Route path="new" element={<SalespersonForm getSalespeople={getSalespeople} />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomersList customers={customers}/> } />
            <Route path="new" element={<CustomerForm getCustomers={getCustomers} />} />
          </Route>
          <Route path="sales">
              <Route index element={<SalesList sales={sales}/> } />
              <Route path="new" element={<SalesForm getSales={getSales} />} />
              <Route path="history" element={<SalesHistory getSales={getSales} />} />
            </Route>
          <Route path="technicians">
            <Route index element={<TechnicianList technicians={technicians}/> } />
            <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians} />} />
          </Route>
          <Route path="appointments">
            <Route index element={<AppointmentList appointments={appointments}/> } />
            <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />} />
            <Route path="history" element={<ServiceHistory getAppointments={getAppointments} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
