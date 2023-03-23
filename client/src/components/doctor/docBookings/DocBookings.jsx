import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import DataTable from 'react-data-table-component';

function DocBookings() {

    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState("");

    const getAppointments = async () => {
        const token = localStorage.getItem('doc')
        try {
            const { data } = await axios.get('/doctor/getAps', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                withCredentials: true,
            });
            setAppointments(data);
            setFiltered(data)
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.user.name,
            sortable: true,
        },
        {
            name: "mobile",
            selector: (row) => row.user.mobile,
        },
        {
            name: "Date",
            selector: (row) => new Date(row.timeSlotStart).toLocaleDateString([], { month: 'short', day: '2-digit' }),
        },
        {
            name: "Time Slot",
            selector: (row) => {
                const timeSlotStart = new Date(row.timeSlotStart).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
                const timeSlotEnd = new Date(row.timeSlotEnd).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
                return `${timeSlotStart} - ${timeSlotEnd}`;
            },
        },
    ];

    useEffect(() => {
        getAppointments();
    }, []);

    useEffect(() => {
        const result = appointments.filter((appointment) => {
            return appointment.user.name.toLowerCase().match(search.toLowerCase());
        });
        setFiltered(result);
    }, [search])

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
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
                        placeholder=" Search"
                        className='border-2 rounded'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />}
                />
            </div>
        </div>
    )
}

export default DocBookings