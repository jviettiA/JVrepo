import React from 'react'
import './Encabezado.css'

class Contenido extends React.Component{

    state ={
        texto : this.props.texto,
        colorId : this.props.colorId
    }

    cambioColor(cID){

        if(cID>=3){
            cID=1
        }else{
            cID++
        }
        console.log(cID)
        this.setState((prevstate) => ({
            colorId: cID 
        }))
    }

    render(){
        
        let{ texto, colorId} = this.state
        let color =''
        switch(colorId){
            case 1:
                color='cyan'

            break;
            case 2:
                color='orange'
            break;
            case 3:
                color='yellow'
            break;
        }

        return(
            <div className='Contenido'>
                <div className="jumbotron" style={{backgroundColor: color}}>
                    <h1>Contenido statefull</h1>
                    <p>{texto}</p>
                    <hr />
                    <button className='btn btn-success' onClick={() => this.cambioColor(colorId) }>
                        Cambio de color

                    </button>

                </div>


            </div>
        )
    }

}

export default Contenido