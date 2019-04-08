import Room_Count from "./Room_Count";
import PropTypes from "prop-types";

const Room = props => {
  const enablePersonAddtion =
    props.room.id !== 1 ? props.room.enable : !props.room.enable;

  const activeClasses = [];
  const activeClasses1 = [];
  const activeClasses2 = [];

  activeClasses.push("gParent");
  activeClasses1.push("parent1");
  activeClasses2.push("parent2");

  if (props.room.id !== 1 && !props.room.enable) {
    activeClasses.push("enableGParent");
    activeClasses1.push("enableParent1");
    activeClasses2.push("enableParent2");
  } else {
    activeClasses.push("disableGParent");
    activeClasses1.push("disableParent1");
    activeClasses2.push("disableParent2");
  }

  return (
    <div className={activeClasses.join(" ")}>
      <div className={activeClasses1.join(" ")}>
        <span>
          {props.room.id !== 1 ? (
            <input
              type="checkbox"
              onChange={props.checkHandler(props.room.id)}
              checked={props.room.enable}
            />
          ) : null}
          <label>
            Room<span>{props.room.id}</span>
          </label>
        </span>
      </div>
      <div className={activeClasses2.join(" ")}>
        <Room_Count
          personType="Adults"
          enable={enablePersonAddtion}
          count={props.room.adults}
          roomCountHandler={props.roomCountChangeHandler("adults")}
        />
        <Room_Count
          personType="Children"
          enable={enablePersonAddtion}
          count={props.room.children}
          roomCountHandler={props.roomCountChangeHandler("children")}
        />
      </div>
      <style jsx>{`
        .gParent {
          width: 12%;
          border-radius: 10px;
          display: inline-block;
          height: 60%;
          margin-right: 20px;
        }

        .enableGParent {
          border: 5px solid #c4cad2;
          background-color: #c4cad2;
        }

        .disableGParent {
          border: 5px solid #e4e1e1;
          background-color: #e4e1e1;
        }

        input {
          margin-left: 5%;
        }

        label {
          margin-left: 5%;
          padding-top: 2%;
        }

        .parent1 {
          width: 100%;
          height: 20%;
          background-color: #d6dbe2;
          border-radius: 10px 10px 0px 0px;
        }

        .enableParent1 {
          background-color: #d6dbe2;
        }

        .disableParent1 {
          background-color: #e4e1e1;
        }

        .parent2 {
          width: 100%;
          display: inline-flex;
          height: 80%;
          border-radius: 0px 0px 10px 10px;
        }

        .enableParent2 {
          background-color: #d6dbe2;
        }

        .disableParent2 {
          background-color: white;
        }
      `}</style>
    </div>
  );
};

Room.protoTypes = {
  room: PropTypes.object.isRequired,
  checkHandler: PropTypes.func.isRequired,
  roomCountChangeHandler: PropTypes.func.isRequired
};

export default Room;
