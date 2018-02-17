import React, { PureComponent } from "react";
import styled, { css } from "react-emotion";

function List() {
  return styled("ul")`
    width: 100%;
  `;
}
// const List = ({ items, handleItemClick }) => (
//   <ul>
//     {items.map((item, index) => (
//       <ListItem
//         key={item.id || index}
//         item={item}
//         onItemClick={handleItemClick}
//       />
//     ))}
//   </ul>
// );

const listItemStyle = css`
  color: black;
  font-size: 18px;
`;
class ListItem extends PureComponent {
  handleItemClick = e => {
    e.stopPropagation();
    this.props.onItemClick(this.props.item);
  };

  render() {
    return (
      <li
        className={css`
          ${listItemStyle} ${this.props.className};
        `}
        onKeyPress={this.handleItemClick}
        onClick={this.handleItemClick}
        role="menuitem"
        tabIndex={this.props.tabIndex || 0}
      >
        {this.props.children}
      </li>
    );
  }
}

export { List, ListItem };
