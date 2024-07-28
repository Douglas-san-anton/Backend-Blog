import mongoose from 'mongoose';

const userCollection = 'User';

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    githubId: {
        type: String,
    },
    username: {
        type: String,
    },
});

UserSchema.statics.findOrCreate = function findOrCreate(profile, cb) {
    const userObj = new this();
    this.findOne({ [`${profile.provider}Id`]: profile.id }, function (err, result) {
        if (!result) {
            userObj.username = profile.displayName;
            userObj[`${profile.provider}Id`] = profile.id;
            userObj.save(cb);
        } else {
            cb(err, result);
        }
    });
};

export default mongoose.model(userCollection, UserSchema);
