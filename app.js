class App extends React.Component {
  state = {
    groceries: groceries,
    owner: '',
    item: '',
    brand: '',
    image: '',
    units: '',
    quantity: '',
    isPurchased: false,
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let targetList = this.state.groceries.filter(
      set => set.owner === this.state.owner
    );
    let remainingLists = this.state.groceries.filter(
      set => set.owner !== this.state.owner
    );
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      image: this.state.image,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased,
    };
    targetList[0].list.push(newItem);
    this.setState({
      groceries: [...targetList, ...remainingLists],
      owner: '',
      item: '',
      brand: '',
      image: '',
      units: '',
      quantity: '',
    });
  };

  sortAlpha = event => {
    let newList = [];
    for (let set of this.state.groceries) {
      let sortedList = set.list.sort((a, b) => a.item.localeCompare(b.item));
      set = { owner: set.owner, list: sortedList };
      newList.push(set);
    }
    this.setState({ groceries: newList });
  };

  sortNum = event => {
    let newList = [];
    for (let set of this.state.groceries) {
      let sortedList = set.list.sort((a, b) => a.quantity - b.quantity);
      set = { owner: set.owner, list: sortedList };
      newList.push(set);
    }
    this.setState({ groceries: newList });
  };

  removeItem = (owner, item) => {
    let targetList = this.state.groceries.filter(set => set.owner === owner);
    let removedList = targetList[0].list.filter(
      list => list.item !== item.item
    );
    let remainingLists = this.state.groceries.filter(
      set => set.owner !== owner
    );
    this.setState({
      groceries: [{ owner, list: removedList }, ...remainingLists],
    });
  };

  render() {
    return (
      <div>
        <h1>React Grocery App</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>List New Grocery Item</legend>
            <div className='fields'>
              <label htmlFor='owner'>Owner</label>
              <input
                type='text'
                value={this.state.owner}
                onChange={this.handleChange}
                id='owner'
                placeholder='Owner of this item'
              />
              <br />
              <label htmlFor='item'>Item</label>
              <input
                type='text'
                value={this.state.item}
                onChange={this.handleChange}
                id='item'
                placeholder='Name of Grocery Item'
              />
              <br />
              <label htmlFor='brand'>Brand</label>
              <input
                type='text'
                value={this.state.brand}
                onChange={this.handleChange}
                id='brand'
                placeholder='Grocery Brand'
              />
              <br />
              <label htmlFor='image'>Image</label>
              <input
                type='text'
                value={this.state.image}
                onChange={this.handleChange}
                id='image'
                placeholder='Grocery Image'
              />
              <br />
              <label htmlFor='units'>Units</label>
              <input
                type='text'
                value={this.state.units}
                onChange={this.handleChange}
                id='units'
                placeholder='Unit Size'
              />
              <br />
              <label htmlFor='quantity'>Quantity</label>
              <input
                type='number'
                value={this.state.quantity}
                onChange={this.handleChange}
                id='quantity'
                placeholder='Quantity'
              />
              <br />
            </div>
            <button>Add New Item</button>
          </fieldset>
        </form>
        <button onClick={this.sortAlpha}>Sort Lists Alphabetically</button>
        <button onClick={this.sortNum}>Sort Lists by Quantity</button>
        {this.state.groceries.map(groceryList => (
          <GroceryList
            groceryList={groceryList}
            removeHandler={this.removeItem}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
