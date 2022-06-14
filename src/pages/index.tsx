
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
    <title>Salém pizza -  Faça seu login</title>
  </Head>
  <div className={styles.container}>
    <Image src={salempizza} alt="Logo Salem Pizzaria" />
    <div className={styles.login}>
      <form>
      <Input
      placeholder="Digite seu email"
      type="text"/>
      <Input
      placeholder="Sua Senha"
      type="password"/>

      <Button
      type="submit"
      >
        Acessar
      </Button>
      
      </form>
    </div>
  </div>
  </>
  )
}
