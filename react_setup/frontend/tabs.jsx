import React from 'react'

class Tabs extends React.Component {
  constructor( {tabinfo} ) {
    super();

    this.tabinfo = tabinfo;
    this.render = this.render.bind(this);
    this.tabSelector = this.tabSelector.bind(this);

    this.state = {
      currentTabIdx: 0
    }
  }

  tabSelector(e) {
    let keys = Object.keys(this.tabinfo);
    keys = keys.map(el => {
      return this.tabinfo[el].title});
    let index = keys.indexOf(e.currentTarget.innerText)
    this.setState({currentTabIdx: index})

  }

  render() {
    return (
      <>
      <div id="tabs">
        <h1>Tabs</h1>
        <div id="tab-headers">
          {Object.keys(this.tabinfo).map((tab, idx) => {
            return (
              <ul key={idx}>
                <button onClick={this.tabSelector}>
                  {this.tabinfo[tab].title}
                </button>
              </ul>
            )
          })}
        </div>
        <div id="tab-content">
          <article>
            {this.tabinfo[Object.keys(this.tabinfo)[this.state.currentTabIdx]].content}
          </article>
        </div>
      </div>
      </>
    )
  }
}

export default Tabs;