var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  email: { type: String, required: true },
  password: { type: String },
  friends: [Schema.Types.ObjectId],
  // req_pending => user made a friendsrequest | res_pending => other person made a friendsrequest to user
  friend_req_pending: [Schema.Types.ObjectId],
  firend_res_pending: [Schema.Types.ObjectId],
  facebookId: { type: String },
});

UserSchema.virtual('name').get(function () {
  var fullname = this.first_name + ' ' + this.last_name;
  return fullname;
});

UserSchema.virtual('url').get(function () {
  return '/profile' + this._id;
});

UserSchema.statics.findOrCreate = function findOrCreate(profile, cb) {
  var userObj = new this();
  this.findOne({ _id: profile.id }, function (err, result) {
    if (!result) {
      userObj.username = profile.displayName;
      //....
      userObj.save(cb);
    } else {
      cb(err, result);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);
