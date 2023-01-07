import data from '../data.json';
import Skill from './Skill';
import '../Style/Skills.css';
function Skills()
{
    const dataImage = Object.values(data.dataImage);
    function renderSkill(item, index)
    {
        return <Skill key={index} dataImage={item}/>
    }
    return(
            <section id="skills">
        <div className="row">
            <div className="col-md-6">
                <h2>Technical skills</h2>
                <div className="mb-3">
                    <ul className="list-group skill-list-group">
                        {dataImage.length !== 0 && dataImage.map(renderSkill)}
                        
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <h2 className="">Important things</h2>
                <div className="">
                    <ul className="list-group skill-list-group">
                        <li className="list-group-item skill-li-item">English B1, you can read about my English experiencie <a href="inicio">here</a></li>   
                        <li className="list-group-item skill-li-item">Technical skill certifications <a href="#inicio">here</a></li> 
                        <li className="list-group-item skill-li-item">My Portfolio ❤️ <a href="#inicio">here</a></li>                                 
                    </ul>
                </div>
            </div>
        </div>
        </section> 
    );
}

export default Skills;