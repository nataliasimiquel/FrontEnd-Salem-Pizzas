import { createContext, ReactNode, useState } from "react";
import Router from '../../node_modules/next/router';
import { destroyCookie, setCookie, parseCookies } from "../../node_modules/nookies/dist/index";
import { api } from '../services/apiClient';



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

export function signOut(){
    try{ 
         destroyCookie(undefined, '@nextauth.token')
         Router.push('/')
       
    }catch{
        console.log('erro ao deslogar')
      }
}


export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps){
        try{
          const response = await api.post('/session', {
            email,
            password
          })
          // console.log(response.data);
    
          const { id, name, token } = response.data;
    
          setCookie(undefined, '@nextauth.token', token, {
            maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mes
            path: "/" // Quais caminhos terao acesso ao cookie
          })
    
          setUser({
            id,
            name,
            email,
          })
    
          //Passar para proximas requisiçoes o nosso token
          api.defaults.headers['Authorization'] = `Bearer ${token}`
    
    
          //Redirecionar o user para /dashboard
          Router.push('/dashboard')
    
    
        }catch(err){
          console.log("ERRO AO ACESSAR ", err)
        }
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
