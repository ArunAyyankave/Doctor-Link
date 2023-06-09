import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import { ImageModal } from "./ImageModal";

const GET_DCS = "/admin/docs";
const CHANGE_BLOCK = "/admin/doc/blockStatus";

function DoctorManage() {
  const [docs, setDocs] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const items = ["All", "Approved", "Pending"];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const token = localStorage.getItem('admin');
  useEffect(() => {
    axios.get(GET_DCS, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      withCredentials: true,
    }).then(({ data }) => {
      setDocs(data.docsDatas);
    });
  }, []);

  const handleBlock = (id, status) => {
    swal({
      title: `${status ? "Unblock Doctor?" : "Block Doctor?"}`,
      text: `Are you sure you want to ${status ? "Unblock" : "Block"
        } this Doctor?`,
      icon: "warning",
      buttons: ["Cancel", `${status ? "Unblock" : "Block"}`],
      dangerMode: status ? false : true,
    }).then((confirm) => {
      if (confirm) {
        axios.put(CHANGE_BLOCK + `/${id}`, {}, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          withCredentials: true,
        }).then((response) => {
          setDocs(
            docs.map((doc) =>
              doc._id === id ? { ...doc, blockStatus: !doc.blockStatus } : doc
            )
          );
          toast.success(
            `Doctor ${status ? "unblocked" : "blocked"} successfully!`
          );
        });
      }
    });
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleApprove = (id, status) => {
    if (status === 'approve') {
      axios.put('/admin/doc/approve/' + id, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        withCredentials: true,
      });
      setDocs(docs.map(doc => doc._id === id ? { ...doc, approved: true } : doc));
    } else {
      axios.delete('/admin/doc/' + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        withCredentials: true,
      });
      setDocs(docs.filter(doc => doc._id !== id));
    }
  }

  useEffect(() => {
    setFilteredData(selectedItem === 'All' ? docs : selectedItem === 'Approved' ? docs.filter((doc) => doc.approved === true) : docs.filter((doc) => doc.approved === false))
  }, [selectedItem, docs]);

  return (
    <div className="p-4 relative sm:ml-64 bg-[#05445E] h-screen">
      <Toaster position="top-right" />
      <div className="p-4  border-gray-200   rounded-lg dark:border-gray-700 mt-14">
        <div className="flex justify-between mb-3">
          <p className="text-lg m-1 capitalize text-white">Doctor Management</p>

          <div className="relative inline-block text-left">
            <div>
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedItem}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {items.map((item) => (
                  <button
                    key={item}
                    className={`${item === selectedItem
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full table-fixed text-left text-[#D4F1F4] dark:text-blue-100">
            <thead className="text-xs m-1 text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <tr className="border border-[#189AB4]">
                <th scope="col" className="px-6 py-3">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3">
                  mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Document
                </th>
                <th scope="col" className="px-6 py-3">
                  Specialisation
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length ? (
                filteredData.map((doc) => (
                  <tr className="bg-[#189AB4] border-b border-[#05445E]" key={doc._id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                    >
                      {doc.name}
                    </th>
                    <td className="px-6 py-4">{doc.mobile}</td>
                    <td
                      className="px-6 py-4"
                      onClick={() => handleImageClick(doc.image)}
                    >
                      <img src={doc.image} alt="" className="w-20" />
                    </td>
                    <td
                      className="px-6 py-4 hover:underline cursor-pointer"
                    >
                      {doc.specialisation}

                    </td>
                    <td className="px-6 py-4">
                      {!doc.approved ? (
                        <div className="">
                          <a
                            className="font-medium bg-green-600 p-2 cursor-pointer"
                            onClick={() => handleApprove(doc._id, 'approve')}
                          >
                            Approve
                          </a>
                          <a
                            className="ml-1 font-medium bg-red-600 p-2 cursor-pointer"
                            onClick={() => handleApprove(doc._id, 'decline')}
                          >
                            Decline
                          </a>
                        </div>
                      ) : (
                        <a
                          href="#"
                          onClick={() => handleBlock(doc._id, doc.blockStatus)}
                          className={`font-medium ${doc.blockStatus ? "bg-green-600 " : "bg-red-600"
                            } p-2  `}
                        >
                          {doc.blockStatus ? "Unblock" : "Block"}
                        </a>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className=" p-4"><td>No doctors available</td></tr>
              )}
            </tbody>
          </table>
          {selectedImage && (
            <ImageModal imageUrl={selectedImage} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorManage;