/* global document */

import component from '../src/components/update-synopsis';

describe('Component', () => {
  let node;
  let team;

  beforeEach(() => {
    node = document.createElement('div');
    node.setAttribute('data-update-template-event', '<li>#{player}</li>');
    node.setAttribute('data-update-template-own-goal', "<span class='sdc-site-match-header__event-own-goal' aria-hidden='true' role='presentation'>{{translate 'sdc-site-match-header.synopsis.ownGoal'}}</span><span class='sdc-site-match-header__event-own-goal--verbose'>{{translate 'sdc-site-match-header.synopsis.ownGoalVerbose'}}</span>");
    node.setAttribute('data-update-template-sent-off', "<span class='sdc-site-match-header__icon-red'><svg xmlns='http://www.w3.org/2000/svg' width='10' height='16' aria-label='Red card' role='img'><title>Red card</title><rect width='100%' height='100%' y='8' fill='#d0021b' fill-rule='evenodd' stroke='#fff' stroke-width='1' stroke-opacity='0.7' rx='2' transform='translate(0 -8)'></rect></svg></span>");
    node.setAttribute('data-penalty', 'pen');
    node.setAttribute('data-owngoal', 'ET');

    team = {
      synopsis: 'J Barbosa 24~W Cristaldo Farias 40, 92, 97~I Plastun s/o 44'
    };
  });

  afterEach(() => {
    node = null;
    team = null;
  });

  it('is a function', () => {
    expect(typeof component).to.equal('function');
  });

  it('sets the synopsis to the correct format for a sending off', () => {
    component(node, team);
    expect(node.innerHTML).to.equal(
      '<li>J Barbosa (24\')</li><li>W Cristaldo Farias (40\', 92\', 97\')</li><li>I Plastun <span class="sdc-site-match-header__icon-red"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" aria-label="Red card" role="img"><title>Red card</title><rect width="100%" height="100%" y="8" fill="#d0021b" fill-rule="evenodd" stroke="#fff" stroke-width="1" stroke-opacity="0.7" rx="2" transform="translate(0 -8)"></rect></svg></span> (44\')</li>'
    );
  });

  it('sets the synopsis to the correct format for a penalty', () => {
    team.synopsis = 'M Donald 17~G Kanga s/o 45+3~L Ibanez 62 pen';
    component(node, team);
    expect(node.innerHTML).to.equal(
      '<li>M Donald (17\')</li><li>G Kanga <span class="sdc-site-match-header__icon-red"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" aria-label="Red card" role="img"><title>Red card</title><rect width="100%" height="100%" y="8" fill="#d0021b" fill-rule="evenodd" stroke="#fff" stroke-width="1" stroke-opacity="0.7" rx="2" transform="translate(0 -8)"></rect></svg></span> (45+3\')</li><li>L Ibanez (62\' pen)</li>'
    );
  });

  it('sets the synopsis to the correct format for an own goal', () => {
    team.synopsis = 'P Pogba 17~G Kanga 45+3~L Ibanez 62 og';
    component(node, team);
    expect(node.innerHTML).to.equal(
      '<li>P Pogba (17\')</li><li>G Kanga (45+3\')</li><li>L Ibanez (62\' <span class="sdc-site-match-header__event-own-goal" aria-hidden="true" role="presentation">{{translate \'sdc-site-match-header.synopsis.ownGoal\'}}</span><span class="sdc-site-match-header__event-own-goal--verbose">{{translate \'sdc-site-match-header.synopsis.ownGoalVerbose\'}}</span>)</li>'
    );
  });

  it('removes outdated information when there is no synopsis returned', () => {
    node.innerHTML = '<li>existing player</li><li>existing event</li>';
    component(node, {});
    expect(node.innerHTML).to.equal('');

    component(node, { synopsis: 'Test 1' });
    expect(node.innerHTML).to.equal("<li>Test (1')</li>");

    component(node, { synopsis: '' });
    expect(node.innerHTML).to.equal('');
  });
});
