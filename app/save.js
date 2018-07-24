var Save = {};

Save.init = function() {
  this.save = window.localStorage;
  this.stateJSON = this.save.getItem('game');
  if (this.stateJSON && this.stateJSON.length) {
    this.state = JSON.parse(this.stateJSON);
    Utils.print('Game state restored');
  } else {
    this.save.setItem('game', JSON.stringify(Setup._save));
    this.stateJSON = this.save.getItem('game');
    this.state = JSON.parse(this.stateJSON);
    Utils.print('Game state initiated');
  }
}
