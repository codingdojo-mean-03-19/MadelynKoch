function formatDate(date) {
    var hours = date.getHours();
    var dayHalf = 'am';
    var minutes = date.getMinutes();
    if(hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12; 
        dayHalf = 'pm';
    }

    var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = months[date.getMonth()]
    return hours + ':' + minutes + ' ' + dayHalf + ' ' + month + ' ' + date.getDay() + ', ' + date.getYear();
}

module.exports = {formatDate}