// Component interface that declares the common operations for leaf and composite components
class Component {
    constructor(name) {
      this.name = name;
    }
  
    operation() {
      throw new Error("operation() must be overridden.");
    }
  
    add(component) {
      throw new Error("add(component) must be overridden.");
    }
  
    remove(component) {
      throw new Error("remove(component) must be overridden.");
    }
  
    getChild(index) {
      throw new Error("getChild(index) must be overridden.");
    }
  }
  
  // Leaf component class that represents the individual elements
  class Leaf extends Component {
    operation() {
      console.log(`Leaf ${this.name} operation called.`);
    }
  }
  
  // Composite component class that contains leaf and composite components
  class Composite extends Component {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    operation() {
      console.log(`Composite ${this.name} operation called.`);
      for (const child of this.children) {
        child.operation();
      }
    }
  
    add(component) {
      this.children.push(component);
      console.log(`Added ${component.name} to Composite ${this.name}.`);
    }
  
    remove(component) {
      const index = this.children.indexOf(component);
      if (index !== -1) {
        this.children.splice(index, 1);
        console.log(`Removed ${component.name} from Composite ${this.name}.`);
      }
    }
  
    getChild(index) {
      if (index >= 0 && index < this.children.length) {
        return this.children[index];
      }
      return null;
    }
  }
  
  // Usage of the Composite pattern
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");

const composite1 = new Composite("Composite 1");
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite("Composite 2");
composite2.add(leaf3);
composite2.add(composite1);

// Additional operations on the composite structure
composite2.operation();

// Add a new leaf to composite1
const leaf4 = new Leaf("Leaf 4");
composite1.add(leaf4);

// Remove leaf2 from composite1
composite1.remove(leaf2);

// Call operation on composite1
composite1.operation();

  