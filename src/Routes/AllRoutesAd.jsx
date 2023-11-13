import React from "react";
import { Route, Routes } from "react-router-dom";
import {
    AdLogout,
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
    RoomList
  } from "../pages-admin";
import RoomAdd from "../pages-admin/RoomEdit/RoomAdd"

const AllRoutesAd = () => {
    return (
        <Routes>
        {/* dashboard  */}
        <Route path="/" element={<Ecommerce/>} />
        <Route path="/AdLogout" element={<AdLogout/>} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/roomAdd" element={<RoomAdd/>} />
        <Route path="/roomList" element={<RoomList />} />

        {/* pages  */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/interviewer" element={<Employees />} />
        <Route path="/reccer" element={<Customers />} />

        {/* apps  */}
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker" element={<ColorPicker />} />

        {/* charts  */}
        <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} />
      </Routes>
    );
  };
  
  export default AllRoutesAd;
  