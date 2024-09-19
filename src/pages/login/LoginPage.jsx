import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/auth/auth'
import { Link, useNavigate } from 'react-router-dom'
function LoginPage() {

    const { signIn } = useAuth()
    // const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm()
    const { errors, isSubmitting } = formState

    async function onSubmit(dados) {
        console.log(dados)
        try {
            await signIn(dados)
            // navigate('/dashboard')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <main className={styles.container}>
                <div className={styles.formSignin}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img src="https://img.freepik.com/fotos-gratis/variedade-de-itens-de-viagem-ainda-vida_23-2149617651.jpg?t=st=1726450655~exp=1726454255~hmac=ed076420a0a5f0596ff0faa53c094dfa78281d5240141684d39702017756bfc6&w=1060" alt="Imagem de viagem" height="200" />
                        <h1 className="h3 mb-3 fw-normal">Efetuar login</h1>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                })}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}

                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                {...register('senha')}
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Esqueceu a senha?
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Carregando...' : 'Entrar'}</button>
                        <p className="mt-5 mb-3 text-body-secondary">Viagem365 &copy; 2024</p>
                        <p>
                            {/* Não possui cadastro? <Link to="/cadastro">Cadastra-se</Link> */}
                        </p>

                    </form>
                </div>

            </main>
        </>
    )
}

export default LoginPage