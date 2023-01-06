import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("");
  const [language, setLanguage] = useState(1);

// languaje: 0: Ingles - 1: Español
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        language,
        setLanguage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
/* 

Uso de CHILDREN:

Cuando se utilize en:
<AuthProvider>
<AppRoutes/>
</AuthProvider> 

El componente "<AppRoutes/>" y todos los que estan dentro de el serán el CHILDREN

*/