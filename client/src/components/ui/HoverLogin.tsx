import { Group, HoverCard } from "@mantine/core";
import { Logout03Icon, ResetPasswordIcon, UserIcon } from "hugeicons-react";

import { useLogoutMutation } from "../../services/auth/logout-mutation";

function HoverUser() {
  const { mutate: logoutUser } = useLogoutMutation();

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Group justify="center">
      <HoverCard
        width={250}
        shadow="md"
        styles={{
          dropdown: { padding: 0, backgroundColor: "#2D364C", border: 0 },
        }}
      >
        <HoverCard.Target>
          <UserIcon className="cursor-pointer" />
        </HoverCard.Target>
        <HoverCard.Dropdown style={{ color: "white" }}>
          <div className="flex cursor-pointer items-center justify-between p-4 hover:bg-supporting-bg-light">
            <button>Change Password</button>
            <ResetPasswordIcon />
          </div>
          <div
            onClick={handleLogout}
            className="flex cursor-pointer items-center justify-between p-4 hover:bg-supporting-bg-light"
          >
            <button>Logout</button>
            <Logout03Icon />
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
export default HoverUser;
