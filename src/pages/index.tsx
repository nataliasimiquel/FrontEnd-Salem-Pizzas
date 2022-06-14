
import Head from "../../node_modules/next/head"
import salempizza from '../../public/logoSalem.jpg'
import styles from '../../styles/home.module.scss'
import Image from "../../node_modules/next/image"
import { Input } from "../components/ui/Input/index"
import { Button } from "../components/ui/Button/index"

export default function Home() {
  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={salempizza} alt="Logo Salém Pizzaria" />

      <div className={styles.login}>
        <form>
          <Input
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

        <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>

      </div>
    </div>
    </>
  )
}
