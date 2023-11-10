/* global jest */

import component from '../src/components/play-video';

describe('Testing iFramed Brightcove player', () => {
  let rootEl;
  let videoEl;
  let videoContainerEl;
  const playerId = '1';
  const containerId = `sdc-site-video-${playerId}`;

  beforeEach(() => {
    rootEl = document.body;
    videoContainerEl = document.createElement('iframe');
    videoContainerEl.id = containerId;
    videoContainerEl.classList.add('sdc-site-match-header__video-embed-iframe');
    rootEl.appendChild(videoContainerEl);
    videoEl = document.createElement('div');
    videoEl.dataset.componentName = 'sdc-site-video';
    videoEl.dataset.sdcVideoId = playerId;
    videoEl.dataset.provider = 'brightcove';
    videoContainerEl.contentWindow.document.body.appendChild(videoEl);
  });

  it('is an object', () => {
    expect(typeof component).toEqual('object');
  });

  it('resolves the promise', () => {
    return component.getPlayer(rootEl).then(data => {
      expect(data.getAttribute('data-component-name')).toBe('sdc-site-video');
      expect(data.getAttribute('data-provider')).toBe('brightcove');
      expect(data.getAttribute('data-sdc-video-id')).toBe('1');
    });
  });

  it('fails if cannot find iframe', () => {
    rootEl = document.body.innerHTML = '';
    rootEl = document.createElement('div');
    expect(component.getPlayer(rootEl)).rejects.toThrowError('Missing video component');
  });

  it('fails if cannot find VideoComponentElement', () => {
    videoContainerEl.contentWindow.document.body.innerHTML = '';
    videoEl.dataset.componentName = 'foobar';
    videoContainerEl.contentWindow.document.body.appendChild(videoEl);
    expect(component.getPlayer(rootEl)).rejects.toThrowError('Missing video component');
  });
});
