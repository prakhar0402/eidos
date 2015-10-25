javascript: (function () {


  function se(d) {
    return d.selection ? d.selection.createRange().text : d.getSelection()
  }

  s = se(document);
  for (i = 0; i < frames.length && !s; i++) s = se(frames[i].document);
  //if (!s || s == '') s = prompt('Visit the app at http://thevocab.club');
  if (!s || s == '') window.location.href = "http://45.79.65.134";
  var x = decodeURI(encodeURIComponent(s)).split(" ")[0];
  SelRange = s.getRangeAt(0);

  var render_definition = function (data) {
    rect = SelRange.getBoundingClientRect();
    elem = document.createElement("div");
    elem.id = 'eidos-definition';
    console.log(elem.style);
    elem.style.padding = '20px';
    elem.style.border = '1px solid gray';
    elem.style.position = 'absolute';
    elem.style.top = (rect.top + rect.height + window.scrollY) + 'px';
    elem.style.left = (rect.left + window.scrollX) + 'px';
    elem.className = "eidos-definition-tooltip";
    elem.innerHTML = '<style>.eidos-definition-tooltip{max-width:400px;border-radius:15px;background-color:rgba(255,239,216,0.9)}</style>';
    elem.innerHTML += "<h4>Definition</h4>" + data.description + '. <a onclick="this.parentElement.style.display=\'none\';return false;">Close</a><br/><small>&nbsp;&nbsp;&nbsp;&nbsp;TheVocabClub Team :)</small>';
    document.body.appendChild(elem);
    createHandler = function (elem) {
      return function () {
        elem.style.display = 'none';
      };
    };
    setTimeout(createHandler(elem), 5000);
  };

  var xmlhttp = new XMLHttpRequest();
  var url = "http://45.79.65.134:3500/api/dictionary?keyword=" + x;
  xmlhttp.open("GET", url);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json_data = JSON.parse(xmlhttp.responseText);
      console.log(json_data);
      render_definition(json_data);
    }
  };
  xmlhttp.send();

})();
