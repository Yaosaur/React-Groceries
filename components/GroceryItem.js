class GroceryItem extends React.Component {
  state = {
    later: false,
  };

  later = event => this.setState({ later: !this.state.later });

  render() {
    return !this.props.item.isPurchased ? (
      <div className={this.state.later === false ? 'item' : 'item later'}>
        <div>
          <span>{this.props.item.item} </span>
          <span>({this.props.item.brand})</span>
        </div>
        <img src={this.props.item.image} />
        <div>
          <span>Unit Size: {this.props.item.units}</span>
          <br />
          <span>Quantity to Buy: {this.props.item.quantity}</span>
        </div>
        <button
          onClick={() =>
            this.props.removeHandler(this.props.owner, this.props.item)
          }
        >
          Remove
        </button>
        <button onClick={this.later}>Buy Later</button>
      </div>
    ) : (
      ''
    );
  }
}
