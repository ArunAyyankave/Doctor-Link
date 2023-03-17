import { useState } from 'react';
import axios from '../../../api/axios';

const AddTimeSlotForm = ({ doctorId }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  let token = localStorage.getItem('doc')
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/doctor/addSlot`, {
        start: startTime,
        end: endTime,
        isAvailable,
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        withCredentials: true,
      });

      console.log(response.data);
      // You can handle the success response here, such as showing a success message or redirecting the user to a different page.
    } catch (error) {
      console.error(error);
      // You can handle the error response here, such as showing an error message to the user.
    }
  };

  return (
    <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <input
            type="datetime-local"
            id="start-time"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
