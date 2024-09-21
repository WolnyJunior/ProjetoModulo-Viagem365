import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function CadastroPage() {

    const { register, handleSubmit, formState } = useForm()
    const { errors, isSubmitting } = formState

    const [cep, setCep] = useState('')

    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    })

    const [usuario, setUsuario] = useState({
        nome: '',
        tipo: '',
        email: '',
        senha: ''
    })

    const inputCadastro = (e) => {
        const { name, value } = e.target
        if (name in endereco) {
            setEndereco(prevEndereco => ({
                ...prevEndereco,
                [name]: value
            }))
        } else {
            setUsuario(prevDados => ({
                ...prevDados,
                [name]: value
            }))
        }
    }

    const buscaCEP = async (e) => {
        const CEP = e.target.value
        setCep(CEP)

        if (CEP.length === 8) {
            try {
                const response = await fetch(`https://cep.awesomeapi.com.br/json/${CEP}`)
                const data = await response.json();

                if (data.status === 400) {
                    alert('CEP inválido')
                    return
                }

                setEndereco({
                    logradouro: data.logradouro || '',
                    bairro: data.bairro || '',
                    localidade: data.cidade || '',
                    uf: data.estado || ''
                })
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
                alert("Erro ao buscar o CEP");
            }
        }
    }

    async function onSubmit(data) {

        const dados = { ...usuario, cep, ...endereco }

        try {
            const resposta = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            if (!resposta.ok) {
                alert('ERRO. Usuário não cadastrado.')
            } else {
                alert('Usuário cadastrado com SUCESSO')
            }
        } catch (error) {
            alert("Erro ao cadastrar novo usuário");
            console.error("Erro:", error);
        }
    }

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

                        {/* NOME */}
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Nome:</label>
                            <input type="text"
                                className={`form-control ${errors.nome && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu nome'
                                value={usuario.nome}
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
                                onChange={inputCadastro}
                            />
                        </div>
                        {errors.nome && <span className='text-danger text-sm'>{errors.nome.message}</span>}

                        {/* TIPO DE USUÁRIO */}
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Tipo de Usuário:</label>
                            <input type="text"
                                className={`form-control ${errors.tipo && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Guia / Turista'
                                value={usuario.tipo}
                                {...register('tipo', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 7,
                                        message: 'Esse campo permite um número máximo de 7 caracteres. É "guia" ou "turista"'
                                    }
                                })}
                                onChange={inputCadastro}
                            />
                        </div>
                        {errors.tipo && <span className='text-danger text-sm'>{errors.tipo.message}</span>}

                        {/* CEP */}
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>CEP:</label>
                            <input type="text"
                                className={`form-control ${errors.cep && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='CEP'
                                value={usuario.cep}
                                {...register('cep', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 8,
                                        message: 'Esse campo permite um número máximo de 8 caracteres.'
                                    }
                                })}
                                onChange={buscaCEP}
                            />
                        </div>
                        {errors.tipo && <span className='text-danger text-sm'>{errors.tipo.message}</span>}

                        {/* DADOS DE ENDEREÇO */}
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Rua:</label>
                            <input type="text"
                                className={`form-control ${errors.logradouro && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Guia / Turista'
                                value={usuario.logradouro}
                                {...register('logradouro', {
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
                                onChange={inputCadastro}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Bairro:</label>
                            <input type="text"
                                className={`form-control ${errors.bairro && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Bairro'
                                value={usuario.bairro}
                                {...register('bairro', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 7,
                                        message: 'Esse campo permite um número máximo de 20 caracteres.'
                                    }
                                })}
                                onChange={inputCadastro}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Cidade:</label>
                            <input type="text"
                                className={`form-control ${errors.cidade && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Guia / Turista'
                                value={usuario.cidade}
                                {...register('cidade', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 15,
                                        message: 'Esse campo permite um número máximo de 15 caracteres.'
                                    }
                                })}
                                onChange={inputCadastro}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Estado:</label>
                            <input type="text"
                                className={`form-control ${errors.estado && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Estado'
                                value={usuario.estado}
                                {...register('estado', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 7,
                                        message: 'Esse campo permite um número máximo de 15 caracteres.'
                                    }
                                })}
                                onChange={inputCadastro}
                            />
                        </div>



                        {/* <div className='mb-3'>
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
                        {errors.idade && <span className='text-danger text-xs'>{errors.idade.message}</span>} */}

                        {/* EMAIL */}
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>E-mail:</label>
                            <input type="email"
                                className={`form-control ${errors.email && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu e-mail'
                                value={usuario.email}
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
                                onChange={inputCadastro}
                            />
                        </div>
                        {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}

                        {/* <div className='mb-3'>
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
                        {errors.usuario && <span className='text-danger text-sm'>{errors.usuario.message}</span>} */}

                        {/* SENHA */}
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
                                onChange={inputCadastro}
                            />
                        </div>
                        {errors.senha && <span className='text-danger text-sm'>{errors.senha.message}</span>}

                        {/* <button className="btn btn-primary w-100 py-2" type="submit">Cadastrar</button> */}
                        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Carregando...' : 'Cadastrar'}</button>

                        <p className="mt-5 mb-3 text-body-secondary">Viagem365 &copy; 2024</p>
                        <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CadastroPage