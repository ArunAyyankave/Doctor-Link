import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import DataTable from 'react-data-table-component';

function AppointmentsList() {

  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");

  const getAppointments = async () => {
    try {
      const { data } = await axios.get('/admin/users');
      setAppointments(data.userDatas);
      setFiltered(data.userDatas)
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "mobile",
      selector: (row) => row.mobile,
    },
  ];

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    const result = appointments.filter((appointment) => {
      return appointment.name.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search])

  console.log('hjgjh', appointments);

  return (
    <div className="p-4 sm:ml-64 bg-[#05445E] h-screen">
      <div className=" border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <DataTable
          title="Appointments"
          columns={columns}
          data={filtered}
          pagination
          fixedHeader
          highlightOnHover
          subHeader
          subHeaderComponent={<input
            type="text"
            placeholder="Search"
            className='border-2 rounded'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />}
        />
      </div>
    </div>
  )
}

export default AppointmentsList;