import { useState } from 'react';
import axios from '../../../api/axios';
import Swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTimeSlotForm = ({ doctorId }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  const token = localStorage.getItem('doc')
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal({
      title: 'Are you sure?',
      text: 'Do you want to add this time slot?',
      icon: 'warning',
      buttons: ['Cancel', 'Yes'],
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {

        try {
          const response = await axios.post(`/doctor/addSlot`, {
            start: startTime,
            end: endTime,
            isAvailable,
          }, {
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            withCredentials: true,
          });

          toast.success('Time slot added successfully!', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          console.log(response.data);
          //can handle the success response here, such as showing a success message or redirecting the user to a different page.
        } catch (error) {
          console.error(error);
          //can handle the error response here, such as showing an error message to the user.
        }
      }
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                Start Time
              </label>
              <input
                type="datetime-local"
                id="start-time"
                className="border-4 h-9 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                End Time
              </label>
              <input
                type="datetime-local"
                id="end-time"
                className=" border-4 h-9 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Time Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTimeSlotForm;
