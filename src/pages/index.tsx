
import { FormEvent, useContext } from "react"
import Head from "../../node_modules/next/head"
import salempizza from '../../public/logoSalem.jpg'
import styles from '../../styles/home.module.scss'
import Image from "../../node_modules/next/image"
import { Input } from "../components/ui/Input/index"
import { Button } from "../components/ui/Button/index"
import Link from "../../node_modules/next/link"
import { AuthContext } from "../contexts/AuthContext"

export default function Home() {
  const { signIn } = useContext(AuthContext);

async function handleLogin(event: FormEvent) {
  event.preventDefault();

  let data = {

    email:"Teste",
    password:"123456"
  }

 await signIn(data)
}

  return (
    <>
    <Head>
      <title>SalémPizzas - Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={salempizza} alt="Logo Salém Pizzaria" />

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
           type="text"
            placeholder="Digite seu email"
          />
          <Input
            placeholder="Sua senha"
            type="password"
          />
          <Button
            type="submit"
            loading={false}
          >
            Acessar
          </Button>
        </form>
          <Link href="/signup">
          <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
          </Link>
      </div>
    </div>
    </>
  )
}
