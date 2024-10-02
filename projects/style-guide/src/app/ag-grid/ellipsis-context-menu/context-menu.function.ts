import { ICellRendererParams } from 'ag-grid-community';

export function openAgGridContextMenuOnClick(
  params: ICellRendererParams,
  mouseEvent: MouseEvent
) {
  const { node, column, value, api } = params;
  const rowIndex = node.rowIndex;

  // Check if rowIndex is not null before using it
  if (rowIndex !== null && rowIndex !== undefined) {
    // get the reference to agGrid cell, so that we can call the showMenu function
    const cell = (api as any).rowRenderer.rowCompsByIndex[rowIndex].getRenderedCellForColumn(column);

    cell.beans.contextMenuFactory.showMenu(node, column, value, mouseEvent);
  } else {
    console.error('Row index is null or undefined.');
  }
}
