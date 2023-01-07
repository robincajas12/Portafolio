import '../Style/Proyectos.css';
function Portafolio()
{
    return(
        <section id="portafolio">
            <h3 className='portafolio-h3'>Proyectos personales</h3>
            <div className="container">
                <div className="proyectos-item">
                    <div className='proyecto-titulo'>App para prestar libros</div>
                    <div>
                        <div>Herramientas usadas</div>
                        <ul>
                            <li>Electron</li>
                            <li>HTML,CSS, JQuery</li>
                            <li>Sqlite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;