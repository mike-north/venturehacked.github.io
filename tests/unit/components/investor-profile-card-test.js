import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('investor-profile-card', 'Unit | Component | investor profile card', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  needs: ['component:md-card', 'component:md-card-content', 'component:md-card-reveal'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
