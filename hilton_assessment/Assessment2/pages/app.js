import Room from "./Room";

class App extends React.Component {
  state = {
    rooms: [
      { id: 1, adults: 1, children: 0 },
      { id: 2, enable: false, adults: 1, children: 0 },
      { id: 3, enable: false, adults: 1, children: 0 },
      { id: 4, enable: false, adults: 1, children: 0 }
    ]
  };

  componentDidMount() {
    const localState = localStorage.getItem("rooms");
    if (localState) {
      try {
        this.setState({ rooms: [...JSON.parse(localState)] });
      } catch (e) {
        console.log("Data is not in json format");
      }
    }
  }

  changehandler = (id, e) => {
    // const rooms = [...this.state.rooms];

    const { rooms } = this.state;
    const roomIndex = rooms.findIndex(room => room.id === id);
    if (e.target.checked === true) {
      rooms.slice(1, roomIndex + 1).forEach(r => {
        r.enable = true;
      });
      this.setState({ rooms });
    } else {
      rooms.slice(roomIndex, rooms.length).forEach(r => {
        r.enable = false;
        r.adults = 1;
        r.children = 0;
      });
      this.setState({ rooms });
    }

    // if (e.target.checked === true) {
    //   const changes = rooms.reduce((c, ch) => {
    //     if (ch.id <= id && ch.id !== 1) {
    //       const cha = { ...ch };
    //       cha.enable = e.target.checked;
    //       c.push(cha);
    //     } else {
    //       c.push(ch);
    //     }
    //     return c;
    //   }, []);
    //   this.setState({ rooms: [...changes] });
    // } else {
    //   const redos = rooms.reduce((c, ch) => {
    //     if (ch.id >= id) {
    //       const cha = { ...ch };
    //       cha.enable = e.target.checked;
    //       cha.adults = 1;
    //       cha.children = 0;
    //       c.push(cha);
    //     } else {
    //       c.push(ch);
    //     }
    //     return c;
    //   }, []);
    //   this.setState({ rooms: [...redos] });
    // }
  };

  countHandler = (id, type, e) => {
    const roomIndex = this.state.rooms.findIndex(room => room.id === id);
    const room = { ...this.state.rooms[roomIndex] };

    if (type == "adults") {
      room.adults = parseInt(e.target.value);
    } else {
      room.children = parseInt(e.target.value);
    }
    const rooms = [...this.state.rooms];
    rooms[roomIndex] = room;

    this.setState({ rooms });
  };

  submitHandler = e => {
    e.preventDefault();
    localStorage.setItem("rooms", JSON.stringify(this.state.rooms));
  };

  render() {
    const { rooms } = this.state;
    return (
      <div>
        <form id="roomForm" onSubmit={this.submitHandler}>
          <div className="container">
            {rooms.map(room => (
              <Room
                key={room.id}
                room={room}
                checkHandler={roomId => this.changehandler.bind(this, roomId)}
                roomCountChangeHandler={personType =>
                  this.countHandler.bind(this, room.id, personType)
                }
              />
            ))}
            <div className="buttonSection">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
        <style jsx>{`
          .container {
            margin: 10px;
            width: 90%;
            height: 200px;
            display: inline-block;
          }
          .buttonSection {
            margin-top: 30px;
          }
          button {
            width: 70px;
            height: 28px;
            font-size: 15px;
            background-color: #c1c0c0;
            box-shadow: 1px 1px #8e8b8b;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
