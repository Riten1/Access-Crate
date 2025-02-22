import { useState } from "react";

import { Group, HoverCard } from "@mantine/core";
import {
  Logout03Icon,
  Profile02Icon,
  ResetPasswordIcon,
  UserIcon,
} from "hugeicons-react";

import { ChangePasswordModal } from "../../features/auth/modal/ChangePasswordModal";
import { UpdateProfileModal } from "../../features/auth/modal/UpdateProfileModal";
import { useLogoutMutation } from "../../services/auth/logout-mutation";

function HoverUser() {
  const { mutate: logoutUser } = useLogoutMutation();
  const [openChangepasswordModal, setOpenChangepasswordModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  const toggleChangepasswordModal = () => {
    setOpenChangepasswordModal(!openChangepasswordModal);
  };

  const toggleProfileModal = () => {
    setOpenProfileModal(!openProfileModal);
  };
  return (
    <>
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
            <div
              onClick={toggleProfileModal}
              className="flex cursor-pointer items-center justify-between p-4 hover:bg-supporting-bg-light"
            >
              <button>Profile</button>
              <Profile02Icon />
            </div>
            <div
              onClick={toggleChangepasswordModal}
              className="flex cursor-pointer items-center justify-between p-4 hover:bg-supporting-bg-light"
            >
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
      <ChangePasswordModal
        isOpen={openChangepasswordModal}
        closeModal={() => setOpenChangepasswordModal(false)}
      />
      <UpdateProfileModal
        isOpen={openProfileModal}
        closeModal={() => setOpenProfileModal(false)}
      />
    </>
  );
}
export default HoverUser;
