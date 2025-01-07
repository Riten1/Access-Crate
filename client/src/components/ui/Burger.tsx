import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Menu() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        color="#FFE500"
      />
    </>
  );
}

export default Menu;
