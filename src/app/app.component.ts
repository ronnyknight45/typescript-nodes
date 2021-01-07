import { Component, VERSION } from "@angular/core";
import { LinkModel } from "./LinkModel";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  nodes = [
    { id: 1, reflexive: false, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 2, reflexive: true, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 3, reflexive: false, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 4, reflexive: false, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 5, reflexive: false, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 6, reflexive: false, collapsing: 0, collapsed: false, parentNode: 1 },
    { id: 7, reflexive: false, collapsing: 0, collapsed: false, parentNode: 6 }
  ];
  links = [
    { source: this.nodes[0], target: this.nodes[2], left: false, right: true },
    { source: this.nodes[0], target: this.nodes[2], left: false, right: true },
    { source: this.nodes[0], target: this.nodes[3], left: false, right: true },
    { source: this.nodes[0], target: this.nodes[4], left: false, right: true },
    { source: this.nodes[0], target: this.nodes[5], left: false, right: true },
    { source: this.nodes[5], target: this.nodes[6], left: false, right: true }
  ];

  getTargetNode(sourceNode: any) {
    debugger
    let foundNode: any;
    this.nodes.forEach(node => {
      debugger
      if (sourceNode.parentNode == node.id) foundNode = node;
    });

    return foundNode;
  }

  generatedLinks = [];

  getNode(nodeId: number) {
    let foundNode: any;
    this.nodes.forEach(node => {
      debugger
      if (node.id == nodeId) {
        foundNode = node;
      }
    });

    return foundNode;
  }

  createLinks() {
    debugger
    this.nodes.forEach(node => {
      debugger
      let link = new LinkModel(this.getNode(node.parentNode), node, false, true);
      this.generatedLinks.push(link);
    });

    return this.generatedLinks;
  }

  ngOnInit() {
    console.log(this.createLinks());
  }

  // createLinks();
  // console.log(generatedLinks);
}
