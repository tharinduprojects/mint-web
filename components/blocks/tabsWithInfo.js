'use client'

import { Tabs } from "antd";
import Button from "../elements/button";

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const TabsWithInfo = ({ data: tabInfoData }) => {

  console.log('tabInfoData', tabInfoData);
  return (
    <div className="container mx-auto py-12">
      <Tabs defaultActiveKey="1" items={items} />
      <div>
        <h3>Tab Heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nam?</p>
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default TabsWithInfo;