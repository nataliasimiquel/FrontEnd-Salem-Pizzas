import { createContext, ReactNode, useState } from "react";

type AuthContextData = {

    user: UserProps ;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;

}

type UserProps ={
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
  }

  type SignUpProps = {
    name: string;
    email: string;
    password: string;
  }
  type AuthProviderProps = {
    children: ReactNode;
  }

export const AuthContext = createContext ({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

async function signIn() {
    alert("clicou aq")
}

async function signOut() {
    alert("clicou aq")
}

async function signUp() {
    alert("clicou aq")
}

    return (
            <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}
