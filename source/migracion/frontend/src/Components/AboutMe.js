import catGif from '../img/gif/4GZ9.gif';
import '../Style/AboutMe.css';
function AboutMe()
{
    return(
    <section id='aboutme' data-os="fade-right">
        <div className="aling-text row about-me">
            <div className="col-md-6">
                <h2>Detalles</h2>
                        <table className="">
                            <tbody>
                            <tr>
                                <td>Nombre: </td>
                                <td>Robinson Cajas</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>Ocupación: </td>
                                <td>Estudiante de Ciencias de la Computacion en la <a link="_blank" href="https://www.uce.edu.ec/">UCE</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody></table>
                        <img alt="Gato gif" src={catGif} />
                </div>
            <div className="col-md-6">
                <h2>Perfil</h2>
                <article>
                    Me gusta aprender cosas nuevas en las cuales están los idiomas, <strong>Ingles</strong> y Japónes. Me encanta la programación
                    siendo <strong>JavaScript</strong> mi lenguaje de mayor dominio, puedes visitar mi github aquí 
                    <a target="_blank" rel='noreferrer' href="https://github.com/robincajas12">aquí</a>
                </article>        
            </div>
        </div>
    </section>
    );
}

export default AboutMe;