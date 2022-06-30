
import {useState, FormEvent, useContext } from "react"
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);


async function handleLogin(event: FormEvent) {
  event.preventDefault();

  let data = {

    email,
    password
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
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
          <Input
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />
          <Button
               loading={loading}
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
