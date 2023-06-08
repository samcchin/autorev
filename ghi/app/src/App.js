import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalespeopleList from './SalespeopleList';
import SalespersonForm from './SalespersonForm';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import SalesList from './SalesList';
import SalesForm from './SalesForm';
import SalespersonHistory from './SalespersonHistory';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistory from './ServiceHistory';


function App() {
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [sales, setSales] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [salespeople, setSalespeople] = useState([]);

  async function getManufacturers(){
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setManufacturers(data.manufacturers);
    } else {
      console.error(response);
    }
  }

  async function getModels(){
    const url = 'http://localhost:8100/api/models/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setModels(data.models);
    } else {
      console.error(response);
    }
  }

  async function getAutomobiles(){
    const url = 'http://localhost:8100/api/automobiles/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setAutomobiles(data.autos);
    } else {
      console.error(response);
    }
  }

  async function getCustomers(){
    const url = 'http://localhost:8090/api/customers/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setCustomers(data.customers);
    } else {
      console.error(response);
    }
  }

  async function getSalespeople(){
    const url = 'http://localhost:8090/api/salespeople/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setSalespeople(data.salespeople);
    } else {
      console.error(response);
    }
  }

  async function getSales(){
    const url = 'http://localhost:8090/api/sales/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setSales(data.sales);
    } else {
      console.error(response);
    }
  }

  async function getTechnicians(){
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setTechnicians(data.technicians);
    } else {
      console.error(response);
    }
  }

  async function getAppointments(){
    const url = 'http://localhost:8080/api/appointments/'
    const response = await fetch(url);
    if (response.ok){
      const data = await response.json();
      setAppointments(data.appointments);
    } else {
      console.error(response);
    }
  }

  useEffect(()=>{
    getManufacturers();
    getModels();
    getAutomobiles();
    getCustomers();
    getSalespeople();
    getSales();
    getTechnicians();
    getAppointments();
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={manufacturers} />}/>
            <Route path="new" element={<ManufacturerForm />}/>
          </Route>
          <Route path="models">
            <Route index element={<ModelList models={models} />}/>
            <Route path="new" element={<ModelForm getModels={ getModels }/>}/>
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList automobiles={automobiles} />}/>
            <Route path="new" element={<AutomobileForm getAutomobiles={getAutomobiles}/>}/>
          </Route>
          <Route path="salespeople">
            <Route index element={<SalespeopleList salespeople={salespeople} />}/>
            <Route path="new" element={<SalespersonForm getSalespeople={getSalespeople} />}/>
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList customers={customers} />}/>
            <Route path="new" element={<CustomerForm getCustomers={getCustomers} />}/>
          </Route>
          <Route path="sales">
            <Route index element={<SalesList sales={sales}/>}/>
            <Route path="new" element={<SalesForm />}/>
            <Route path="history" element={<SalespersonHistory sales={sales} />}/>
          </Route>
          <Route path="technicians">
            <Route index element={<TechniciansList technicians={technicians} />}/>
            <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians} />}/>
          </Route>
          <Route path="appointments">
            <Route index element={<ServiceAppointmentList getAppointments={getAppointments} automobiles={automobiles} appointments={appointments}/>}/>
            <Route path="new" element={<ServiceAppointmentForm getAppointments={getAppointments}/>}/>
            <Route path="history" element={<ServiceHistory appointments={appointments} automobiles={automobiles}/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
