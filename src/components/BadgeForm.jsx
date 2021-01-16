import React from 'react';

class BadgeForm extends React.Component {
  render(){
    return (
      <section>
        <h1>New Attend</h1>
          <form >
            <div className="form-group">
              <label>First name</label>
              <input className="form-control" type="text" name="first-name"/>
            </div>
            <button className="btn btn-primary">Send it!</button>
          </form>
      </section>
    )
  }
}

export default BadgeForm;