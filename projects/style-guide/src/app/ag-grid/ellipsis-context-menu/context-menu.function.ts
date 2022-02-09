import { ICellRendererParams } from 'ag-grid-community';

export function openAgGridContextMenuOnClick(
  params: ICellRendererParams,
  mouseEvent: MouseEvent
) {
  const { rowIndex, node, column, value, api } = params;

  // get the reference to agGrid cell, so that we can call the showMenu function
  // rowRenderer is a private object - be careful about this for the future
  const cell = (api as any).rowRenderer.rowCompsByIndex[
    rowIndex
  ].getRenderedCellForColumn(column);

  cell.beans.contextMenuFactory.showMenu(node, column, value, mouseEvent);
}
