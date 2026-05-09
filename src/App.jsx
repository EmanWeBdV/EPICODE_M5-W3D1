import { useState } from "react";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <MyNav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Welcome />

      <AllTheBooks searchQuery={searchQuery} />

      <MyFooter />
    </>
  );
}

export default App;