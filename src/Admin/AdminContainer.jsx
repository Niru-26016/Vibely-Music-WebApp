import React from "react";
import AdminContenet from "./AdminContenet";
import AdminSideBar from "./AdminSideBar";

const AdminContainer = () => {
  return (
    <>
      <section className="w-[100vw] flex">
        <AdminSideBar />
        <AdminContenet />
      </section>
    </>
  );
};

export default AdminContainer;
