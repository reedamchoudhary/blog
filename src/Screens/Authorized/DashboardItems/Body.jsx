import React from "react";
import { useDashboard } from "../Dashboard";
import AllPosts from "./DashboardPanels/AllPosts/AllPosts";
import Compose from "./DashboardPanels/Compose/Compose";
import Drafts from "./DashboardPanels/Drafts/Drafts";
import Ideas from "./DashboardPanels/Ideas/Ideas";
import ToDoList from "./DashboardPanels/ToDoList/ToDoList";

const Body = () => {
  const { activeArea } = useDashboard();

  return (
    <>
      {activeArea === "All Posts" ? (
        <AllPosts />
      ) : activeArea === "Drafts" ? (
        <Drafts />
      ) : activeArea === "Ideas" ? (
        <Ideas />
      ) : activeArea === "To Do List" ? (
        <ToDoList />
      ) : (
        <Compose />
      )}
    </>
  );
};

export default Body;
