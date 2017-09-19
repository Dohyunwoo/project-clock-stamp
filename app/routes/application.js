import Ember from 'ember';

export default Ember.Route.extend({
  tl:[],
  actions: {
    listpush(){
      let wd = this.currentModel;
      this.get('tl').pushObject(wd);
      this.refresh();
    },
    listdelete(time){
      this.get('tl').removeObject(time);
    }
  },
  model(){
    return new Date();
  },
  setupController(controller,model){
    // this._super(controller,model);
    this.controller.set('model',model);
    this.controller.set('tl',this.tl);
  }
});
