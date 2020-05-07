import React, { Component } from "react";
import { hpe } from "grommet-theme-hpe";
import { Box, Anchor, Grommet } from "grommet";

class App extends Component {
  state = {
    showSidebar: false,
  };
  render() {
    return (
      <Grommet theme={hpe} full>
        <Anchor href="#">This breaks the app</Anchor>
      </Grommet>
    );
  }
}

export default App;
