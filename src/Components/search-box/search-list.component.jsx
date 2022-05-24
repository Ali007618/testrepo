// import { Component } from "react";

import "./search-box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  </div>
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         ></input>
//       </div>
//     );
//   }
// }

export default SearchBox;
