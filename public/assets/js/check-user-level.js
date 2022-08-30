$(function () {
    getUsersAccount();
});


function getUsersAccount() {
    $.ajax({
        url: '/api/get/users-account',
        type: 'POST',
        success: function (data) {
            console.log('check-user-level', data);
            console.log('getUsersAccount() | type: ' + data[0].type);
            if (data[0].type === 1) {
                $('#upgrade-account').prop('disabled', true);
                document.getElementById('upgrade-account').style.display = 'none';
            }
            if (data[0].type === 2) {
                $('#upgrade-account').prop('disabled', false);
                document.getElementById('upgrade-account').style.display = 'block';
            }
            if (data[0].type === 3) {
                $('#upgrade-account').prop('disabled', false);
                document.getElementById('upgrade-account').style.display = 'block';
            }
        },
    });
}

