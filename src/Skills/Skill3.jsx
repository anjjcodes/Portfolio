import "./Skill3.css";
import { tools } from "../assets/assets";
import { version } from "../assets/assets";

const Skill3 = () => {
  return (
    <div>
      <div className="skill3-container">
        <div className="skill-flex">
          <div className="tools">
            <h4 className="tool-h4">Tools</h4>
            <div className="tools-grid">
              {tools.map((tools, index) => (
                <div className="tool-items" style={{"--glow": tools.glow}}>
                  <img src={tools.image} alt="" className="each-skill" />
                  <p className="each-title3">{tools.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="version">
            <h4 className="version-h4">Version Control</h4>
            <div className="version-grid">
              {version.map((version, index) => (
                <div className="version-items" style={{"--glow": version.glow}}>
                  <img src={version.image} alt="" className="each-skill" />
                  <p className="each-title3">{version.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill3;
