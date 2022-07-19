import React from 'react';

class Activity extends React.Component {
  render() {
    return (
      <>
        <section className="container bigbox">
          <div className='monthbox'>
            <h2>
              {this.props.details.name}
            </h2>
            <p className="month">
              {this.props.month}
            </p>
          </div>

          <div className="datebox">
            {this.props.details.days.map((day) => {
              return (
                <button
                 className='btn-2'
                  onClick={() => {
                    this.props.handleToggle(day.id, this.props.details.name);
                  }}
                >
                  {day.id}
                </button>
              );
            })}
          </div>

          <button
            className='del-btn'
            name="delete"
            onClick={(e) => {
              this.props.handleDelete(e, this.props.index);
            }}
          >X</button>

        </section>
      </>
    );
  }
}

export default Activity;