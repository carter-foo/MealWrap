import React from "react";
import CategoryEditor from "../components/menu/categoryEditor";

const menu = {
  description: "This is the menu for this restaurant",
  categories: [
    {
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
    {
      name: "Sides",
      items: [
        {
          name: "French Fries",
          description: "description",
          price: 3.0,
        },
        {
          name: "Salad",
          description: "description",
          price: 3.5,
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Coca-Cola",
          description: "description",
          price: 2.0,
        },
        {
          name: "Root Beer",
          description: "description",
          price: 2.0,
        },
        {
          name: "Sprite",
          description: "description",
          price: 2.0,
        },
      ],
    },
  ],
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "Burgers",
      selectedIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.categoryEditorChange = this.categoryEditorChange.bind(this);
  }

  handleChange(e, i) {
    console.log("Category selected!");
    this.setState({ selectedCategory: e.target.value });
    this.setState({ selectedIndex: i});
    this.forceUpdate();
    this.categoryEditorChange();
  }

  categoryEditorChange(ob)
  {
    var v = menu.categories.find((obj) => obj.name == this.state.selectedCategory);
    ob.state.category=v;
    console.log("to");
  }

  render() {
    var i = 0;

    return (
      <div>
        <h1>Edit the menu</h1>
        <select value={this.state.selectedCategory} onChange={(e) => this.handleChange(e)}>

          {menu.categories.map((obj, i) => (
            <option value={obj.name} key={i} readOnly>{obj.name}</option>
          ))}

        </select>

        <CategoryEditor
          category={menu.categories.find(
            (obj) => obj.name == this.state.selectedCategory
          )} id="items"
          func={this.categoryEditorChange}
        />

      </div>
    );
  }
}

export default Menu;
