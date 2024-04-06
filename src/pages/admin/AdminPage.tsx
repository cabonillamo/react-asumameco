import { useUsers } from "../../hooks/useUsers";
import { useAuth } from "../../hooks/useAuth";
import { TopBar } from "../../components/home/";
import { Associate, Manager } from "../../interfaces/context/managers/user";
import { AddUser, AssociateCard, ManagersCard } from "../../components/admin";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const { associates, managers } = useUsers();
  const { user, isAuth } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) navigate("/login");

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl font-semibold text-gray-800">Cargando...</p>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <div className="h-screen overflow-y-scroll bg-bgColor p-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
          <AddUser idRol={user.idRol} user={user} />

          <div
            className="lg:col-span-2 p-4 bg-bgColor 
          mt-3 border-b border-[#66666645]"
          >
            <p
              className="text-ascent-2
            font-semibold"
            >
              Asociados
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {associates.length > 0 ? (
                associates.map((associate: Associate) => (
                  <AssociateCard key={associate.id} associate={associate} />
                ))
              ) : (
                <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
                  <p className="text-ascent-2 text-center">
                    No hay asociados de momento
                  </p>
                </div>
              )}
            </div>

            {user.idRol === 1 && (
              <>
                <p
                  className="text-ascent-2
                font-semibold"
                >
                  Encargados
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {managers.length > 0 ? (
                    managers.map((manager: Manager) => (
                      <ManagersCard key={manager.id} manager={manager} />
                    ))
                  ) : (
                    <div className="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
                      <p className="text-ascent-2 text-center">
                        No hay encargados de momento
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
