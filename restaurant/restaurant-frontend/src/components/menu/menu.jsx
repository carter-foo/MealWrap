import React from "react";
import CategoryEditor from "./categoryEditor";
import { apiGet } from "../../scripts/callAPI.js";
import APIDirectButton from "../apiDirectButton";
import DirectButton from "../directButton";

/*
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
*/

const menu = {
  description: "This is the menu for this restaurant",
  categories: []
};

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "Burgers",
      selectedIndex: 0,
      save: false,
      description: "This is the menu for this restaurant",
      categories: [{
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
      },],
    };

    this.handleChange = this.handleChange.bind(this);
    this.categoryEditorChange = this.categoryEditorChange.bind(this);
    //this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var s = this.state;
    var t = this;

    apiGet('/menu', this.state).then(function (r) {
      //console.log("yo");
      if (r != 'invalid') {
        //menu.categories=r;
        //var v = r;
        var c = new Array();

        r.forEach((row) => {
          var f;
          if (c.length != 0) {
            if ((f = c.findIndex(ro => ro.name == row.category)) == 0) {
              c[f].items.push(row);
            }
            else
            {
              c.push({ name: row.category, items: [row] });
              //console.log(f);
            }
          }
          else {
            c.push({ name: row.category, items: [row] });
          }
        })

        /*
        var c = [{
          name: "Burgers",
          items: v,
        }]
  */
        s.categories = c;
        t.setState({ categories: c });
      }
      else {
        console.log("invalid");
      }
    })
  }

  handleChange(e, i) {
    console.log("Category selected!");
    this.setState({ selectedCategory: e.target.value });
    this.setState({ selectedIndex: i });
    //this.categoryEditorChange();
  }

  categoryEditorChange(ob) {
    var v = this.state.categories.find((obj) => obj.name == this.state.selectedCategory);
    ob.state.category = v;
  }

  render() {
    var i = 0;

    return (
      <div>
        <h1>Edit the menu</h1>
        <select value={this.state.selectedCategory} onChange={(e) => this.handleChange(e)}>

          {this.state.categories.map((obj, i) => (
            <option value={obj.name} key={i} readOnly>{obj.name}</option>
          ))}

        </select>

        <CategoryEditor
          category={this.state.categories.find(
            (obj) => obj.name == this.state.selectedCategory
          )} id="items"
          func={this.categoryEditorChange}
        />
        <APIDirectButton text="Save changes" route="/menu" state={this.state} func={this.handleText1Change}/>
        <DirectButton route='/home' text='Cancel' />
      </div>
    );
  }
}

export default Menu;
