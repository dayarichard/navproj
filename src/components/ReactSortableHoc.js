import React, { useState } from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove
} from "react-sortable-hoc";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import { TableCell, TableRow,ListItemSecondaryAction, Stack, Paper } from "@mui/material";

export const DragHandle = SortableHandle(() => (
  <TableCell>
    <DragIndicatorIcon />
  </TableCell>
));

export const SortableItem = SortableElement(({ id,text, }) => (
  <TableRow ContainerComponent="div">
    <TableCell>{id}{text}</TableCell>
      <DragHandle />
  </TableRow>
));

export const SortableListContainer = SortableContainer(({ items }) => (
  <Stack component="div">
    {items.map(({ id, text }, index) => (
      <SortableItem key={id} index={index} text={text} />
    ))}
  </Stack>
));

export const SortableList = () => {
  const [items, setItems] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" }
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(items => arrayMove(items, oldIndex, newIndex));
  };

  return (
    <SortableListContainer
      items={items}
      onSortEnd={onSortEnd}
      useDragHandle={true}
      lockAxis="y"
    />
  );
};


