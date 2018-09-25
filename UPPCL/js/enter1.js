this.on('keypress', function (evt) {
  var key = evt.which;

  if (self.isOpen()) {
    if (key === KEYS.ENTER) {
      self.trigger('results:select');

      evt.preventDefault();
    } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
      self.trigger('results:toggle');

      evt.preventDefault();
    } else if (key === KEYS.UP) {
      self.trigger('results:previous');

      evt.preventDefault();
    } else if (key === KEYS.DOWN) {
      self.trigger('results:next');

      evt.preventDefault();
    } else if (key === KEYS.ESC || key === KEYS.TAB) {
      self.close();

      evt.preventDefault();
    }
  } else {
    if (key === KEYS.ENTER || key === KEYS.SPACE ||
        ((key === KEYS.DOWN || key === KEYS.UP) && evt.altKey)) {
      self.open();

      evt.preventDefault();
    }
    if (key === KEYS.DOWN) {
      if (undefined != this.$element.find('option:selected').next().val()) {
        this.$element.val(this.$element.find('option:selected').next().val());
        this.$element.trigger('change');
      }
      evt.preventDefault();
    }
    if (key === KEYS.UP) {
      if (undefined != this.$element.find('option:selected').prev().val()) {
        this.$element.val(this.$element.find('option:selected').prev().val());
        this.$element.trigger('change');
      }
      evt.preventDefault();
    }
  }
});