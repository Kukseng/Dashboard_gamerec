import React from "react";
import Image from "next/image";
import Noavatar from "../../../../../public/noavatar.png";

// Reusable UserRow Component
const UserRow = ({ name, image, title, status, role, email, avatar }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <Image
            className="h-10 w-10 rounded-full"
            src={image} // Use fallback if no avatar provided
            alt={name}
            width={1000}
            height={1000} // Required for Next.js Image optimization
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{title}</div>
      <div className="text-sm text-gray-500">Optimization</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          status === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {role}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {email}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </a>
      <a href="#" className="ml-2 text-red-600 hover:text-red-900">
        Delete
      </a>
    </td>
  </tr>
);

// Main Users Component
const Users = () => {
  const users = [
    {
      name: "Jane Cooper",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQDPqv-BAo78EuMqkFR-gpycaPahFa3StRw&s",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      avatar: Noavatar,
    },
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8GNZcrIagtQZv9wqUAvpdtOJv7uZ44cTxQ&s",
      title: "Software Engineer",
      status: "Inactive",
      role: "Developer",
      email: "john.doe@example.com",
      avatar: Noavatar,
    },
    {
      name: "Sarah Connor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUaM3g4E5ROwDoLnCnycqSx8UexOF8Z9h1A&s",
      title: "Project Manager",
      status: "Active",
      role: "Manager",
      email: "sarah.connor@example.com",
      avatar: Noavatar,
    },
    {
      name: "Jane Cooper",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQDPqv-BAo78EuMqkFR-gpycaPahFa3StRw&s",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      avatar: Noavatar,
    },
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8GNZcrIagtQZv9wqUAvpdtOJv7uZ44cTxQ&s",
      title: "Software Engineer",
      status: "Inactive",
      role: "Developer",
      email: "john.doe@example.com",
      avatar: Noavatar,
    },
    {
      name: "Sarah Connor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUaM3g4E5ROwDoLnCnycqSx8UexOF8Z9h1A&s",
      title: "Project Manager",
      status: "Active",
      role: "Manager",
      email: "sarah.connor@example.com",
      avatar: Noavatar,
    },
    {
      name: "Jane Cooper",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQDPqv-BAo78EuMqkFR-gpycaPahFa3StRw&s",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      avatar: Noavatar,
    },
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8GNZcrIagtQZv9wqUAvpdtOJv7uZ44cTxQ&s",
      title: "Software Engineer",
      status: "Inactive",
      role: "Developer",
      email: "john.doe@example.com",
      avatar: Noavatar,
    },
    {
      name: "Sarah Connor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUaM3g4E5ROwDoLnCnycqSx8UexOF8Z9h1A&s",
      title: "Project Manager",
      status: "Active",
      role: "Manager",
      email: "sarah.connor@example.com",
      avatar: Noavatar,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <UserRow key={index} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
