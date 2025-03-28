import React from "react";

import { Tabs } from "@mantine/core";

export default function HorizontalTab({
  tabs,
  content,
}: {
  tabs: string[];
  content?: React.JSX.Element[];
}) {
  return (
    <Tabs
      variant="pills"
      radius="md"
      defaultValue="gallery"
      className="flex gap-2"
    >
      {tabs.map((tab, index) => (
        <>
          <Tabs.Tab value={tab} key={index}>
            {tab}
          </Tabs.Tab>
          <Tabs.Panel value={tab}>{content}</Tabs.Panel>
        </>
      ))}

      {/* <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel> */}
    </Tabs>
  );
}
