
module.exports = class User {
    constructor(id, firstName, lastName, email, gender, appVersion, metaData) {
        this.id = id;
        this.firstName = firstName;
        this.last_name = lastName;
        this.email = email;
        this.gender = gender;
        this.appVersion = appVersion;
        this.metaData = metaData;
        this.profilePhotoUrl = null;
    }

    setProfilePhotoUrl(url) {
        this.profilePhotoUrl = url;
    }
}