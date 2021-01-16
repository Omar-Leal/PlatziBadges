import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ 
      name: e.target.name,
      value: e.target.value 
    });
  };

  handleClick = (e) => {
    console.log(
      "Button actived"
    )
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was delivered');
  }

  render(){
    return (
      <section>
        <h1>New Attend</h1>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>First name</label>
              <input onChange={this.handleChange} className="form-control" type="text" name="first-name"/>
            </div>
            <button  onClick={this.handleClick} className="btn btn-primary">Send it!</button>
          </form>
      </section>
    )
  }
}

export default BadgeForm;