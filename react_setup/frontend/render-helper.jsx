import React from 'react'
import Clock from './clock';
import Tabs from './tabs';

class RenderHelper extends React.Component {
  constructor() {
    super();

    this.state = {
      tabinfo: {
        tab1: {
          title: "one",
          content: "I am the first"
        },
        tab2: {
          title: "two",
          content: "Second pane here"
        },
        tab3: {
          title: "three",
          content: "Third pane here"
        }
      }
    }
  }

  render() {
    return (
      <>
        <Clock />
        <Tabs tabinfo = {this.state.tabinfo} />
      </>
    );
  }
}

export default RenderHelper;