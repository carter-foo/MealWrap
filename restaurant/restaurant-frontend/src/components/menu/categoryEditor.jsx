import React from "react";

class CategoryEditor extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.changeHandler.bind(this);

    this.state = {
      category: {
        name: "Burgers",
        items: [
          {
            name: "McSingle",
            description: "description",
            price: 5.0,
          },
          {
            name: "McDouble",
            description: "description",
            price: 6.25,
          },
          {
            name: "McTriple",
            description: "description",
            price: 7.5,
          },
        ],
      },
    };

    this.handleItemNameChange = this.handleItemNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleItemNameChange(event, i)
  {
    this.setState ({[this.state.category.items[i].name]: event.target.value});
    this.state.category.items[i].name = event.target.value;
  }

  handleDescriptionChange(event, i)
  {
    this.setState ({[this.state.category.items[i].description]: event.target.value});
    this.state.category.items[i].description = event.target.value;
  }
23
  handlePriceChange(event, i)
  {
    this.setState ({[this.state.category.items[i].price]: event.target.value});
    this.state.category.items[i].price = event.target.value;
  }

  render() {
    this.props.func(this);

    return (
      <div>
        <h3>{this.state.category.name}</h3>
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            {this.state.category.items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      type="input"
                      value={item.name}
                      onChange={(e) => this.handleItemNameChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      value={item.description}
                      onChange={(e) => this.handleDescriptionChange(e, i)}
                    />
                  </td>
                  <td>
                    <input value={item.price} onChange={(e) => this.handlePriceChange(e, i)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryEditor;
