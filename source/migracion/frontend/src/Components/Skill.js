import '../Style/Skills.css';
function Skill({dataImage, i})
{
    return(
        <li className="list-group-item skill-li-item">{dataImage.skill}</li> 
    );
}

export default Skill;