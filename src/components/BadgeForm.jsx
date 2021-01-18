import React from 'react';

class BadgeForm extends React.Component {
  state = {};
 

  handleClick = (e) => {
    console.log(
      "Button actived"
    )
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was delivered');
    console.log(this.state);
  };

  render(){
    return (
      <section>
        <h1>New Attend</h1>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label>
                First name
              </label>
              <input 
                onChange={this.props.onChange} 
                className="form-control" 
                type="text"
                name="name" 
                value={this.state.name} />              
              </div>

            <div className="form-group" >
              <label>Last name</label>
              <input 
                onChange={this.props.onChange} 
                className="form-control"
                type="text"
                name="lastName" 
                value={this.state.lastName}/>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                onChange={this.props.onChange} 
                className="form-control" 
                type="text"
                name="email" 
                value={this.state.email} />
            </div>

            <div className="form-group">
              <label>Job Title</label>
              <input 
                onChange={this.props.onChange} 
                className="form-control" 
                type="text" 
                name="occupation" 
                value={this.state.occupation} />
            </div>

            <div className="form-group">
              <label>Twitter</label>
              <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="Twitter" 
              value={this.state.Twitter} />
            </div>

            <button  onClick={this.handleClick} className="btn btn-primary">Send it!</button>
            
          </form>
      </section>
    )
  }
}

export default BadgeForm;