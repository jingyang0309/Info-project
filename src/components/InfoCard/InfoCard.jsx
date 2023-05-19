import StyleInfoCard from "./style.js";
import avatar from "../../assets/avatar.jpg";
function InfoCard() {
  return (
    <StyleInfoCard>
      <div className="avatar-container">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <p className="last-name">Dio</p>
        <p className="first-name">Chang</p>
      </div>
      <div className="button-group">
        <div>About</div>
        <div>Work</div>
      </div>
    </StyleInfoCard>
  );
}
export default InfoCard;
