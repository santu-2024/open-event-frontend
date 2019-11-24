import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    save() {
      try {
        let systemMessages = this.model;
        systemMessages.forEach(systemMessage => {
          systemMessage.save();
        });
        this.notify.success(this.l10n.t('Changes have been saved successfully'),
          {
            id: 'message_success'
          });
      } catch (e) {
        this.notify.error(this.l10n.t(e.errors[0].detail),
          {
            id: 'change_error_message'
          });
      }
    }
  }
});
