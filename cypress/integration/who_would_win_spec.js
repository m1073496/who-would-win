describe('Who Would Win', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('App Load', () => {

    it('Should display app title and button', () => {
      cy.get('[data-cy=home-view]').should('exist');
      cy.get('[data-cy=matchup-container]').should('not.exist');
      cy.get('[data-cy=stats-container]').should('not.exist');

      cy.get('[data-cy=App-title]').contains('Who Would Win?');
      cy.get('[data-cy=fight-button]').contains(`Let's Fight!`);
    });

    it('Should provide a way to navigate to the Match Up view', () => {
      cy.get('[data-cy=fight-button]').click();
      cy.get('[data-cy=matchup-container]').should('exist');
      cy.get('[data-cy=home-view]').should('not.exist');
      cy.get('[data-cy=stats-container]').should('not.exist');
    });

  });

  describe('Match Up View', () => {

    beforeEach(() => {
      cy.get('[data-cy=fight-button]').click();
    });

    it('should display relevant components', () => {
      cy.get('[data-cy=header]').contains('Who Would Win?');
      cy.get('[data-cy=first-fighter-box]').should('be.visible');
      cy.get('[data-cy=second-fighter-box]').should('be.visible');
      cy.get('[data-cy=vs]').contains('VS');
      cy.get('[data-cy=navigation]').should('exist');
      cy.get('[data-cy=db-link]').contains('Dragon Ball');
      cy.get('[data-cy=yyh-link]').contains('Yu Yu Hakusho');
      cy.get('[data-cy=hxh-link]').contains('Hunter X Hunter');
    });

    it('should render correct characters on Character Lists on click', () => {

      cy.get('[data-cy=db-link]').click();
      cy.fixture('/DBdata.json').then((data) => {
          const allCharacterNames = data.characters.map(character => character.name);
          allCharacterNames.forEach(characterName => {
            cy.get('button').contains(characterName)
          });
      });
      cy.fixture('/YYHdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });
      cy.fixture('/HXHdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });


      cy.get('[data-cy=yyh-link]').click();
      cy.fixture('/YYHdata.json').then((data) => {
          const allCharacterNames = data.characters.map(character => character.name);
          allCharacterNames.forEach(characterName => {
            cy.get('button').contains(characterName)
          });
      });
      cy.fixture('/HXHdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });
      cy.fixture('/DBdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });


      cy.get('[data-cy=hxh-link]').click();
      cy.fixture('/HXHdata.json').then((data) => {
          const allCharacterNames = data.characters.map(character => character.name);
          allCharacterNames.forEach(characterName => {
            cy.get('button').contains(characterName)
          });
      });
      cy.fixture('/YYHdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });
      cy.fixture('/DBdata.json').then((data) => {
          const otherCharacterNames = data.characters.map(character => character.name);
          otherCharacterNames.forEach(characterName => {
            cy.get('button').should('not.have.value', characterName)
          });
      });
    });

    it('Should update fighter boxes with user selections', () => {
      cy.get('[data-cy=db-link]').click();
      cy.get('button[value="Goku"]').click();
      cy.get('[src="/static/media/goku.0f6b8bb7.png"]').should('exist');

      cy.get('[data-cy=yyh-link]').click();
      cy.get('button[value="Yusuke Urameshi"]').click();
      cy.get('[src="/static/media/yusuke.4f12670f.png"]').should('exist');
    });

    it('Should remove individual fighter selections on button click', () => {
      cy.get('[data-cy=db-link]').click();
      cy.get('button[value="Goku"]').click();
      cy.get('[data-cy=yyh-link]').click();
      cy.get('button[value="Yusuke Urameshi"]').click();

      cy.get('img[data-cy="clear-first-button"]').click();
      cy.get('[src="/static/media/goku.0f6b8bb7.png"]').should('not.exist');

      cy.get('img[data-cy="clear-second-button"]').click();
      cy.get('[src="/static/media/yusuke.4f12670f.png"]').should('not.exist');
    });

    it('should show user voting options and match up outcomes when two fighters are slected', () => {
      cy.get('[data-cy=db-link]').click();
      cy.get('button[value="Goku"]').click();
      cy.get('[data-cy=yyh-link]').click();
      cy.get('button[value="Yusuke Urameshi"]').click();

      cy.get('[data-cy=first-vote]').should('exist');
      cy.get('[data-cy=second-vote]').should('exist');
      cy.get('div[class="sc-bdvvaa iHLwEg"]').should('exist');
    });

    it('should provide a way to navigate to the character stats page', () => {
      cy.get('[data-cy=first-fighter-box]').click();
      cy.get('p').contains('Make a selection to see some stats!');

      cy.get('[data-cy=matchup-container]').should('not.exist');
      cy.get('[data-cy=home-view]').should('not.exist');
    });

  });

});
