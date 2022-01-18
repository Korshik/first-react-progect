import React from "react";

class Card extends React.PureComponent {
  render() {
    return (
      <div className={'card'}>
        <div className={'header'}>
          {this.props.cardName}
        </div>
        <div className={'footer'}>
          {this.props.cardText}
        </div>
      </div>
    )
  }
}

export default Card