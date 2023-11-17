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
import { K_Event } from "../pages-admin/K_Event/K_Event";
import { EventAdd } from "../pages-admin/K_Event/EventAdd";
import { EventEdit } from "../pages-admin/K_Event/EventEdit";
import { PositionSkill } from "../pages-admin/PositionSkill/PositionSkill";
import { EditSkill } from "../pages-admin/PositionSkill/EditSkill";
import { AddSkill } from "../pages-admin/PositionSkill/AddSkill";
import { AddPosition } from "../pages-admin/PositionSkill/AddPosition";
import { EditPosition } from "../pages-admin/PositionSkill/EditPosition";
import { Question } from "../pages-admin/Question/Question";
import { AddQuestion } from "../pages-admin/Question/AddQuestion";
import { EditQuestion } from "../pages-admin/Question/EditQuestion";
import { Interview } from "../pages-admin/Interview/Interview";

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

        {/* khanh */}
        <Route path="/event" element={<K_Event />} />
        <Route path="/event/add" element={<EventAdd />} />
        <Route path="/event/edit/:id" element={<EventEdit />} />
        <Route path="/skill-position" element={<PositionSkill />} />
        <Route path="/edit-skill/:id" element={<EditSkill />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/add-position" element={<AddPosition />} />
        <Route path="/edit-position/:id" element={<EditPosition />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question/add" element={<AddQuestion />} />
        <Route path="/question/edit/:id" element={<EditQuestion />} />
        <Route path="/interview" element={<Interview />} />

      </Routes>
    );
  };
  
  export default AllRoutesAd;
  