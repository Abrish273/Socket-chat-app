import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  const handleLogout = async () => {
    await logout();
  };


  return (
    <div className="mt-auto">
      {
        !loading ? (
          <BiLogOut
        onClick={handleLogout}
        style={{
          color: "#ffffff",
        }}
      />
        ) :(
          <span className="loading loading-spinner"></span>
        )
      }
    </div>
  );
};

export default LogoutButton;
