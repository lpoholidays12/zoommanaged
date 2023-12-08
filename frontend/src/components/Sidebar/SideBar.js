import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

 const SideBar = [
  {
    title: "New Bookings",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Bookings",
    path: "/visa",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Global Guestlist",
    path: "/visa",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Acknowledgement",
    path: "/sales",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];

export default SideBar