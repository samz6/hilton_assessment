import PropTypes from "prop-types";

const Room_Count = props => {
  const tobeShownOptions = props.personType === "Adults" ? [1, 2] : [0, 1, 2];
  const ageRange = props.personType === "Adults" ? "(18+)" : "(0-17)";
  const classes = [];

  classes.push("child");

  if (!props.enable) {
    classes.push("disableChild");
  } else {
    classes.push("enableChild");
  }

  return (
    <div className={classes.join(" ")}>
      <div>
        <p>{props.personType}</p>
        <p>{ageRange}</p>
        <select
          disabled={!props.enable ? true : null}
          onChange={props.roomCountHandler}
          value={props.count}
        >
          {tobeShownOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <style jsx>{`
        .child {
          width: 50%;
          height: 100%;
          text-align: left;
          padding-left: 5%;
          border-radius: 0px 0px 10px 10px;
        }
        .disableChild {
          background-color: #d6dbe2;
        }
        .enableChild {
          background-color: white;
        }
        p {
          line-height: 0px;
        }
      `}</style>
    </div>
  );
};

Room_Count.propTypes = {
  personType: PropTypes.string.isRequired,
  enable: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  roomCountHandler: PropTypes.func.isRequired
};

export default Room_Count;
