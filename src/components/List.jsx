import React, { PureComponent } from "react";
import styled, { css } from "react-emotion";

const List = styled("ul")`
  list-style: none;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  overflow: hidden;
`;

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
