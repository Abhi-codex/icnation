import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
// import Settings from '../../assets/Settings.png';
import Under from '../../assets/UnderConstruction.jpg';
import { Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import {
  Sidebar,
  SidebarBody,
  DesktopSidebar,
  MobileSidebar,
  SidebarLink
} from './sidebar';
import { IconHome, IconHistory, IconAlertCircle, IconPlant, IconSettings } from '@tabler/icons-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState('line');
  const [selectedFactory, setSelectedFactory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [selectedParameter, setSelectedParameter] = useState('RPM');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totaltime, setTotaltime] = useState(0);
  const [runtime, setRumtime] = useState(0);
  const [idletime, setIdletime] = useState(0);
  const [rpms, setRpms] = useState(0);
  const [rpm, setRpm] = useState(0);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [lineData, setLineData] = useState({
  labels: [],  
  datasets: [
    {
      label: 'Production Rate',
      data: [],  
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
});

  useEffect(() => {
    
    const getData = () => {
      axios.get('https://cybernation.onrender.com/data')
        .then(response => {
          setData(response.data);
        })
        .catch(error => console.error("Error fetching machine details:", error));
    };

    const fetchData = async () => {
    try {
      const response = await axios.get('https://cybernation.onrender.com/data');
      const data = response.data;
  
      if (data && data.length > 0) {
        const latestData = data[data.length - 1];
        setTotaltime(latestData.totaltime);
        setIdletime(latestData.ideltime);
        setRpms(latestData.rpms);
        setRpm(latestData.rpm);
        setRumtime(latestData.runtime);
        
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   };


    
    fetchData();
    getData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
  console.log('Updated Values:', { totaltime, idletime, rpms });
}, [totaltime, idletime, rpms]);


useEffect(() => {
  const fetchData = async () => {
  try {
    const response = await fetch('https://cybernation.onrender.com/data');
    const data = await response.json();

    console.log("API response:", data); // Log the full array response

    // Get the last 25 elements from the data array
    const latestEntries = data.slice(-25);

    const updatedLabels = latestEntries.map((entry) => entry.runtime); // Assuming runtime is the label
    const updatedData = latestEntries.map((entry) => entry.rpm);

    console.log("Updated Labels (Last 25 Runtimes):", updatedLabels);
    console.log("Updated Data (Last 25 RPMs):", updatedData);

    setLineData({
      labels: updatedLabels,
      datasets: [
        {
          label: 'Production Rate',
          data: updatedData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


  // Fetch data initially and set up an interval to update it
  fetchData();
  const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds

  return () => clearInterval(intervalId); // Clear interval on component unmount
}, []);


  const pieData = {
    labels: ['Runtime', 'Totaltime', 'Ideltime'],
    datasets: [
      {
        label: 'Machine Working Time',
        data: [runtime, idletime, totaltime],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  const groupedData = data.reduce((acc, curr) => {
  if (!acc[curr.date]) {
    acc[curr.date] = {
      idelTimeSum: 0,
      totalTimeSum: 0,
      runtimeSum: 0,
      rpmSum: 0,
      date: curr.date,
    };
  }
  acc[curr.date].idelTimeSum += curr.ideltime;
  acc[curr.date].totalTimeSum += curr.totaltime;
  acc[curr.date].runtimeSum += curr.runtime;
  acc[curr.date].rpmSum += curr.rpm;

  return acc;
}, {});

const groupedDataArray = Object.values(groupedData);


  // const parameterData = {
  //   RPM: [
  //     { hour: '12 AM', max: 1600, avg: 1500 },
  //     { hour: '1 AM', max: 1580, avg: 1480 },
  //   ],
  //   Temperature: [
  //     { hour: '12 AM', max: 75, avg: 70 },
  //     { hour: '1 AM', max: 72, avg: 68 },
  //   ],
  //   Pressure: [
  //     { hour: '12 AM', max: 6, avg: 5 },
  //     { hour: '1 AM', max: 5.8, avg: 5.2 },
  //   ],
  // };

  const machineDetails = {
    'Factory Name': ['ABC Manufacturing', 'XYZ Industries', 'LMN Factory'],
    'Machine Location': ['Warehouse 12', 'Warehouse 9', 'Warehouse 5'],
    'Technology': ['AI-Based Monitoring', 'IoT Sensors', 'Manual Monitoring'],
    'Sensor': ['Temperature Sensor Model X', 'Pressure Sensor Model Y', 'Vibration Sensor Model Z'],
  };

  const [toggles, setToggles] = useState([false, false, false]);

  const handleToggle = (index) => {
    const updatedToggles = [...toggles];
    updatedToggles[index] = !updatedToggles[index];
    setToggles(updatedToggles);
  };

  return (
    <div className="h-screen w-screen flex">
      <Sidebar className="m-4">
        <SidebarBody>
          <DesktopSidebar>
            <SidebarLink link={{ href: '/homepage', icon: <IconHome />, label: 'Home' }} className="m-2"/>
            <SidebarLink link={{ href: '/history', icon: <IconHistory />, label: 'History' }} className="m-2"/>
            <SidebarLink link={{ href: '/alert', icon: <IconAlertCircle />, label: 'Alert' }} className="m-2"/>
            <SidebarLink link={{ href: '/plant-overviews', icon: <IconPlant />, label: 'Plant Overviews' }} className="m-2"/>
            <SidebarLink link={{ href: '/account-settings', icon: <IconSettings />, label: 'Account Setting' }} className="m-2"/>
          </DesktopSidebar>
          <MobileSidebar>
            <SidebarLink link={{ href: '/homepage', icon: <IconHome />, label: 'Home' }} />
            <SidebarLink link={{ href: '/history', icon: <IconHistory />, label: 'History' }} />
            <SidebarLink link={{ href: '/alert', icon: <IconAlertCircle />, label: 'Alert' }} />
            <SidebarLink link={{ href: '/plant-overviews', icon: <IconPlant />, label: 'Plant Overviews' }} />
            <SidebarLink link={{ href: '/account-settings', icon: <IconSettings />, label: 'Account Setting' }} />
          </MobileSidebar>
        </SidebarBody>
      </Sidebar>

      <main className="col-span-10 flex flex-col p-4 relative ml-12">
  <div className="ml-4 mt-6">
    <div className="grid grid-cols-12 gap-2">
      <section className="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2">
        
        <div className="bg-gray-200 flex flex-col justify-center items-center text-black text-center p-1.5 rounded-lg">
          <h2 className="mb-2 text-lg font-semibold">Progress bars with ideal and real value compare</h2>
          <div className="w-full px-3 space-y-1">
      <div className="flex flex-col items-center">
        <span className="w-3/4 text-sm m-2">Total Time</span>
        <div className="w-3/4 bg-gray-400 rounded-full h-3">
          <div className="bg-gray-600 h-3 rounded-full" style={{ width: `${totaltime}%` }}></div>
        </div>
        <span className="ml-1 text-sm">{totaltime}%</span>

        <span className="w-3/4 text-sm m-2">Idle Time</span>
        <div className="w-3/4 bg-gray-400 rounded-full h-3">
          <div className="bg-gray-600 h-3 rounded-full" style={{ width: `${idletime}%` }}></div>
        </div>
        <span className="ml-1 text-sm">{idletime}%</span>
      </div>
    </div>
        </div>      
        <div className="bg-gray-200 flex flex-col justify-center items-center text-black text-center p-1.5 rounded-lg">
          <h2 className="mb-2 text-lg font-semibold">Live Monitoring</h2>
          <div className="flex flex-col space-y-1 w-full px-3">
            {/* {[{ label: 'Temperature', value: '72°C' }, { label: 'Humidity', value: '45%' }, { label: 'Condition', value: 'Running' }].map((item, index) => ( */}
              <div key={1} className="flex justify-between w-full flex-col">
              {/* {item.label} */}
              <span className='text-lg'>Rpm :</span>
              <span className='text-6xl font-semibold'>{rpm}</span>
              </div>
            {/* ))} */}
          </div>
        </div>

       
        <div className="bg-gray-200 flex flex-col justify-center items-center text-black text-center p-1.5 space-y-4 rounded-lg">
          <h2 className="text-lg font-semibold">Autotrigger Buttons</h2>
          {/* {['Run Machine', 'Increase Speed', 'Stop Machine'].map((action, index) => (
            <div key={index} className="flex items-center space-x-4">
              <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 text-sm">{action}</button>
              <div onClick={() => handleToggle(index)} className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${toggles[index] ? "bg-black" : "bg-gray-300"}`}>
                <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${toggles[index] ? "translate-x-6" : "translate-x-0"}`} />
              </div>
              <img src={Settings} alt="Setting" className={`w-10 ${toggles[index] ? "animate-rotate" : "rotate-0"}`} />
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg" onClick={openSettingsModal}>
                Settings
              </button>
            </div>
          ))} */}
          <h2> Under Working Still </h2>
          <img src={Under} alt='' className='w-1/2'/>
        </div>

    
        <div className="bg-gray-200 flex flex-col justify-center items-center text-black text-center p-1.5 space-y-4 rounded-lg">
          <h2 className="text-lg font-semibold">Graph</h2>
          <div className="flex space-x-3 mb-3">
            <button className={`px-3 py-1.5 rounded-lg ${selectedChart === 'line' ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}`} onClick={() => { setSelectedChart('line'); }}>
              Line Graph
            </button>
            <button className={`px-3 py-1.5 rounded-lg ${selectedChart === 'pie' ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}`} onClick={() => { setSelectedChart('pie'); }}>
              Pie Chart
            </button>
          </div>

          <div className="w-full grid grid-cols-1 gap-2">
            {selectedChart === 'line' ? (
              <div className="w-full h-48">
                <Line data={lineData} />
              </div>
            ) : (
              <div className="w-full h-48">
                <Pie data={pieData} />
              </div>
            )}
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-gray-600 text-white" onClick={() => { openModal(); }}>
            Open large chart
          </button>
        </div>
      </section>


      <aside className="flex flex-row space-y-4 md:space-y-0 md:space-x-2 p-1 rounded-lg">
  <div className="flex-1 bg-gray-300 p-3 rounded-lg">
    <div className="flex justify-between items-center mb-4">
      {['RPM'].map((param) => (
        <button
          key={param}
          className={`py-2 px-4 ml-1 rounded-lg ${selectedParameter === param ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}`}
          onClick={() => setSelectedParameter(param)}
        >
          {param}
        </button>
      ))}
    </div>
    <div className="overflow-x-auto">
<table className="min-w-full bg-gray-200 text-black">
  <thead>
    <tr>
      <th className="px-4 py-2 border-b border-gray-300">Date</th>
      <th className="px-4 py-2 border-b border-gray-300">Runtime</th>
      <th className="px-4 py-2 border-b border-gray-300">Idel Time</th>
      <th className="px-4 py-2 border-b border-gray-300">Total Time</th>
      <th className="px-4 py-2 border-b border-gray-300">Total Rounds</th>
    </tr>
  </thead>
  <tbody>
    {groupedDataArray.slice(-25).map((dateData, index) => (
      <tr key={index}>
        <td className="px-4 py-2 border-b border-gray-300 font-bold">{dateData.date}</td>
        <td className="px-4 py-2 border-b border-gray-300">{(dateData.runtimeSum/60).toFixed(2)}</td>
        <td className="px-4 py-2 border-b border-gray-300">{(dateData.idelTimeSum/60).toFixed(2)}</td>
        <td className="px-4 py-2 border-b border-gray-300">{(dateData.totalTimeSum/60).toFixed(2)}</td>
        <td className="px-4 py-2 border-b border-gray-300">{dateData.rpmSum}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  </div>

  <div className="flex-1 bg-gray-300 p-3 rounded-lg">
    <div className="flex flex-col mb-4">
        <label htmlFor="factoryDropdown" className="text-black text-lg mb-1 block">Factory Name</label>
        <select
          id="factoryDropdown"
          className="bg-gray-400 text-white py-3 px-3 rounded-lg hover:bg-gray-500"
          onChange={(e) => setSelectedFactory(e.target.value)}
        >
          <option value="">Select Factory</option>
          {machineDetails['Factory Name'].map((factory, index) => (
            <option key={index} value={factory}>
              {factory}
            </option>
          ))}
        </select>
      <div>
        <label htmlFor="locationDropdown" className="text-black text-lg mb-1 block">Machine Location</label>
        <select
          id="locationDropdown"
          className="bg-gray-400 text-white py-3 px-3 rounded-lg hover:bg-gray-500"
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {machineDetails['Machine Location'].map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="technologyDropdown" className="text-black text-lg mb-1 block">Technology</label>
        <select
          id="technologyDropdown"
          className="bg-gray-400 text-white py-3 px-3 rounded-lg hover:bg-gray-500"
          onChange={(e) => setSelectedTechnology(e.target.value)}
        >
          <option value="">Select Technology</option>
          {machineDetails['Technology'].map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</aside>

    </div>
  </div>
      </main>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Chart"
        className="modal-content bg-white rounded-lg p-6 w-1/2"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Enlarged {selectedChart === 'line' ? 'Line Graph' : 'Pie Chart'}</h2>
        <div className="w-full h-96">
          {selectedChart === 'line' ? <Line data={lineData} /> : <Pie data={pieData} />}
        </div>
        <button
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>

      <Modal
        isOpen={isSettingsModalOpen}
        onRequestClose={closeSettingsModal}
        contentLabel="Settings"
        className="modal-content bg-white rounded-lg p-6 w-1/2"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="runMachine" className="block text-lg font-medium mb-2">Run Machine:</label>
            <div className="flex space-x-4">
              <input
                type="number"
                id="runMachineMin"
                placeholder="Min value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="number"
                id="runMachineMax"
                placeholder="Max value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="increaseSpeed" className="block text-lg font-medium mb-2">Increase Speed:</label>
            <div className="flex space-x-4">
              <input
                type="number"
                id="increaseSpeedMin"
                placeholder="Min value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="number"
                id="increaseSpeedMax"
                placeholder="Max value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="stopMachine" className="block text-lg font-medium mb-2">Stop Machine:</label>
            <div className="flex space-x-4">
              <input
                type="number"
                id="stopMachineMin"
                placeholder="Min value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="number"
                id="stopMachineMax"
                placeholder="Max value"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <button
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg"
            onClick={closeSettingsModal}
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;