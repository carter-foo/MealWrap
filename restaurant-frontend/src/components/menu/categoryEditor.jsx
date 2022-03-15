import React from "react";

class CategoryEditor extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.changeHandler.bind(this);
  // }

  state = {
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

  render() {
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
            {this.state.category.items.map((item) => {
              return (
                <tr>
                  <td>
                    <input
                      type="input"
                      value={item.name}
                      onChange={(e) => {
                        this.setState({
                          category: {
                            name: e.target.value,
                          },
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      value={item.description}
                      onChange={this.handleChange}
                    />
                  </td>
                  <td>
                    <input value={item.price} onChange={this.handleChange} />
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
