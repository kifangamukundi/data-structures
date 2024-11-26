// Flyweight factory that creates and manages flyweight objects
class CharacterFlyweightFactory {
    constructor() {
      this.flyweights = {};
    }
  
    getCharacterFlyweight(character) {
      if (!this.flyweights[character]) {
        this.flyweights[character] = new CharacterFlyweight(character);
      }
      return this.flyweights[character];
    }
  }
  
  // Flyweight interface
  class Flyweight {
    format(extrinsicCharacter) {
      // Common formatting operation shared by flyweight objects
    }
  }
  
  // Concrete flyweight class representing a character
  class CharacterFlyweight extends Flyweight {
    constructor(intrinsicCharacter) {
      super();
      this.intrinsicCharacter = intrinsicCharacter;
    }
  
    format(extrinsicCharacter) {
      // Specific formatting operation for the character flyweight object
      console.log(`Character '${this.intrinsicCharacter}' formatted with ${extrinsicCharacter}.`);
    }
  }
  
  // Context class representing a formatted text
  class FormattedText {
    constructor() {
      this.text = "";
      this.characterFlyweightFactory = new CharacterFlyweightFactory();
    }
  
    formatText(text, character) {
      for (const char of text) {
        const characterFlyweight = this.characterFlyweightFactory.getCharacterFlyweight(char);
        characterFlyweight.format(character);
        this.text += char;
      }
    }
  }
  
  // Usage of the Flyweight pattern
  const formattedText = new FormattedText();
  formattedText.formatText("Hello, world!", "bold");
  