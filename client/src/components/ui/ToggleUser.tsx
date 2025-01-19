import { Popover } from "@mantine/core";
import { Logout03Icon, ResetPasswordIcon, UserIcon } from "hugeicons-react";

import { useLogoutMutation } from "../../services/auth/logout-mutation";

function ToggleUser() {
  const { mutate: logoutUser } = useLogoutMutation();

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Popover
      width={250}
      position="bottom"
      withArrow
      shadow="md"
      styles={{
        dropdown: { padding: 0, backgroundColor: "#2D364C", border: 0 },
      }}
    >
      <Popover.Target>
        <UserIcon className="w-full cursor-pointer" />
      </Popover.Target>
      <Popover.Dropdown style={{ color: "white" }}>
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
      </Popover.Dropdown>
    </Popover>
  );
}

export default ToggleUser;
