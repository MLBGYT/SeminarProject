
const apiResult = [{
    title: "title1",
    artist: "desc1",
    length: "out1",
}, {
    title: "title2",
    artist: "desc2",
    length: "out2",
}, {
    title: "title3",
    artist: "desc3",
    length: "out3",
}, {
    title: "title4",
    artist: "desc4",
    length: "out4",
}, {
    title: "title5",
    artist: "desc5",
    length: "out5",
}, {
    title: "title6",
    artist: "desc6",
    length: "out6",
}, {
    title: "title7",
    artist: "desc7",
    length: "out7",
}];

const container = document.getElementById('accordion');

apiResult.forEach((result, idx) => {
    // Create card element


    // Construct card content
    const content = `

      <li data-parent="#accordion" class="listEdit" draggable="true">
          <i style="color: #e76f0c;" class="songlisthover bi bi-list"></i>
          ${result.artist} - ${result.title} : ${result.length}
      </li>
            
    `;

    // Append newyly created card element to the container
    container.innerHTML += content;
})


