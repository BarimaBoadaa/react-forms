import React, { Component } from "react";

class ClassForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { fullName: "Samuel", gen: 23, email: "sam@gmail.com" },
        { fullName: "Aboagye", gen: 22, email: "aboagye@gmail.com" },
        { fullName: "Ohene", gen: 23, email: "ohene@gmail.com" },
        { fullName: "Kwame", gen: 21, email: "kwame@gmail.com" },
        { fullName: "Safia", gen: 23, email: "safia@gmail.com" },
      ],

      fullName: "",
      gen: "",
      email: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: this.state.fullName,
      gen: this.state.gen,
      email: this.state.email,
    };

    this.setState({
      students: [...this.state.students, newStudent],
      fullName: "",
      gen: 0,
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Name</h1>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.fullName}
            name="fullName"
          />
          <h3>Gen</h3>
          <input
            type="text"
            placeholder="gen"
            onChange={this.handleChange}
            value={this.state.gen}
            name="gen"
          />
          <h3>Email</h3>
          <input
            type="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <button>Submit</button>
        </form>
        <hr />

        {this.state.students.map((item, index) => {
          return (
            <div key={index}>
              <h1>Name: {item.fullName}</h1>
              <h3>Gen: {item.gen}</h3>
              <h3>Email: {item.email}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ClassForms;
