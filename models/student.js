// when something else uses this file, m.e is data/function that this file provides
module.exports = (sequelize, DataTypes) => {

    //describes not only how Student object is structured
    //but also how data about student object will be stored in database
    // these will be the column headers and datatypes
    let Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING
        },

        starID: {
            type: DataTypes.STRING
        },

        present: {
            type: DataTypes.BOOLEAN
        }

    })
    //force specifics whether to drop the table
    // force true means will overwrite previous database info
    // false means keep the table
    Student.sync( {force: false} ).then( () => {
        console.log('Synced student table ')
    })

    return Student //Student model
}