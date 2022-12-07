import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../../class/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];

  ngOnInit() {
  }

  toggleChild(node: { showChildren: boolean; }) {
    node.showChildren =! node.showChildren;
  }
 
}
