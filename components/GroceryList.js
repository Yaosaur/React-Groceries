class GroceryList extends React.Component {
  render() {
    return (
      <div className='set'>
        <h2>{this.props.groceryList.owner}</h2>
        {this.props.groceryList.list.map(item => (
          <GroceryItem
            item={item}
            owner={this.props.groceryList.owner}
            removeHandler={this.props.removeHandler}
          />
        ))}
      </div>
    );
  }
}
