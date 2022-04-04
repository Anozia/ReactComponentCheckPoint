import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

const App = () => {
  return (
    <div className="app">
      <ProfilePhoto />;
      <FullName />;
      <Address />;
    </div>
  );
};
export default App;
