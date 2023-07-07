const content = document.querySelector('#content');
const body = document.querySelector('body');

function createMainPage() {
  const header = document.createElement('div');
  header.classList.add('header');

  const h1 = document.createElement('h1');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);

  const p = document.createElement('p');
  p.id = 'p';
  p.textContent = '';
  header.appendChild(p);

  const replayButton = document.createElement('button');
  replayButton.classList.add('replay-btn');
  replayButton.textContent = 'Replay';
  header.appendChild(replayButton);

  body.insertBefore(header, content);
}

function createDOMField(field) {
  const gamefield = document.createElement('div');
  gamefield.classList.add('gamefield');
  Object.keys(field.hash).forEach((key) => {
    const square = document.createElement('div');
    square.id = `_${key.replace(',', '-')}`;
    square.classList.add('square');
    gamefield.appendChild(square);
  });
  content.appendChild(gamefield);
}

function changeHeader(text) {
  const p = document.querySelector('#p');
  p.textContent = text;
}

function addRedHit(id) {
  const square = document.querySelector(`#${id}`);
  square.innerHTML = `
    <svg class="red" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" sodipodi:docname="redX.svg" inkscape:version="1.0 (4035a4fb49, 2020-05-01)" id="svg8" version="1.1" viewBox="0 0 52.916666 52.916666" height="200" width="200">
      <defs id="defs2"/>
      <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="-8" inkscape:window-x="-8" inkscape:window-height="837" inkscape:window-width="1600" units="px" fit-margin-bottom="0" fit-margin-right="0" fit-margin-left="0" fit-margin-top="0" showgrid="false" inkscape:document-rotation="0" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="325.01893" inkscape:cx="452.16172" inkscape:zoom="0.49497475" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"/>
      <metadata id="metadata5">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
            <dc:title/>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g transform="translate(9.3544215,9.3544215)" id="layer1" inkscape:groupmode="layer" inkscape:label="Layer 1">
        <path sodipodi:nodetypes="cc" id="path833" d="M -9.3544215,-9.3544215 43.562245,43.562245" style="fill:none;stroke:#ff0000;stroke-width:3.30729;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
        <path sodipodi:nodetypes="cc" id="path835" d="M -9.3544215,43.562245 43.562245,-9.3544215" style="fill:none;stroke:#ff0000;stroke-width:3.30729;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
      </g>
    </svg>
  `;
}

function addGrayHit(id) {
  const square = document.querySelector(`#${id}`);
  square.innerHTML = `
  <svg class="gray" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.0" viewBox="0 0 64 64" id="svg2" inkscape:version="0.91 r13725" sodipodi:docname="Location_dot_lightgrey.svg">
      <metadata id="metadata7">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1600" inkscape:window-height="837" id="namedview5" showgrid="false" inkscape:zoom="7.3822688" inkscape:cx="32" inkscape:cy="32" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg2"/>
      <defs id="defs8"/>
      <circle cx="32" cy="32" r="30" id="circle4" style="fill:#808080;stroke:none;stroke-width:0.1"/>
    </svg>
  `;
}

function addDOMShip(ids) {
  ids.forEach((id) => {
    const square = document.querySelector(`#${id}`);
    square.classList.add('ship');
  });
}

function markShip(ids) {
  ids.forEach((id) => {
    const square = document.querySelector(`#${id}`);
    square.classList.add('ship-high');
  });
}

function deMarkShip(ids) {
  ids.forEach((id) => {
    const square = document.querySelector(`#${id}`);
    square.classList.remove('ship-high');
  });
}

export {
  createDOMField,
  createMainPage,
  addRedHit,
  addGrayHit,
  markShip,
  changeHeader,
  deMarkShip,
};
