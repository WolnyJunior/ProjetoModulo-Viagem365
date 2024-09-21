import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'

function CadastroPage() {

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            idade: 0
        }
    })
    const { errors } = formState

    async function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <main className={styles.container}>
                <div className={styles.formSignin}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <img src="https://img.freepik.com/fotos-gratis/variedade-de-itens-de-viagem-ainda-vida_23-2149617651.jpg?t=st=1726450655~exp=1726454255~hmac=ed076420a0a5f0596ff0faa53c094dfa78281d5240141684d39702017756bfc6&w=1060" alt="Imagem de viagem" height="200" />

                        <h1 className='h3 mb-3 fw-normal'>Preencha todos os campos para efetuar o cadastro.</h1>

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Nome:</label>
                            <input type="text"
                                className={`form-control ${errors.nome && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu nome'
                                aria-invalid={!!errors.nome}
                                {...register('nome', {
                                    required: {
                                        value: true,
                                        message: 'Coloca teu nome criatura.'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Tá, de certo tu acha que é o Charlingtonglaevionbeecheknavare dos Anjos Mendonça'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Tem que ser composto esse nome, só Ana não dá.'
                                    }
                                })}
                            />
                        </div>
                        {errors.nome && <span className='text-danger text-sm'>{errors.nome.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Idade:</label>
                            <input
                                type="number"
                                className={`form-control ${errors.idade && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                aria-invalid={!!errors.idade}
                                placeholder='Digite seu nome'
                                {...register('idade', {
                                    min: {
                                        value: 18,
                                        message: 'Não permitido para menores de 18 anos'
                                    }
                                })}
                            />
                        </div>
                        {errors.idade && <span className='text-danger text-xs'>{errors.idade.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>E-mail:</label>
                            <input type="email"
                                className={`form-control ${errors.email && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu e-mail'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 20,
                                        message: 'Esse campo permite um número máximo de 20 caracteres.'
                                    }
                                })}

                            />
                        </div>
                        {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}

                        <div className='mb-3'>
                            <div className='form-check'>
                                <label className="form-check-label" for="flexRadioDefault1">Turista:</label>
                                <input type="radio"
                                    className='form-check-input'
                                    name='flexRadioDefault'
                                    id='flexRadioDefault1'
                                    value='turista'
                                    {...register('usuario', {
                                        required: {
                                            value: true,
                                            message: 'Escolhe Caraio.'
                                        }
                                    })}
                                />
                            </div>
                            <div className='form-check'>
                                <label className="form-check-label" for="flexRadioDefault1">Guia Turístico:</label>
                                <input type="radio"
                                    className='form-check-input'
                                    name='flexRadioDefault'
                                    id='flexRadioDefault1'
                                    value='guia turistico'
                                    {...register('usuario', {
                                        required: {
                                            value: true,
                                            message: 'Escolhe um né!'
                                        }
                                    })}
                                />
                            </div>

                        </div>
                        {errors.usuario && <span className='text-danger text-sm'>{errors.usuario.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Senha:</label>
                            <input type="password"
                                className='form-control'
                                id='exampleFormControlInput1'
                                placeholder='Digite sua senha'
                                {...register('senha', {
                                    required: {
                                        value: true,
                                        message: 'Coloca a senha Caraio'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Menos de 8 caracteres nem dá pra chamar de senha.'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Não te passa que é só quinze caracteres.'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/, // Regex para letras e números
                                        message: 'A senha deve conter letras e números.'
                                    }
                                })}
                            />
                        </div>
                        {errors.senha && <span className='text-danger text-sm'>{errors.senha.message}</span>}

                        <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>

                        <p className="mt-5 mb-3 text-body-secondary">Viagem365 &copy; 2024</p>
                        <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CadastroPage