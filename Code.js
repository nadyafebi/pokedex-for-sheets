// @OnlyCurrentDoc
var ADDON_NAME = 'PokeDex';

function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  SpreadsheetApp.getUi()
                .createMenu(ADDON_NAME)
                .addItem('Open', 'showSidebar')
                .addToUi();
}

function showSidebar() {
  var sidebar = HtmlService.createTemplateFromFile('sidebar')
                           .evaluate()
                           .setTitle(ADDON_NAME);

  SpreadsheetApp.getUi().showSidebar(sidebar);
}

function getPokemon(name)
{
  var url = "http://pokeapi.co/api/v2/pokemon/" + name;
  var options = {
    'method': 'GET'
  };

  var response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
}
