
import Head from '../../../node_modules/next/head'
import Image from '../../../node_modules/next/image'
import Link from '../../../node_modules/next/link'
import { Button } from '../../components/ui/Button/index'
import { Input } from '../../components/ui/Input/index'
import salempizza from '../../../public/logoSalem.jpg'
import styles from '../../../styles/home.module.scss'



export default function SignUp() {
  return (
    <>
    <Head>
      <title>Faça seu cadastro agora</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={salempizza} alt="Logo Salém Pizzaria" />

      <div className={styles.login}>
        <h1>Cadastrar perfil</h1>
        <form>
          <Input
           type="text"
            placeholder="Digite seu nome"
          />
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
            Cadastrar
          </Button>
        </form>
          <Link href="/signup">
          <a className={styles.text}>Já possui uma conta? faça o login</a>
          </Link>
      </div>
    </div>
    </>
  )
}
