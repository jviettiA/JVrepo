import './Encabezado.css'

const Encabezado = props => {

    let{ titulo:mensajeTitulo} = props


    return  (
        <div className='Encabezado'>
            <div className="jumbotron" style={{backgroundColor: 'green'}}>
                <h1>{mensajeTitulo}</h1>
                <hr />

            </div>


        </div>
    )
}

export default Encabezado