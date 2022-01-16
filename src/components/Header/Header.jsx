import { Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = () => {
  const [tab, setTab] = useState(0);
  console.dir(tab);
  return (
    <header>
      <h1>Animal Gallery Picture</h1>
      <AppBar position="static">
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          aria-label="simple tabs example"
        >
          <Tab label="All" to="/" component={Link} />
          <Tab label="Cats" to="/cats" component={Link} />
          <Tab label="Dogs" to="/dogs" component={Link} />
        </Tabs>
      </AppBar>
    </header>
  );
};

export default Header;
