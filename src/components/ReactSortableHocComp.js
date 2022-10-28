import React from "react";
import ReactDOM from "react-dom";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import range from "lodash.range";
import { Table, Column, defaultTableRowRenderer } from "react-virtualized";


const SortableTable = SortableContainer(Table, { withRef: true });
const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);

class Fapp extends React.Component {
  state = {
    data: range(1, 21).map(el => ({
      name: `tester-${el}`,
      age: el,
      class: `Class-${el}`
    }))
  };

  _cellRenderer = {
    name: ({ rowData }) => rowData.name,
    age: ({ rowData }) => rowData.age,
    class: ({ rowData }) => rowData.class
  };

  _handleSort = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      data: arrayMove(prevState.data, oldIndex, newIndex)
    }));
  };

  _rowGetter = ({ index }) => {
    return this.state.data[index];
  };

  _rowRenderer = props => {
    return <SortableTableRowRenderer {...props} />;
  };

  render() {
    return (
      <SortableTable
        width={400}
        height={300}
        getContainer={wrappedInstance =>
          ReactDOM.findDOMNode(wrappedInstance.Grid)
        }
        rowRenderer={this._rowRenderer}
        rowGetter={this._rowGetter}
        rowHeight={50}
        rowCount={this.state.data.length}
        data={this.state.data}
        onSortEnd={this._handleSort}
      >
        <Column
          width={200}
          dataKey="name"
          flexGrow={1}
          cellRenderer={this._cellRenderer.name}
        />
        <Column
          width={100}
          dataKey="age"
          cellRenderer={this._cellRenderer.age}
        />
        <Column
          width={100}
          dataKey="class"
          cellRenderer={this._cellRenderer.class}
        />
      </SortableTable>
    );
  }
}

export default Fapp
