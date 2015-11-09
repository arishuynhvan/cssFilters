var React = require('React');
var RangeSlider = require('../range.jsx');
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var Sidebar = React.createClass({


    render: function () {
        return (
          <aside className="sidebar">
            <Tabs className="tabs" onSelect={this.handleSelected} selectedIndex={0} >
             <TabList className="tabs__headers">
               <Tab className="tabs__item">
                 <p className="tabs__label">Foo</p>
               </Tab>
               <Tab className="tabs__item">
                 <p className="tabs__label">Bar</p>
               </Tab>
             </TabList>
              <TabPanel className="tabs__content">
                <RangeSlider ref="contrast" label="Contrast" value={this.props.filter.contrast} min="0" max="200" handleRangeChange={this.props.handleRangeChange}/>
                <RangeSlider ref="brightness" label="Brightness" value={this.props.filter.brightness} min="0" max="200" handleRangeChange={this.props.handleRangeChange}/>
                <RangeSlider ref="saturate" label="Saturate" value={this.props.filter.saturate} min="0" max="200" handleRangeChange={this.props.handleRangeChange}/>
                <RangeSlider ref="sepia" label="Seapia" value={this.props.filter.sepia} min="0" max="100" handleRangeChange={this.props.handleRangeChange}/>
              </TabPanel>
              <TabPanel>
                <h2>Hello from Bar</h2>
              </TabPanel>
            </Tabs>
          </aside>
        );
      }
});

module.exports = Sidebar;